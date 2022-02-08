/*
 *  Fetches events from our Discord server & responds with an array.
 *  Created On 13 January 2022
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios'
import { DateTime } from 'luxon'

interface EventImpl {
    title: string
    description: string
    link: string
    meta: {
        time: string
        host: string
        link: string
    }
}

// parseEvent() takes an event string and outputs a parsed object
// which can be converted to JSON for responding
const parseEvent = (msg: string): EventImpl => {
    // split the message where there is an empty line
    // into different chunks
    const chunks = msg.split('\n\n')

    // get the metadata out, we it needs further processing
    const meta = chunks[2].split('\n') as any

    // create a new event object
    const event = {
        // remove the bold stars from the title
        title: chunks[0].slice(2, -2),

        // remove all newlines & other white spaces from the description
        description: chunks[1].replace(/\n/g, ' ').trim(),

        meta: {
            // grab the time, by ignoring the heading and emoji
            time: meta.find(line => line.match('Time:')).match(/\d+/g)[0],

            // grab the host's name, by ignoring the heading and emoji
            host: meta
                .find(line => line.match('Host:'))
                .split('Host:**')[1]
                .trim(),

            // grab the host's link from within those angle brackets
            link: meta.find(line => line.match('Host Link:')).match(/<(.*?)>/)[1],
        },

        // finally the link of the event
        link: chunks[3],
    }

    return event
}

export default async (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
    // set cache header, we cache the response for a minute
    // before we send another request to Discord's API
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=120')

    // pull the required env variables
    const { DISCORD_EVENTS_CHANNEL, DISCORD_TOKEN } = process.env

    // the ignored messages in the website events channel
    const ignored = ['931143940906823752']

    // fetching the data from Discord's RESTful API
    const { data } = await axios({
        method: 'GET',
        url: `https://discord.com/api/channels/${DISCORD_EVENTS_CHANNEL}/messages?limit=6`,
        headers: {
            Authorization: `Bot ${DISCORD_TOKEN}`,
        },
    })

    // filtering the ignored ones
    const events = data
        .filter(msg => ignored.includes(msg.id) == false)

        // discard other properties, as we only want the message content
        .map(msg => msg.content)

        // parse the message content and return an object instead
        .map(event => parseEvent(event))

        // filter only future events, past events should not be shown
        .filter((event: EventImpl) => {
            const now = DateTime.local().toMillis()
            const eventDate = Number(event.meta.time)

            return eventDate > now
        })

    // trim the events to only get 3 of them
    events.length = 3

    // return the trimmed events with status code 200
    return res.status(200).json(
        // sort them by time created created
        events
            .sort((a, b) => {
                return Number(a.meta.time) - Number(b.meta.time)
            })
            .filter(event => Boolean(event)),
    )
}
