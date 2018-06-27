const argv  = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];
//console.log(argv._);
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((tabla) => {
                console.log(colors.green(tabla));
            })
            .catch((err) => {
                console.log(err);
            });

        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log('Archivo creado:', archivo);
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}
