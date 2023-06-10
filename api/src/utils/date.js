// Genera una fecha en el formato YYYY-MM-DD
const generateDateOnly = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const day = String(currentDate.getDate()).padStart(2, '0');
	const dateOnly = `${year}-${month}-${day}`;
	return dateOnly;
};

// Generar una fecha y hora en formato ISO 8601
const generateDateTime = () => {
	const currentDateTime = new Date();
	const isoDateTime = currentDateTime.toISOString();
	return isoDateTime;
};

module.exports = { generateDateOnly, generateDateTime }