const fs = require("fs");
const colors = require('colors');

const crearTablaMultiplicar = async (base = 5, listar = false, hasta = 10) => {
  
    try {


    let output = '';
    let consola = '';

    for (let index = 1; index <= hasta; index++) {
      output += `${base} x ${index} = ${base * index}\n`;
      consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
    }

    if( listar ) {
      console.log("============================".green);
      console.log("Tabla de multiplicar del: ".green, colors.blue(base));
      console.log("============================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, output);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearTablaMultiplicar,
};
