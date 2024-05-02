export const getUserInfo = (username?: string) => ({
	queryKey: [`getUser${username}`],
	queryFn: async ({ signal }: { signal: AbortSignal }) => {
		if (!username) {
			return null;
		}

		const url = `https://hacker-news.firebaseio.com/v0/user/${username}.json`;
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
			signal,
		};

		return (await (await fetch(url, options)).json());
	},
	enabled: true,
	retryDelay: 1000,
	retryCount: 5,
});
