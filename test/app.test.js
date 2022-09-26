const request = require('supertest')
const app = require('../app')

describe('Api Server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(3500, () => {
            console.log('Example app listening on port 5000')
        })
    })

    afterAll((done) => {
        console.log('stopping test server');
        api.close(done);
    })

    it('responds to get / witha status of 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('retrieves all gym leaders', (done) => {
        request(api).get('/gymleaders').expect(200,done)
    })

    it('retrieves a specific gym leader', (done) => {
        request(api).get('/gymleaders/2').expect(200).expect({id: 2,
            name: 'Misty',
            leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/misty.png',
            gymNum: 2,
            city: 'Cerulean City',
            badge: 'Cascade Badge',
            gymType: 'Water type',
            pokemon: ['staryu', 'starmie']},done)
    })

})
