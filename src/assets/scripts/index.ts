/*
 *  Client-side entry TypeScript file for the website.
 *  Created On 01 February 2022
 */

import SmoothScroll from 'smooth-scroll'
import { isMobile } from '../../util.js'

// const watiUntilHydrated = (): Promise<void> => new Promise(resolve => {
//     const observer = new MutationObserver(() => {
//         if (document.querySelector('html').classList.contains('hydrated')) {
//             observer.disconnect()
//             return resolve()
//         }
//     })

//     observer.observe(document.querySelector('html'), {
//         attributes: true,
//         attributeFilter: ['class'],
//         childList: false,
//         characterData: false
//     })
// })

const main = async () => {
    // await watiUntilHydrated()

    // we avoid animations and other graphically intensive
    // effects on mobile devices since, we may not have much memory
    if (isMobile == false) {
        // attach the kinetic smooth scroll effect
        new SmoothScroll('a[href*="#"]', {
            easing: 'easeInOutQuart'
        })
    } else {
        document.querySelector('html').style.scrollBehavior = 'smooth'
    }
}

main()
