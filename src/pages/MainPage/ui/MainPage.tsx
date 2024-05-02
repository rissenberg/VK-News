import React from 'react';
import cls from './style.module.scss';
import { Button, Div, PanelHeader, PanelHeaderButton, PullToRefresh } from '@vkontakte/vkui';
import { useQuery } from '@tanstack/react-query';
import { getNewStories } from '../api/getNewStories';
import { LoadStoryCard } from '../../../features/loadStoryCard';

export const MainPage = () => {
	const {
		data,
		refetch,
		isFetching
	} = useQuery<number[]>(getNewStories);

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
						data?.slice(0, 10).map(id =>
							<LoadStoryCard storyID={id} key={id}/>
						)
					}
				</Div>
			</PullToRefresh>
		</>
	);
};
