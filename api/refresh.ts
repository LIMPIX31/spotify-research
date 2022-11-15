import { VercelRequest, VercelResponse } from '@vercel/node'
import * as querystring from 'querystring'

export default async function(req: VercelRequest, res: VercelResponse) {
  const { refresh } = req.query
  const { access_token: token } = await fetch('https://accounts.spotify.com/api/token?' + querystring.stringify({
    grant_type: 'refresh_token',
    refresh_token: refresh,
  }), {
    method: 'POST',
    headers: {
      Authorization: `Basic ${process.env.MIXED_CREDENTIALS}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(v => v.json())
  res.json({ token })
}
