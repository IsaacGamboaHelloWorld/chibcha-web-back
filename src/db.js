import { createPool } from 'mysql2/promise'

// export const pool = createPool({
//     host: '127.0.0.1',
//     user:'root',
//     password:'',
//     port: 3306,
//     database: 'chibchaweb'
// })

export const pool = createPool({
    host: 'monorail.proxy.rlwy.net',
    user:'root',
    password:'C-B14Ah-FB61ABH4Df2DD6FDhccffhBB',
    port: 54474,
    database: 'railway'
})