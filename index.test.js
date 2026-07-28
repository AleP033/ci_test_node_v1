const request = require('supertest')
const {app, close} = require('./index')


describe('Test degli endpoint API', () => {
    it('GET di / dovrebbe restituire Hello World', async() => {
        const res = await request(app).get('/') // richiesta asincrona verso l'app alla route '/' con tipologia GET

        // qui ci aspettiamo(expect) uno statusCode a 200 e il body identico a quello della GET
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({message : 'Hello World!'})
    })

it('GET di /client dovrebbe restituire Hello Client', async() => {
        const res = await request(app).get('/client')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual({message : 'Hello Client!'})
    })

    // dopo che abbiamo completato tutte le richieste, chiudiamo il server
    afterAll(done => {
        close()
        done()
    })
})