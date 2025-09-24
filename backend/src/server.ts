import app from './app'

const PORT = Number(process.env.PORT) || 3333

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})
