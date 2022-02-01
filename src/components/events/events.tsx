/*
 *  Events section where we dynamically pull events from Discord.
 *  Created On 12 January 2022
 */

import { Component, State, h } from '@stencil/core';
import axios from 'axios';

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
        return <div id="events" class="flex flex-col justify-center items-center py-20 bg-[#fbd8c6] dark:bg-[#372b2d] dark:text-white">
            <h1 class="text-4xl font-bold mb-16">Upcoming Events</h1>
            <div class="flex flex-col px-6 space-y-12 lg:space-y-0 lg:flex-row lg:space-x-8">
                {this.events.map(event => <l-event event={JSON.stringify(event)}></l-event>)}
            </div>
        </div>
    }
}
