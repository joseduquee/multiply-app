const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Muestra el numero de multiplicaciones'
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'Base must be a number';
                    }
                    return true;
                })
                .argv;

module.exports = argv;