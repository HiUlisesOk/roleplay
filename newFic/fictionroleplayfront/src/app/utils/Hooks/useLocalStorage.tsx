import { useState, useEffect } from 'react';

function useLocalStorage(key: string, defaultValue: boolean) {
	// Get from local storage then
	// parse stored json or if none return initialValue
	const [state, setState] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
	});

	useEffect(() => {
		// Function to check for changes in localStorage
		const checkStorageChange = () => {
			const storedValue = localStorage.getItem(key);
			const currentValue = storedValue !== null ? JSON.parse(storedValue) : defaultValue;
			if (currentValue !== state) {
				setState(currentValue);
			}
		};

		// Check for changes every 500 milliseconds
		const intervalId = setInterval(checkStorageChange, 500);

		// Clear interval on cleanup
		return () => {
			clearInterval(intervalId);
		};
	}, [key, state, defaultValue]); // Re-run this effect when `key`, `state`, or `defaultValue` changes

	return state;
}

export default useLocalStorage;