// kreirati vlastite GET,POUST;PUT;DELETE metode za rad s objektom unutar vlastitog projekta
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/Diskoteka', (request, response) => {
    return response.send('Zbirka diskoteka');
    });
    app.post('/addpjesme', (request, response) => {
        const data = request.body;
        const autor=data.autor
        const naziv=data.naziv
        return response.send('Dodavanje pjesme:  '+autor+" "+naziv);
       
    });
    app.put('/updatediskoteka', (request, response) => {
        const data = request.body;
        const autor=data.autor
        const naziv=data.naziv

        return response.send('PUT metoda -> Change '+autor+ "  " +naziv);
        });
        app.delete('/deletediskoteka', (request, response) => {
            
            const data = request.body;
            const autor=data.autor
            const naziv=data.naziv
    
            return response.send('DELETE metoda -> Change '+autor+ "  " +naziv);
            });

         

app.listen(3001, () => {
    console.log("Server running on port 3001");
    });