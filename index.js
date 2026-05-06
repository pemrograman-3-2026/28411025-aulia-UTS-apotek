import express from 'express'
import userRoute from './routes/user.route.js'
import kategoriRoute from './routes/kategori.route.js'
import obatRoute from './routes/obat.route.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Apotek berjalan!')
})
app.use('/user', userRoute)
app.use('/kategori', kategoriRoute)
app.use('/obat', obatRoute)

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000')
})