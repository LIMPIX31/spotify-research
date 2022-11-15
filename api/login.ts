import { VercelRequest, VercelResponse } from '@vercel/node'
import * as querystring from 'querystring'

export default async function(req: VercelRequest, res: VercelResponse) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_ID,
      scope: process.env.SPOTIFY_SCOPE,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URL,
    }))
}
