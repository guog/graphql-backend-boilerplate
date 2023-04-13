import { altairExpress } from 'altair-express-middleware'
import cors from 'cors'
import express from 'express'
import { APP_PATH } from './environment'
import { json } from 'body-parser'

const initialQuery = `mutation {
  signIn(name: "admin", password: "admin") {
    token
  }
}`

function createApp() {
  const app = express()

  /* app.use(cors())
  app.set('trust proxy', true)
  app.use(express.json({ type: 'application/json', limit: '10MB' })) */

  /* app.get('/', (req, res) => {
    res.send('It works - ver. 0.0.1')
  })

  app.set('views', path.join(__dirname, '../html'))
  app.engine('html', ejs.renderFile)
  app.set('view engine', 'html') */

  /* app.use(
    `${APP_PATH}`,
    cors<cors.CorsRequest>,
    json(),
    altairExpress({

      initialSettings: {
        language: 'zh-CN'
      },
      endpointURL: `${APP_PATH}`,
      //subscriptionsEndpoint: `ws://localhost:4000/subscriptions`,
      initialQuery
    })
  ) */

  return app
}

export default createApp
