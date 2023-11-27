import express from "express"
import cors from "cors"

import usersRoutes from './routes/users.routes.js'
import hostRoutes from './routes/hosts.routes.js'
import hostPlansRoutes from './routes/hostPlans.routes.js'
import domainRequestRoutes from './routes/domainRequest.routes.js'
import domainDisRoutes from './routes/domainDistribuitors.routes.js'
import paymentsPlansRoutes from './routes/paymen_plans.routes.js'
import indexRoutes from './routes/index.routes.js'
import prices from "./routes/hostPlansPrices.routes.js"
import tickets from "./routes/tickets.routes.js"
import  login  from "./routes/login.routes.js"
import index from "./routes/index.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(index)
app.use(login)
app.use(hostRoutes)
app.use(paymentsPlansRoutes)
app.use(prices)
app.use(indexRoutes)
app.use(usersRoutes)
app.use(hostRoutes)
app.use(hostPlansRoutes)
app.use(domainRequestRoutes)
app.use(domainDisRoutes)
app.use(tickets)
app.use(tickets)


const port = process.env.PORT || 3000;
app.listen(3000)
console.log('server is running in port 3000')