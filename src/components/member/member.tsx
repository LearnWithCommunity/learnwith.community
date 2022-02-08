/*
 *  A single member card to be used within the team section.
 *  Created On 25 January 2022
 */

import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'l-member',
})
export class Member {
    @Prop() name: string
    @Prop() avatar: string
    @Prop() position: string
    @Prop() bio: string
    @Prop() links: string

    render() {
        return (
            <div class="relative my-4 flex flex-col justify-end items-center">
                {/* profile circle */}
                <slot name="avatar-artifact" />

                {/* profile image */}
                <img
                    class="user-drag-false rounded-full select-none object-cover aspect-square w-48 border-solid border-8 bg-[#fef2ec] border-[#fef2ec] dark:bg-[#22181c] dark:border-[#22181c]"
                    src={this.avatar}
                    alt={this.name}
                />

                <div class="text-center flex flex-col items-center justify-center py-2">
                    {/* name */}
                    <h3 class="text-2xl font-bold">{this.name}</h3>

                    {/* position at LWC */}
                    <p class="font-semibold text-[#8D29DC]">{this.position}</p>

                    {/* bio */}
                    <p class="mt-3 mx-20">{this.bio}</p>
                </div>

                {/* social links */}
                <slot name="social-links" />
            </div>
        )
    }
}
