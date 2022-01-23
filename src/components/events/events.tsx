/*
 *  Events section where we dynamically pull events from Discord.
 *  Created On 12 January 2022
 */

import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'l-events'
})
export class Events {
    @State() events: Array<any> = []

    async componentWillLoad() {
        // send an HTTP request to our API
        // const { data } = await axios({
        //     url: '/api/events'
        // })

        // this.events = data
    }

    render() {
        return <div id="events" class="flex justify-center items-center">
            <div class="container mx-auto mt-[5rem] p-10 flex flex-col justify-center text-center items-center space-y-5 dark:text-white">
                <l-event event={JSON.stringify(this.events[0])}></l-event>
                <l-event event={JSON.stringify(this.events[1])} class="scale-75"></l-event>
                <l-event event={JSON.stringify(this.events[2])} class="scale-[.6] -translate-y-14"></l-event>
            </div>
        </div>
    }
}
