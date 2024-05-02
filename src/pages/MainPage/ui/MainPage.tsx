import React from 'react';
import cls from './style.module.scss';
import { Div, PanelHeader, PanelHeaderButton, PullToRefresh } from '@vkontakte/vkui';
import { useQuery } from '@tanstack/react-query';
import { getNewStories } from '../api/getNewStories';
import { LoadStoryCard } from '../../../features/loadStoryCard';
import { useAutoRefetch } from '../hooks/useAutoRefetch';

export const MainPage = () => {
	const {
		data,
		refetch,
		isFetching
	} = useQuery<number[]>(getNewStories);

	// Auto refresh page after 60s
	useAutoRefetch(refetch);

	const refreshNews = () => {
		refetch();
	};

	return (
		<>
			<PanelHeader after={ <PanelHeaderButton onClick={refreshNews} label='Refresh&nbsp;&nbsp;&nbsp;&nbsp;'/> } >
					Hacker News
			</PanelHeader>
			<PullToRefresh onRefresh={refreshNews} isFetching={isFetching}>
				<Div className={cls.mainPage}>
					{!isFetching &&
						data?.slice(0, 100).map(id =>
							<LoadStoryCard storyID={id} key={id}/>
						)
					}
				</Div>
			</PullToRefresh>
		</>
	);
};
