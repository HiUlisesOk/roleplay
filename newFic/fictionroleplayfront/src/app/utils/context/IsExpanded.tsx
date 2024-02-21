import { useState, createContext, useEffect } from "react";

interface IsExpandedContextType {
	isExpanded: boolean | undefined;
	toggleWidth: () => void | undefined;
}

export const IsExpandedContext = createContext<any>(undefined);

export const IsExpandedProvider = ({ children }: any) => {

	const [isExpanded, setIsExpanded] = useState(() => {
		const savedState = localStorage.getItem('isExpanded');
		return savedState !== null ? JSON.parse(savedState) : true;
	});

	useEffect(() => {
		localStorage.setItem('isExpanded', JSON.stringify(isExpanded));
	}, [isExpanded]);

	const toggleWidth = () => {
		setIsExpanded(!isExpanded);
	};

	const result: any = {
		isExpanded,
		toggleWidth
	}

	localStorage.setItem('isExpanded', JSON.stringify(isExpanded));

	return (
		<IsExpandedContext.Provider value={result}>
			{children}
		</IsExpandedContext.Provider>
	)
}