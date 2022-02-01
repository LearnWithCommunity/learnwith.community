/*
 *  Contains additional utility functions used across the website.
 *  Created On 01 February 2022
 */

import getMobileStatus from 'is-mobile'

export const isMobile = getMobileStatus({
    tablet: false,
})
