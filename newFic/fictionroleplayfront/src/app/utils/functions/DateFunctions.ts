//Transforma las fechas de la DB a formato legible
export function toDate(fecha: string | Date) {
  const fechaOriginal = new Date(fecha);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const fechaFormateada = fechaOriginal.toLocaleDateString(
    "es-ES",
    options as Intl.DateTimeFormatOptions
  );

  return fechaFormateada;
}

export function getTimeDifferenceString(targetDate: string | Date) {
  const currentDate = new Date();
  // Verificar si targetDate es una instancia válida de Date
  if (!(targetDate instanceof Date)) {
    // Puedes ajustar el formato según tus necesidades
    targetDate = new Date(targetDate);

    // Verificar si la conversión fue exitosa
    if (isNaN(targetDate.getTime())) {
      return "Invalid date format";
    }
  }
  // console.log('targetDate =>' + targetDate)
  const timeDifference = currentDate.getTime() - targetDate.getTime();

  // Definir las unidades de tiempo en milisegundos
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  // Calcular la diferencia en cada unidad
  const minutes = Math.floor(timeDifference / minute);
  const hours = Math.floor(timeDifference / hour);
  const days = Math.floor(timeDifference / day);
  const months = Math.floor(timeDifference / month);
  const years = Math.floor(timeDifference / year);

  // Crear la cadena de tiempo
  if (years > 0) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months > 0) {
    const remainingDays = days - months * 30;
    const daysString =
      remainingDays > 0
        ? ` and ${remainingDays} ${remainingDays === 1 ? "day" : "days"}`
        : "";
    return months === 1
      ? `1 month${daysString} ago`
      : `${months} months${daysString} ago`;
  } else if (days > 0) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    const remainingMinutes = minutes - hours * 60;
    const minutesString =
      remainingMinutes > 0
        ? ` and ${remainingMinutes} ${
            remainingMinutes === 1 ? "minute" : "minutes"
          }`
        : "";
    return hours === 1
      ? `1 hour${minutesString} ago`
      : `${hours} hours${minutesString} ago`;
  } else {
    return minutes <= 1 ? "just now" : `${minutes} minutes ago`;
  }
}
