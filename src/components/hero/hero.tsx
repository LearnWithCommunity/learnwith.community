/*
 *  The hero section or the first section of the website.
 *  Created On 12 January 2022
 */

import { Component, h } from '@stencil/core';
import typography from './../../assets/img/typography.svg';

@Component({
    tag: 'l-hero'
})
export class Hero {
    render() {
        return <main class="py-7 px-7 h-full flex flex-col justify-center items-center text-[#3C2A31]">
            <div class="container flex flex-col space-y-6 text-center">
                <div class="text-[#8D29DC] h-6 md:h-7" innerHTML={typography}></div>
                <h1 class="mx-auto font-bold text-5xl leading-tight md:leading-snug md:text-6xl md:max-w-2xl lg:text-7xl lg:max-w-5xl lg:leading-normal dark:text-white">Let's learn and grow with the community.</h1>
            </div>
        </main>
    }
}
