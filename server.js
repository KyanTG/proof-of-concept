import express from 'express'
import { Liquid } from 'liquidjs';

const app = express();
app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views');

app.use(express.urlencoded({extended: true}))


// or app.get('/catalogus') when there is a homepage
app.get('/', async function (request, response) {    

const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview');
const catalogusPageJSON = await catalogusPage.json();


response.render('catalogus.liquid', { algemeen: catalogusPageJSON });
});



app.get('/detail/:id', async function (request, response) {
    

    const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview');
    const catalogusPageJSON = await catalogusPage.json(); 

    const detailPage = await fetch('https://efm-student-case-proxy-api.vercel.app/detail/' + request.params.id);
    const detailPageJSON = await detailPage.json();

    response.render('detail.liquid', { detail: detailPageJSON, algemeen: catalogusPageJSON, id: request.params.id });

});


app.post('/detail/:id', async function (request, response) {

    //console.log(request.body) dit is om te checken of het werkt

    const id = request.params.id
    const reactionSend = await fetch('https://fdnd.directus.app/items/messages', {
      method: 'POST',                       
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        from: "kyanIOD",                  
        text: request.body.reaction,
        for: id
       }),
    })
      console.log(reactionSend)
      response.redirect(303, '/detail/' + id)
})



app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})