const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar',opt)
    .command('crear', 'Genera un archivo con la tabla de multiplicar de la base hasta el limite', opt)
    .help()
    .argv;

module.exports = {
    argv
}