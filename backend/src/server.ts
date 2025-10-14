import { config } from '@config/index'
import app from './app'

const PORT = config.server.port || 3333

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
