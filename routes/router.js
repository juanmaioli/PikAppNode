import {Router} from 'express'

const ruteador = Router()

ruteador.get('/',(req,res)=> res.render('index',{title:'Home'}))
// ruteador.get('/about',(req,res)=> res.render('about',{title:'About'}))
// ruteador.get('/contact',(req,res)=> res.render('contact',{title:'Contact'}))
ruteador.get('/login',(req,res)=> res.render('login',{title:'Login'}))

export default ruteador