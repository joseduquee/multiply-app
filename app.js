const argv = require('./config/yargs');
const { crearTablaMultiplicar } = require('./helpers/multiply');


console.clear();

//con esto podemos pasar los flas o argumentos de la consola
// la posicion 3 si no viene nada por default se base=5
// const [ , , arg3 = 'base=5'] = process.argv;
// const [, base] = arg3.split('=');

// const base = 9;

crearTablaMultiplicar(argv.b, argv.l, argv.h)
    .then( nameFile => console.log(nameFile))
    .catch(err => console.log(err))



