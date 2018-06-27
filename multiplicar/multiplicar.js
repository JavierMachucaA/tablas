//LIBRERIAS
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base,limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Valor ${base} no es un número.`);
            return;
        }
        
        let nombreArchivo = `tablas/tabla${ base }-al-${ limite }.txt`;
        let tablaContenido = `Tabla ${base}\n`;

        for (let i = 1; i <= limite; i++) {
            tablaContenido += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(nombreArchivo, tablaContenido, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(nombreArchivo);
            }
        });
    });
};

let listarTabla = (base, limite=10) => {
    return new Promise((resolve, reject) => {
        let margin = '===========================\n';
        let titulo = 'Tabla ' + base + '\n';
        let tabla = '';
        let err = '';
        if (base === undefined) {
            err += 'Base es undefined';
        }
        if (err !== '') {
            err += ',';
        }
        if (limite === undefined) {
            err += 'Limite es undefined';
        }
        if (err !== '') {
            reject(err);
        }
        
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }
        resolve(margin+titulo+tabla+margin);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
