function createPokemon(id) {
    let pokemon;
    //random background
    let backgroundArr = [
        "https://www.fg-a.com/wallpapers/white-marble-1-2018.jpg",
        "https://img.freepik.com/free-vector/bright-background-with-dots_1055-3132.jpg?size=338&ext=jpg",
        "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
        "https://png.pngtree.com/thumb_back/fw800/back_pic/03/70/72/5257b6c12d89875.jpg",
        "https://www.planwallpaper.com/static/images/violet-vector-leaves-circles-backgrounds-for-powerpoint_PdfkI4q.jpg"
    ];

     axios.get(`http://fizal.me/pokeapi/api/${id}.json`)
        .then(result => {
            let res = result.data;

            //get abilities
            let abilitiesArr = [];
            res.abilities.forEach(element => {
                abilitiesArr.push(element.ability.name);
            });

            pokemon = new Pokemon(res.name, res.stats[5].base_stat, res.stats[4].base_stat, res.stats[3].base_stat, abilitiesArr);

            let container = document.getElementById("container");
            container.innerHTML += `
                                        <div class="col s12 m4 ">
                                        <div class="card" >
                                            <div class="card-image cardImage" style="background-image: url(${backgroundArr[Math.floor(Math.random() * Math.floor(backgroundArr.length))]})">
                                            <img src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padId(id)}.png">
                                            <span class="card-title card-title-style">${pokemon.name}</span>
                                            </div>
                                            <div class="card-content">
                                            <div class="card-panel red">HP: ${pokemon.hp}</div>
                                            <div class="card-panel red lighten-1">Att: ${pokemon.attack}</div>
                                            <div class="card-panel red lighten-2">Def: ${pokemon.defense}</div>
                                            <div class="card-panel red lighten-3">
                                            <div class="responsive-table table-status-sheet">
                                            <table class="bordered">
                                                <thead>
                                                    <tr>
                                                        <th class="center">Abilities:</th>
                                                        <th id="totalRepos" class="center"></th>
                    
                                                    </tr>
                                                </thead>
                                                <tbody id="tbody${id}">
                    
                                                </tbody>
                                            </table>
                                            </div>
                                            <div class="card-action">
                                            <a href="#">More</a>
                                            </div>
                                        </div>
                                        </div>
                                    `;


            const tbody = document.getElementById(`tbody${id}`);

            pokemon.abilities.forEach(element => {
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>
                                <a href="">
                                    <div>${element}</div>
                                </a>
                            </td>`;
                tbody.appendChild(tr);
            });
            return pokemon;
        })
        .catch(err => {
            console.log("Err!!!", err);

        });
}
class Trainer {
    constructor(name, pokemons) {
        this.name = name;
        this.pokemons = pokemons;
    }

    all() {
        return this.pokemons;
    }
    get(name) {
        return "api call /pokemon/id/";
    }

}

class Pokemon {
    constructor(name, hp, attack, defense, abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }

    getName() {
        return this.name;
    }
}

//Helper Functions
let padId = id => {
    let s = id + "";
    while (s.length < 3) {
        s = "0" + s;
    }
    return s;
};

let trainer = new Trainer("Pablo", [createPokemon(6), createPokemon(39), createPokemon(151)]);
console.log("trainer", trainer);

document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems);
});