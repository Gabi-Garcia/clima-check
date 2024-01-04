function obtenerNombreDia(index) {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + index);
    const nombreDia = diasSemana[fecha.getDay()];
    return nombreDia;
}

export default obtenerNombreDia