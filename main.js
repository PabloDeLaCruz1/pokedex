// console.log(data);
// const Promise = require("axios");
// axios.get("http://swapi.co/api/planets/1/")
axios.get("http://fizal.me/pokeapi/api/1.json")
.then(result =>{
    console.log(result.data);
    
})
.catch(err => {
    console.log("Err!!!", err);
    
});
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
    constructor(hp, attack, defense, abilities) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }

}
let pokemon1 = new Pokemon(9999, 9999, 9999, ["headbutt", "omnislash"]);
let pokemon2 = new Pokemon(5, 23, 12, ["run", "hide"]);
let pokemon3 = new Pokemon(1, 1, 9999, ["headbutt", "omnislash"]);

let trainer = new Trainer("Pablo", [pokemon1, pokemon2, pokemon3]);
// console.log("pokemon", pokemon1);

// console.log("trainer",trainer);

// const getPost = () => {
// return fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// .then(res => res.json())
// .then(posts => console.log(posts))
// .catch(function(e) {
//     console.log(e); });// "oh, no!"
// };

// // let pokedata = getPost();
// // console.log("pokedata", pokedata);


// function onClickTest() {
//     window.resizeTo("1200", "800");
//     console.log("hello");

// }
// document.addEventListener('DOMContentLoaded', function () {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
//     console.log(instances);

// });
 
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });