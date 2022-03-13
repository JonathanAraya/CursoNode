
// setTimeout( function() {
//     console.log('Hola Mundo');
// }, 1000 )

const getUsuarioByID = ( id, callback ) => {

    const usuario = {
        id,
        nombre: 'Jonathan'
    }

    setTimeout( () => {
        callback(usuario)
    }, 1500);

}

getUsuarioByID( 10 , ( user ) => {
    console.log( user.id );
    console.log( user.nombre.toUpperCase() );
} );