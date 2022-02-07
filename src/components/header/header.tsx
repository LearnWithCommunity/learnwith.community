/*
 *  The header component used for navigation.
 *  Created On 10 January 2022
 */

import { Component, h } from '@stencil/core';
import { links } from '../../store';
import workMark from './../../assets/img/wordMark.svg';
import homeIcon from './icons/home.svg';
import eventsIcon from './icons/events.svg';
import teamIcon from './icons/team.svg';
import discordIcon from './icons/discord.svg';
import twitterIcon from './icons/twitter.svg';
import linkedinIcon from './icons/linkedin.svg';
import bulbOutline from './icons/bulb-outline.svg';
import bulbFilled from './icons/bulb-filled.svg';

const pages = [
    {
        text: 'Home',
        icon: homeIcon,
        link: '#'
    },
    {
        text: 'Events',
        icon: eventsIcon,
        link: '#events'
    },
    {
        text: 'Team',
        icon: teamIcon,
        link: '#team'
    }
]

@Component({
    tag: 'l-header'
})
export class Header {

    toggleTheme: () => void = () => {
        const html = document.querySelector('html')
        const themeColor = document.querySelector('meta[name=theme-color]')

        if (html.classList.contains('dark')) {
            // switch to light theme
            html.classList.remove('dark')
            themeColor.setAttribute('content', '#FCE5D9')
        } else {
            // switch to dark theme
            html.classList.add('dark')
            themeColor.setAttribute('content', '#22181c')
        }
    }

    render() {
        return <header class="absolute z-50 w-full py-7 px-7 font-semibold text-[#775563] dark:text-[#AA8896]">
            <div class="container mx-auto flex items-center justify-between">
                {/* logo */}
                <div class="w-full">
                    <div innerHTML={workMark} class="w-12"></div>
                </div>

                {/* navigation */}
                <div class="bg-[#F8DDE4] rounded-t-full rounded-b-[145rem] h-20 fixed bottom-10 left-7 right-7 md:w-full md:static md:bg-transparent md:flex justify-center dark:bg-[#302127] md:dark:bg-transparent">
                    {/* the join pill */}
                    <div class="absolute w-full bottom-16 flex justify-center">
                        <a class="bg-[#F8DDE4] rounded-tl-[40px] rounded-tr-[40px] p-2 w-24 flex justify-center md:hidden dark:bg-[#302127]" href={links.invite}>
                            <div class="bg-[#8D29DC] my-2 p-5 rounded-full text-white">
                                <div class="w-5" innerHTML={discordIcon}></div>
                            </div>
                        </a>
                    </div>

                    {/* nav items */}
                    <nav class="flex items-center justify-center h-full space-x-8 text-xs">
                        {pages.map(page => <a class="flex flex-col items-center justify-center space-y-1 transition-colors hover:text-[#000000] dark:hover:text-white" href={page.link}>
                            <div innerHTML={page.icon}></div>
                            <span>{page.text}</span>
                        </a>)}
                    </nav>
                </div>

                <div class="hidden md:flex items-center justify-end w-full">
                    {/* socials */}
                    <a href={links.linkedin} target="blank" rel="noopener" class="mx-2 hidden transition-colors lg:inline hover:text-black dark:hover:text-white" innerHTML={linkedinIcon}></a>
                    <a href={links.twitter} target="blank" rel="noopener" class="mx-2 hidden transition-colors lg:inline hover:text-black dark:hover:text-white" innerHTML={twitterIcon}></a>
                
                    {/* join button */}
                    <a class="mx-4 text-white font-semibold bg-[#8D29DC] px-4 py-2 rounded-lg flex space-x-2 items-center transition-colors hover:bg-[#651A9E]" href={links.invite}>
                        <div class="w-4" innerHTML={discordIcon}></div>
                        <span class="mt-[2px]">Join now</span>
                    </a>
                </div>

                {/* dark theme button */}
                <button onClick={this.toggleTheme} class="transition-colors hover:text-black dark:hover:text-white">
                    <div class="dark:hidden" innerHTML={bulbOutline}></div>
                    <div class="hidden dark:inline" innerHTML={bulbFilled}></div>
                </button>
            </div>
        </header>
    }
}
