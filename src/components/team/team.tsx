/*
 *  Team of Learn With Community members.
 *  Created On 25 January 2022
 */

import { Component, h } from '@stencil/core';

@Component({
    tag: 'l-team'
})
export class Team {
    render() {
        return <section id="team">
            <div class="container mx-auto flex flex-col items-center py-20 text-[#3C2A31] dark:text-white">
                <h1 class="text-4xl font-bold mb-6">Our Team</h1>
                <div class="md:flex md:flex-wrap md:justify-center md:max-w-6xl">
                    <l-member name="Aditya Sahu" position="Community Leader" avatar="https://github.com/adityasahu252.png" bio="Coding educator at PrepInsta, Blockchain Developer." class="w-[33.333%] min-w-[340px]">
                        <div class="absolute -z-10 top-0 bg-[#ff0054] aspect-square w-20 rounded-full translate-x-20 translate-y-20"></div>
                    </l-member>
                    <l-member name="Vasanth Srivatsa" position="Community Leader" avatar="https://api.vsnth.dev?avatar=true" bio="Computer geek 👨‍💻 I make videos 📹 on YouTube & tweet 🐦 about JavaScript." class="w-[33.333%] min-w-[340px]">
                        <div class="absolute -z-10 top-0 bg-[#8647ea] aspect-square w-28 rounded-full translate-x-10 -translate-y-2"></div>
                    </l-member>
                    <l-member name="Riya Sahu" position="Community Leader" avatar="/assets/img/avatars/riya.png" bio="B.Tech CSE'24 | AI & ML | Community enthusiast learning new skills." class="w-[33.333%] min-w-[340px]">
                        <div class="absolute -z-10 top-0 bg-[#2b1225] dark:bg-[#fbd8c5] aspect-square w-8 rounded-full -translate-x-20 translate-y-36"></div>
                    </l-member>
                    {/* <l-member name="Deepanshu Sharma" position="Community Leader" avatar="/assets/img/avatars/deepanshu.jpg" bio="Will be updated on production" class="w-[33.333%] min-w-[340px] mt-6">
                        <div class="absolute -z-10 top-0 bg-[#fbd8c5] aspect-square w-44 rounded-full -translate-x-6 -translate-y-4 dark:bg-[#372b2d]"></div>
                    </l-member> */}
                    <l-member name="Dhruvraj Solanki" position="Community Leader" avatar="/assets/img/avatars/dhruv.png" bio="Exploring & Coding Javascript | ML Enthusiast" class="w-[33.333%] min-w-[340px] mt-6">
                        <div class="absolute -z-10 top-0 bg-[#1B998B] aspect-square w-28 rounded-full -translate-x-14 translate-y-16"></div>
                    </l-member>
                </div>
            </div>
        </section>
    }
}
