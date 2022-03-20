/*
 *  Footer component used mainly for giving credits & copyright.
 *  Created On 21 March 2022
 */

import { Component, h } from '@stencil/core'

@Component({
    tag: 'l-footer',
})
export class Footer {
    render() {
        return (
            <footer class="py-12 flex items-center justify-center bg-[#fbd8c6] dark:bg-[#372b2d] dark:text-white">
                {/* credits for artwork */}
                <p class="flex flex-col items-center space-y-4">
                    <span>Artwork &amp; illustrations designed by:</span>
                    <a
                        class="flex items-center space-x-2"
                        href="https://linkedin.com/in/swathirao1696"
                        target="_blank"
                        rel="noopener"
                    >
                        <img
                            class="h-8 aspect-square rounded-full"
                            src="../../assets/img/avatars/swathi.jpg"
                            alt="Swathi"
                        />

                        <span class="font-medium">Swathi Rao</span>
                    </a>
                </p>
            </footer>
        )
    }
}
