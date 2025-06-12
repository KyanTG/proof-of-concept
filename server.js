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



// app.get('/detail/:id', async function (request, response) {
    
//     const catalogusPage = await fetch('https://efm-student-case-proxy-api.vercel.app/overview');
//     const catalogusPageJSON = await catalogusPage.json();

//     const detailPage = await fetch('https://efm-student-case-proxy-api.vercel.app/detail/' + request.params.id);
//     const detailPageJSON = await detailPage.json();
    

// response.render('detail.liquid', { detail: detailPageJSON, algemeen: catalogusPageJSON });
// });

app.get('/detail/:id', async function (request, response) {
    try {
        const id = request.params.id; // Get the ID from the URL
        console.log('Received ID:', id); // Debugging: Log the received ID

        // Fetch the detail data for the specific ID
        const detailPage = await fetch(`https://efm-student-case-proxy-api.vercel.app/detail/${id}`);
        console.log('API Response Status:', detailPage.status); // Debugging: Log the API response status

        // Check if the API response is successful
        if (!detailPage.ok) {
            throw new Error(`API returned status ${detailPage.status}`);
        }

        const detailPageJSON = await detailPage.json();
        console.log('Detail Data:', detailPageJSON); // Debugging: Log the fetched data

        // Render the detail page with the fetched data
        response.render('detail.liquid', { detail: detailPageJSON });
    } catch (error) {
        console.error('Error fetching detail data:', error.message); // Log the error message
        response.status(404).send('Detail not found');
    }
});

app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {

    console.log(`Application started on http://localhost:${app.get('port')}`)
})