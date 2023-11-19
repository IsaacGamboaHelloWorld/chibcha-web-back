import express from "express"
import usersRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())

app.use(indexRoutes)
app.use(usersRoutes)

app.listen(3000)
console.log('server is running in port 3000')

