/*
 *  Stencil.js configuration file for learnwith.community website.
 *  Created On 10 January 2022
 */

import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import tailwindcss from 'tailwindcss'

export const config: Config = {
    minifyJs: true,
    minifyCss: true,
    taskQueue: 'async',
    globalStyle: 'src/assets/styles/index.css',
    devServer: {
        reloadStrategy: 'pageReload'
    },
    outputTargets: [
        {
            type: 'www',
            serviceWorker: false,
            baseUrl: 'https://learnwith.community',
        }
    ],
    plugins: [
        postcss({
            plugins: [tailwindcss]
        })
    ]
}
