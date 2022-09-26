const express = require('express')
const app = express()
const port = 5500
let cors = require('cors')
app.use(cors())

const gymLeaders = [
    {
    id: 1,
    name: 'Brock',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/brock.png',
    gymNum: 1,
    city: 'Pewter City',
    badge: 'Boulder Badge',
    gymType: 'Rock type',
    pokemon: ['geodude', 'onix']
},

{
    id: 2,
    name: 'Misty',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/misty.png',
    gymNum: 2,
    city: 'Cerulean City',
    badge: 'Cascade Badge',
    gymType: 'Water type',
    pokemon: ['staryu', 'starmie']
},

{
    id: 3,
    name: 'Lt. Surge',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/lt-surge.png',
    gymNum: 3,
    city: 'Vermilion City',
    badge: 'Thunder Badge',
    gymType: 'Electric type',
    pokemon: ['voltorb', 'pikachu', 'raichu']
},

{
    id: 4,
    name: 'Erika',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/erika.png',
    gymNum: 4,
    city: 'Pewter City',
    badge: 'Rainbow Badge',
    gymType: 'Grass type',
    pokemon: ['victreebel', 'tangela', 'vileplume']
},

{
    id: 5,
    name: 'Koga',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/koga.png',
    gymNum: 5,
    city: 'Fuchsia City',
    badge: 'Soul Badge',
    gymType: 'Poison type',
    pokemon: ['koffing', 'koffing', 'muk', 'weezing']
},

{
    id: 6,
    name: 'Sabrina',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/sabrina.png',
    gymNum: 6,
    city: 'Saffron City',
    badge: 'Marsh Badge',
    gymType: 'Psychic type',
    pokemon: ['kadabra', 'mr-mime', 'venomoth', 'alakazam']
},

{
    id: 7,
    name: 'Blaine',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/blaine.png',
    gymNum: 7,
    city: 'Cinnabar Island',
    badge: 'Volcano Badge',
    gymType: 'Fire type',
    pokemon: ['growlithe', 'ponyta', 'rapidash', 'arcanine']
},

{
    id: 8,
    name: 'Giovanni',
    leaderImg: 'https://img.pokemondb.net/sprites/trainers/red-blue/giovanni.png',
    gymNum: 8,
    city: 'Viridian City',
    badge: 'Earth Badge',
    gymType: 'Ground type',
    pokemon: ['rhyhorn', 'dugtrio', 'nidoqueen', 'nidoking', 'rhydon']
},
];

app.get('/', (req,res) =>{
    res.send('Condensed app test')
})

app.get('/gymleaders', (req,res) => {
    res.send(gymLeaders)
})

app.get('/gymleaders/:id', (req,res) => {
    const id = parseInt(req.params.id) - 1;
    res.send(gymLeaders[id]);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// app.post('/', (res,req) => {
//     const data = req.body;
//     const newGymLeader = gymLeaders.create(data);
//     res.status(200).send(newGymLeader)
// })

// app.delete('/:id', (req,res) => {
//     const gymsId = parseInt(re.params.id);
//     const gymtoDestroy = gymLeaders.findById(gymsId);
//     gymtoDestroy.destroy();
//     res.status(204).send();
// })
module.exports = app;
