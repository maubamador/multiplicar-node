const fs = require('fs');
const { resolve } = require('path');

let listarTabla = (base, limite) => {
    for (i=1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise ( (resolve, reject) => {

        if(!Number(base)){
            reject ('El valor introducido no es un numero');
            return;
        }

        let data = '';

        for(i=1; i<=limite; i++){
            data += `${base} * ${i} = ${base * i} \n`;   
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data , (err) => {
            if (err) 
                reject (err)
            else 
                resolve(`tabla-${base}.txt`);
            
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla

}

