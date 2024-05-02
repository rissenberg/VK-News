const api_fetch = async ({ signal }: { signal: AbortSignal }) => {
	const url = 'https://hacker-news.firebaseio.com/v0/newstories.json';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
		signal,
	};

	return (await (await fetch(url, options)).json());
};

export const getNewStories = {
	queryKey: ['getNewStories'],
	queryFn: api_fetch,
	enabled: true,
	retryDelay: 1000,
	retryCount: 5,
};
