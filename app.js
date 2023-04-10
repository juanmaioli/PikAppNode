import * as dotenv from 'dotenv'
import express from 'express'
import {dirname,join} from 'path'
import ruteador from  './routes/router.js'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
// import session from 'express-session'
import passport from 'passport'
import mysql from 'mysql2'

dotenv.config()
const env = process.env
const __dirname = dirname(fileURLToPath(import.meta.url))

const con = mysql.createConnection({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  port: env.DB_PORT,
  connectTimeout: 30000,
  multipleStatements : true
})

con.connect(()=> console.log('conectado'))
con.end(()=> console.log('desconectado'))


const app = express()

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(ruteador)
app.use(express.static(join(__dirname,'./public')))
app.use('/img', express.static(join(__dirname , './img')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())
// app.use(passport.session())
app.set('trust proxy', true)
app.listen(env.WEB_PORT)

console.log('Servidor iniciado http://localhost:'+env.WEB_PORT)
// console.log(process.env)