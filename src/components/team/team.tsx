/*
 *  Team of Learn With Community members.
 *  Created On 25 January 2022
 */

import { Component, h } from '@stencil/core'
import twitterIcon from '../header/icons/twitter.svg'
import discordIcon from './icons/discord.svg'
import youtubeIcon from './icons/youtube.svg'
import githubIcon from './icons/github.svg'
import linkedinIcon from '../header/icons/linkedin.svg'
import emailIcon from './icons/email.svg'
import instagramIcon from './icons/instagram.svg'

@Component({
    tag: 'l-team',
})
export class Team {
    render() {
        return (
            <section id="team">
                <div class="container mx-auto flex flex-col items-center pt-10 text-[#3C2A31] md:pt-0 xl:-mt-20 dark:text-white">
                    <h1 class="text-4xl font-bold mb-12">Our Team</h1>
                    <div class="md:flex md:flex-wrap md:justify-center md:max-w-6xl">
                        <l-member
                            name="Aditya Sahu"
                            position="Community Leader"
                            avatar="https://github.com/adityasahu252.png"
                            bio="Coding educator at PrepInsta, Blockchain Developer."
                            class="w-[33.333%] min-w-[340px]"
                        >
                            <div
                                slot="avatar-artifact"
                                class="absolute -z-10 top-0 bg-[#ff0054] aspect-square w-20 rounded-full translate-x-20 translate-y-20"
                            ></div>
                            <div
                                slot="social-links"
                                class="py-2 flex justify-center space-x-4 text-[#3C2A2F] dark:text-[#99707E]"
                            >
                                <a
                                    href="https://github.com/adityasahu252"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={githubIcon}
                                ></a>
                                <a
                                    href="https://www.linkedin.com/in/aditya-sahu-477a69175"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={linkedinIcon}
                                ></a>
                                <a
                                    href="https://twitter.com/AdityaSahuDev"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={twitterIcon}
                                ></a>
                            </div>
                        </l-member>
                        <l-member
                            name="Vasanth Srivatsa"
                            position="Community Leader"
                            avatar="https://api.vsnth.dev?avatar=true"
                            bio="Computer geek 👨‍💻 I make videos 📹 on YouTube & tweet 🐦 about JavaScript."
                            class="w-[33.333%] min-w-[340px]"
                        >
                            <div
                                slot="avatar-artifact"
                                class="absolute -z-10 top-0 bg-[#8647ea] aspect-square w-28 rounded-full translate-x-10 -translate-y-2"
                            ></div>
                            <div
                                slot="social-links"
                                class="py-2 flex justify-center space-x-4 text-[#3C2A2F] dark:text-[#99707E]"
                            >
                                <a
                                    href="https://vas.cx/youtube"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={youtubeIcon}
                                ></a>
                                <a
                                    href="https://vas.cx/twitter"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={twitterIcon}
                                ></a>
                                <a
                                    href="https://vas.cx/discord"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={discordIcon}
                                ></a>
                            </div>
                        </l-member>
                        <l-member
                            name="Riya Sahu"
                            position="Community Leader"
                            avatar="/assets/img/avatars/riya.png"
                            bio="B.Tech CSE'24 | AI & ML | Community enthusiast learning new skills."
                            class="w-[33.333%] min-w-[340px]"
                        >
                            <div
                                slot="avatar-artifact"
                                class="absolute -z-10 top-0 bg-[#2b1225] dark:bg-[#fbd8c5] aspect-square w-8 rounded-full -translate-x-20 translate-y-36"
                            ></div>
                            <div
                                slot="social-links"
                                class="py-2 flex justify-center space-x-4 text-[#3C2A2F] dark:text-[#99707E]"
                            >
                                <a
                                    href="https://www.linkedin.com/in/riya-sahu-672471211/"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={linkedinIcon}
                                ></a>
                                <a
                                    href="https://twitter.com/riya_sahu_31?s=08"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={twitterIcon}
                                ></a>
                                <a
                                    href="mailto:riyasahu00317@gmail.com"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={emailIcon}
                                ></a>
                            </div>
                        </l-member>
                        <l-member
                            name="Deepanshu Sharma"
                            position="Community Leader"
                            avatar="/assets/img/avatars/deepanshu.jpg"
                            bio="Computer geek | C++,AI & ML | Problem solver"
                            class="w-[33.333%] min-w-[340px] mt-6"
                        >
                            <div
                                slot="avatar-artifact"
                                class="absolute -z-10 top-0 bg-[#fbd8c5] aspect-square w-44 rounded-full -translate-x-6 -translate-y-4 dark:bg-[#372b2d]"
                            ></div>
                            <div
                                slot="social-links"
                                class="py-2 flex justify-center space-x-4 text-[#3C2A2F] dark:text-[#99707E]"
                            >
                                <a
                                    href="https://www.instagram.com/deepanshusharma0_0/"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={instagramIcon}
                                ></a>
                                <a
                                    href="https://www.linkedin.com/in/deepanshu-sharma-953a81160/"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={linkedinIcon}
                                ></a>
                            </div>
                        </l-member>
                        <l-member
                            name="Dhruvraj Solanki"
                            position="Community Leader"
                            avatar="/assets/img/avatars/dhruv.png"
                            bio="Exploring & Coding Javascript | ML Enthusiast"
                            class="w-[33.333%] min-w-[340px] mt-6"
                        >
                            <div
                                slot="avatar-artifact"
                                class="absolute -z-10 top-0 bg-[#1B998B] aspect-square w-28 rounded-full -translate-x-14 translate-y-16"
                            ></div>
                            <div
                                slot="social-links"
                                class="py-2 flex justify-center space-x-4 text-[#3C2A2F] dark:text-[#99707E]"
                            >
                                <a
                                    href="https://github.com/dhruvsol"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={githubIcon}
                                ></a>
                                <a
                                    href="https://www.linkedin.com/in/dhruvraj-solanki-663a54200/"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={linkedinIcon}
                                ></a>
                                <a
                                    href="https://twitter.com/dhruvraj641"
                                    target="_blank"
                                    rel="noopener"
                                    class="transition-colors hover:text-black dark:hover:text-white"
                                    innerHTML={twitterIcon}
                                ></a>
                            </div>
                        </l-member>
                    </div>
                </div>
            </section>
        )
    }
}
