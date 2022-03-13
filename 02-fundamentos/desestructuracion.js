const persona = {
    nombre: 'Jonathan',
    apellido: 'Araya',
    edad: 27,
    getData() {
        return `${ this.nombre } ${ this.apellido } ${ this.edad }`
    }

}

// const nombre = persona.nombre;
// const apellido = persona.apellido;
// const edad = persona.edad;

function print ({ nombre, apellido, edad, pais = 'Chile' }) {

    console.log(nombre, apellido, edad, pais = 'Chile');

}

print( persona );
// console.log(persona.getData());

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [ , ,h3] = heroes

console.log(h3);
