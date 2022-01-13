/*
 *  Single event section used to display a single event.
 *  Created On 12 January 2022
 */

import { Component, Prop, State, h } from '@stencil/core';
import { DateTime } from 'luxon';
import calendarIcon from './icons/calendar.svg';
import clockIcon from './icons/clock.svg';
import bellIcon from './icons/bell.svg';

@Component({
    tag: 'l-event',
})
export class Event {
    @Prop() event: any
    @State() eventDetails: any

    componentWillLoad() {
        this.eventDetails = JSON.parse(this.event)

        const time = DateTime.fromMillis(Number(this.eventDetails.meta.time))
        this.eventDetails.meta.time = time.toFormat('h:mm a')
        this.eventDetails.meta.date = time.toFormat('d LLL yyyy')
    }

    render() {
        return <section class="font-medium">
            {/* information of the event */}
            <div class="mb-2 flex items-center justify-center text-sm md:text-base xl:text-lg">
                {/* date of the event */}
                <div class="flex items-center justify-center space-x-1">
                    <div class="mt-[-4px]" innerHTML={calendarIcon}></div>
                    <span>{this.eventDetails.meta.date}</span>
                </div>

                <span class="mx-2">&bull;</span>

                {/* time of the event */}
                <div class="mt-[1px] flex items-center justify-center space-x-1">
                    <div class="mt-[-4px]" innerHTML={clockIcon}></div>
                    <span>{this.eventDetails.meta.time}</span>
                </div>
            </div>
            
            {/* author/host link */}
            <p class="mb-6 text-sm md:text-base xl:text-lg">By <a class="font-semibold text-[#da4167]" target="_blank" rel="noopener" href={this.eventDetails.meta.link}>{this.eventDetails.meta.host}</a></p>

            <h2 class="mb-3 font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{this.eventDetails.title}</h2>

            <p class="mb-6 mx-auto max-w-xl lg:text-lg xl:max-w-2xl">{this.eventDetails.description}</p>

            <div class="flex justify-center">
                <a href={this.eventDetails.link} class="mx-4 text-xs text-white font-medium bg-[#da4167] px-3 py-2 rounded-lg flex space-x-1 items-center transition-colors hover:bg-[#BB254B]">
                    <div innerHTML={bellIcon}></div>
                    <span class="mt-[2px]">Interested</span>
                </a>
            </div>
        </section>
    }
}
