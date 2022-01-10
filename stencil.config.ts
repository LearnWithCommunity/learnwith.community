/*
 *  Stencil.js configuration file for learnwith.community website.
 *  Created On 10 January 2022
 */

import { Config } from '@stencil/core'

export const config: Config = {
    taskQueue: 'async',
    minifyCss: true,
    minifyJs: true,
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
            baseUrl: 'https://learnwith.community',
        }
    ]
}
