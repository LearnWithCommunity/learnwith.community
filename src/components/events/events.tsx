/*
 *  Events section where we dynamically pull events from Discord.
 *  Created On 12 January 2022
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'l-events'
})
export class Events {
    render() {
        return <div id="events" class="flex justify-center items-center">
            <div class="container mx-auto mt-[5rem] p-10 flex flex-col justify-center text-center items-center space-y-5 dark:text-white">
                <l-event></l-event>
                <l-event class="scale-75"></l-event>
                <l-event class="scale-[.6] -translate-y-14"></l-event>
            </div>
        </div>
    }
}
