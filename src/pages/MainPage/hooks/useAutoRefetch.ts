import { useEffect } from 'react';

export const useAutoRefetch = (refetch: any, interval = 60000) => {
	useEffect(() => {
		const timer = setInterval(() => {
			refetch();
		}, interval);

		return () => {
			clearInterval(timer);
		};
	}, [refetch, interval]);
};
