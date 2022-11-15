import { VercelRequest, VercelResponse } from '@vercel/node'
import * as querystring from 'querystring'

export default async function(req: VercelRequest, res: VercelResponse) {
  const { code, error, state } = req.query
  if (error) return res.redirect(process.env.ORIGIN + `/error`)
  const { access_token: access, refresh_token: refresh } = await fetch('https://accounts.spotify.com/api/token?' + querystring.stringify({
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
  }), {
    method: 'POST',
    headers: {
      Authorization: `Basic ${process.env.MIXED_CREDENTIALS}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }).then(v => v.json())
  res.redirect(process.env.ORIGIN + `?access=${access}&refresh=${refresh}`)
}
