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
        return <div id="events" class="relative">
            <div class="container mx-auto p-10 flex flex-col justify-center text-center items-center dark:text-white">
                <l-event></l-event>
                <l-event></l-event>
                <l-event></l-event>
                <l-event></l-event>
            </div>
        </div>
    }
}
