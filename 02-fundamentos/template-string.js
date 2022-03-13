const nombre = 'Deadpool';
const real = 'Wade';

const nombreCompleto = nombre + ' ' + real;
const template = `${ nombre} ${ real }`;

console.log(nombreCompleto);
console.log(template);

console.log( nombreCompleto == template );

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);