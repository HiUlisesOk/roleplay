export const logout = () => {
	// Realizar cualquier lógica de deslogueo necesaria, como llamar a una API para cerrar la sesión

	// Limpiar cualquier dato de sesión almacenado localmente, como tokens de acceso o información de usuario en el almacenamiento local
	localStorage.clear();

	// Recargar la página para asegurarse de que se actualice completamente
	location.reload();

	// Redirigir al usuario a la página de inicio
	location.href = '/login';
};



