
const empleados = [
    {
        id: 1,
        nombre: 'Jonathan'
    },
    {
        id: 2,
        nombre: 'Juan'
    },
    {
        id: 3,
        nombre: 'Antonio'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {

    const promesa = new Promise( ( reseolve,reject ) => {

        const empleado = empleados.find(e => e.id ===id)?.nombre;

        (empleado) ? reseolve(empleado) : reject(`No existe empleado con id ${id}`);
        
    });

    return promesa;

};

const getSalario = ( id ) => {

    return new Promise( (resolve, reject) => {

        const salario = salarios.find( s => s.id === id )?.salario;

        (salario) ? resolve(salario) : reject(`No existe salario para id ${id}`)

    });

};

const getInfoUser = async(id) => {
    
    try {
        
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El empleado ${empleado} tiene un salario de ${salario}`;

    } catch (error) {
        
        return error;

    }

}

const id = 5;

getInfoUser(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));