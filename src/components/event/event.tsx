/*
 *  Single event section used to display a single event.
 *  Created On 12 January 2022
 */

import { Component, Prop, State, h } from '@stencil/core';
import { DateTime } from 'luxon';
import calendarIcon from './icons/calendar.svg';
import clockIcon from './icons/clock.svg';
import bellIcon from './icons/bell.svg';

export interface EventImpl {
    title: string
    description: string
    link: string
    meta: {
        time: string
        date?: string
        host: string
        link: string
    }
}

@Component({
    tag: 'l-event',
})
export class Event {
    @Prop() event: string
    @State() eventDetails: EventImpl

    componentWillLoad() {
        this.eventDetails = JSON.parse(this.event)

        const time = DateTime.fromMillis(Number(this.eventDetails.meta.time))
        this.eventDetails.meta.time = time.toFormat('h:mm a')
        this.eventDetails.meta.date = time.toFormat('d LLL yyyy')
    }

    render() {
        return <article class="relative font-medium bg-[#fef2ec] rounded-xl p-8 w-full flex flex-col justify-start max-w-[480px] lg:h-full">
            {/* the calendar hangers */}
            <div class="-mt-16 mx-10 mb-4 flex justify-between">
                <div class="w-14 h-20 rounded-full bg-[#fef2ec] border-[12px] border-[#fbd8c7]"></div>
                <div class="w-14 h-20 rounded-full bg-[#fef2ec] border-[12px] border-[#fbd8c7]"></div>
            </div>

            <div class="h-full flex flex-col justify-between">
                {/* content that sticks to the top of the card */}
                <div>
                    {/* event title */}
                    <h3 class="text font-semibold text-3xl mb-2">{this.eventDetails.title}</h3>
                    
                    {/* author/host link */}
                    <p class="mb-2 md:text-base xl:text-lg">By <a class="font-semibold text-[#da4167]" target="_blank" rel="noopener" href={this.eventDetails.meta.link}>{this.eventDetails.meta.host}</a></p>
                    
                    {/* information of the event */}
                    <div class="mb-2 flex items-center justify-start text-sm md:text-base xl:text-lg">
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

                    {/* event description */}
                    <p class="mb-3 mx-auto max-w-xl xl:max-w-2xl">{this.eventDetails.description}</p>
                </div>

                {/* content that sticks to the bottom of the card */}
                <div>
                    {/*  */}
                    <div class="flex">
                        <a href={this.eventDetails.link} class="text-xs text-white font-medium bg-[#8D29DC] px-3 py-2 rounded-lg flex space-x-1 items-center transition-colors hover:bg-[#651A9E]">
                            <div innerHTML={bellIcon}></div>
                            <span class="mt-[2px]">Interested</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    }
}
