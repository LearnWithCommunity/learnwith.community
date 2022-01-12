/*
 *  Single event section used to display a single event.
 *  Created On 12 January 2022
 */

import { Component, h } from '@stencil/core';
import calendarIcon from './icons/calendar.svg';
import clockIcon from './icons/clock.svg';
import bellIcon from './icons/bell.svg';

@Component({
    tag: 'l-event'
})
export class Event {
    render() {
        return <section class="font-medium my-12">
            {/* information of the event */}
            <div class="mb-2 flex items-center justify-center text-sm">
                {/* date of the event */}
                <div class="flex items-center justify-center space-x-1">
                    <div class="mt-[-4px]" innerHTML={calendarIcon}></div>
                    <span>4th January 2022</span>
                </div>

                <span class="mx-2">&bull;</span>

                {/* time of the event */}
                <div class="mt-[1px] flex items-center justify-center space-x-1">
                    <div class="mt-[-4px]" innerHTML={clockIcon}></div>
                    <span>3PM <small>to</small> 6PM <small>(IST)</small></span>
                </div>
            </div>
            
            {/* author/host link */}
            <p class="mb-6 text-sm">By <a class="font-semibold text-[#da4167]" href="#">Aditya</a></p>

            <h2 class="mb-3 font-semibold text-2xl">Live Classes: Aptitude &amp; Reasoning</h2>

            <p class="mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>

            <div class="flex justify-center">
                <a href="#" class="mx-4 text-xs text-white font-medium bg-[#da4167] px-3 py-2 rounded-lg flex space-x-1 items-center transition-colors hover:bg-[#BB254B]">
                    <div innerHTML={bellIcon}></div>
                    <span class="mt-[2px]">Interested</span>
                </a>
            </div>
        </section>
    }
}
