const fetchAsync = async (index) => {
    const rawData = await fetch(`http://localhost:5500/gymLeaders/${index}`);
    const gymData = await rawData.json();
    console.log(gymData);

    const leaderName = gymData.name;
    const nameHeading = document.getElementById('leaderName');
    nameHeading.textContent = leaderName;

    const gymNum = gymData.gymNum;
    const gymHeading = document.getElementById('gymNum');
    gymHeading.textContent = gymNum

    const city = gymData.city;
    const cityHeading = document.getElementById('city');
    cityHeading.textContent = city

    const badge = gymData.badge;
    const badgeHeading = document.getElementById('badge');
    badgeHeading.textContent = badge

    const type = gymData.type
    const typeHeading = document.getElementById('type');
    typeHeading.textContent = type

    const leaderImg = document.getElementById('leaderImg');
    leaderImg.src = gymData.leaderImg;

    const pokemonList = document.getElementById('list');
    pokemonList.innerHTML = "";
    for(let i=0; i<gymData.pokemon.length; i++){
        let li = document.createElement('li');
        li.textContent = gymData.pokemon[i];
        pokemonList.appendChild(li);
    } 

    for(let i=0; i<gymData.pokemon.length; i++){
        const rawData2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${gymData.pokemon[i]}`);
        const pokemonData = await rawData2.json();

        const imgList = document.getElementById('imgList');
        const pokeImageFront = document.getElementById('pokeImageFront');
        let img = document.createElement('img');
        img.src = pokemonData.sprites.front_default;
        img.id = `${gymData.pokemon[i]}`
        const pokeImageBack = document.getElementById('pokeImageBack');
        let img2 = document.createElement('img');
        img2.src = pokemonData.sprites.back_default;
        img2.id = `${gymData.pokemon[i]}`

        pokemonList.appendChild(img);
        pokemonList.appendChild(img2);
    } 
    
}

    fetchAsync(1).catch(err => console.log(err))

    let index = 1;
    const button = document.getElementById('nextGym');
    button.addEventListener('click', () =>{
        index++;
        if (index == 9){
            index =1;
        }
        fetchAsync(index).catch(err => console.log(err))
    })
