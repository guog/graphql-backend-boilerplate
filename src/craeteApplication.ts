import cors from 'cors'
import express from 'express'

function createApp() {
  const app = express()

  app.use(cors())
  app.set('trust proxy', true)
  app.use(express.json({ type: 'application/json', limit: '10MB' }))

  /* app.get('/', (req, res) => {
    res.send('It works - ver. 0.0.1')
  })

  app.set('views', path.join(__dirname, '../html'))
  app.engine('html', ejs.renderFile)
  app.set('view engine', 'html') */

  return app
}

export default createApp
