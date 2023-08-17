//Transforma las fechas de la DB a formato legible
function toDate(fecha) {
	const fechaOriginal = new Date(fecha);
	const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
	const fechaFormateada = fechaOriginal.toLocaleDateString('es-ES', options);

	return fechaFormateada;
}

export default toDate