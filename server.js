console.log('Hier komt je server voor Sprint 12.')

import express from 'express'
import { Liquid } from 'liquidjs';


const app = express();
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views');

app.use(express.urlencoded({extended: true}))




app.set('port', process.env.PORT || 8000)


app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})