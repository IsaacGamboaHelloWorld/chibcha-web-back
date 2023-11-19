import express from "express"
import usersRoutes from './routes/users.routes.js'
import hostRoutes from './routes/hosts.routes.js'
import hostPlansRoutes from './routes/hostPlans.routes.js'
import domainRequestRoutes from './routes/domainRequest.routes.js'
import domainDisRoutes from './routes/domainDistribuitors.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())

app.use(indexRoutes)
app.use(usersRoutes)
app.use(hostRoutes)
app.use(hostPlansRoutes)
app.use(domainRequestRoutes)
app.use(domainDisRoutes)

app.listen(3000)
console.log('server is running in port 3000')