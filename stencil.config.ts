/*
 *  Stencil.js configuration file for learnwith.community website.
 *  Created On 10 January 2022
 */

import { Config } from '@stencil/core'
import { inlineSvg } from 'stencil-inline-svg'
import { postcss } from '@stencil/postcss'
import tailwindcss from 'tailwindcss'

export const config: Config = {
    minifyJs: true,
    minifyCss: true,
    taskQueue: 'async',
    globalStyle: 'src/assets/styles/index.css',
    globalScript: 'src/assets/scripts/index.ts',
    devServer: {
        openBrowser: false,
        reloadStrategy: 'pageReload'
    },
    outputTargets: [
        {
            type: 'www',
            serviceWorker: false,
            baseUrl: 'https://learnwith.community',
            prerenderConfig: 'prerender.config.ts'
        }
    ],
    plugins: [
        inlineSvg(),
        postcss({
            plugins: [tailwindcss]
        }),
    ]
}
