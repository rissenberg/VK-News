export const getItemInfo = (id?: number) => ({
	queryKey: [`getStory${id}`],
	queryFn: async ({ signal }: { signal: AbortSignal }) => {
		if (!id) {
			return null;
		}

		const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
			signal,
		};

		return await (await fetch(url, options)).json();
	},
	enabled: true,
	retryDelay: 1000,
	retryCount: 5,
});
