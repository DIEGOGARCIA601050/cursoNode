function ConvertTo(UnidadDeMemoria,Memoria,Unidad) {
    const memory = 'Memoria '
    return memory + UnidadDeMemoria + ': ' + (Memoria/Unidad)
}

module.exports = {
    ConvertTo
}