/*
 *  Fetches events from our Discord server & responds with an array.
 *  Created On 13 January 2022
 */

import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse): Promise<VercelResponse> => {
    return res.status(200).json({
        events: []
    })
}
