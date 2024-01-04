 function convertirUnixATiempo(unixTimestamp){
    const tiempo = new Date(unixTimestamp * 1000); // Multiplicar por 1000 para convertir segundos a milisegundos
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();

    // Formatear la salida a "HH:MM:SS"
    return `${agregarCeroDelante(horas)}:${agregarCeroDelante(minutos)}:${agregarCeroDelante(segundos)}`;
}

function agregarCeroDelante(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

export default convertirUnixATiempo 