
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

const getEmpleado = ( id, empReturn ) => {
    const empleado = empleados.find(e => e.id ===id)?.nombre;

    if(empleado){
        empReturn(null, empleado);
    }
    else{
        empReturn(`Empleado ${id} no existe`);
    }
};

const getSalario = (id, salarioReturn) => {

    const salario = salarios.find(s => s.id === id)?.salario;

    if(salario){
        salarioReturn(null, salario);
    }else{
        salarioReturn(`Salario con id ${id} no existe`);
    }

};

const id = 2;

getEmpleado(id, (error, emp) => {
    if(error){
        console.log('Error');
        console.log(error);
    }else{
        console.log('Empleado Existe');
        console.log(emp);
    }
});

getSalario(id, (error, salary) => {
    if(error){
        console.log('Error');
        return console.log(error);
    }else{
        console.log('Salario Existe');
        console.log(salary);
    }
});

