import express from 'express'

import cors from 'cors'

function createApp() {
  const app = express()

  app.use(cors())
  app.set('trust proxy', true)
  // ({ type: 'application/json', limit: '10MB' }))

  /* app.get('/', (req, res) => {
    res.send('It works - ver. 0.0.1')
  })

  app.set('views', path.join(__dirname, '../html'))
  app.engine('html', ejs.renderFile)
  app.set('view engine', 'html') */

  return app
}

export default createApp
