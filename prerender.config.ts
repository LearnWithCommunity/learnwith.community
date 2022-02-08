/*
 *  Prerendering config for Stencil.js for learnwith.community project.
 *  Created On 13 January 2022
 */

import { PrerenderConfig } from '@stencil/core'

export const config: PrerenderConfig = {
    hydrateOptions() {
        return {
            excludeComponents: ['l-events', 'l-event'],
        }
    },
}
