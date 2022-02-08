/*
 *  Events section where we dynamically pull events from Discord.
 *  Created On 12 January 2022
 */

import { Component, State, h } from '@stencil/core';
import axios from 'axios';
import { links } from '../../store';
import curveSVG from './curve.svg';

@Component({
    tag: 'l-events'
})
export class Events {
    @State() events: Array<any> = []

    async componentWillLoad() {
        // send an HTTP request to our API
        const { data } = await axios({
            url: '/api/events'
        })

        this.events = data
    }

    render() {
        return <div id="events" class="flex flex-col justify-center items-center pt-20 bg-[#fbd8c6] dark:bg-[#372b2d] dark:text-white">
            <h1 class="text-4xl font-bold mb-16">Upcoming Events</h1>
            <div class="flex flex-col px-6 space-y-12 lg:space-y-0 lg:flex-row lg:space-x-8">
                {this.events.map(event => <l-event event={JSON.stringify(event)}></l-event>)}
                { this.events.length == 0 && <div class="font-medium bg-[#fef2ec] rounded-xl p-8 w-full flex flex-col justify-center items-center text-center max-w-[600px] dark:bg-[#22181c]">
                    <h3 class="text font-semibold text-3xl mb-4">The community is 😌 meditating 🧘</h3>
                    <p>Looks like there are no 🤷 upcoming events scheduled at the moment. Check back later for updates, or join the <a href={links.invite} class="text-[#8D29DC] transition-colors hover:text-[#651A9E]">our Discord server</a> to get notified when we schedule an event.</p>
                </div> }
            </div>
            <div class="w-full text-[#fef2ec] dark:text-[#22181c]" innerHTML={curveSVG}></div>
        </div>
    }
}
