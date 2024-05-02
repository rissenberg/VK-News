import React from 'react';
import cls from './style.module.scss';
import { Div, Group, Header, PanelHeader, PanelHeaderBack, PanelHeaderButton, PullToRefresh } from '@vkontakte/vkui';
import { useQuery } from '@tanstack/react-query';
import { getItemInfo, IItem } from '../../../entity/Item';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { StoryInterface } from '../../../widgets/StoryInterface';

export const StoryPage = () => {
	const storyID = parseInt(useParams<'id'>()?.id as string);
	const routeNavigator = useRouteNavigator();
	const {
		data: story,
		refetch,
		error,
		isFetching
	} = useQuery<IItem>(getItemInfo(storyID));

	const refreshPage = () => {
		refetch();
	};

	const goToMainPage = () => {
		routeNavigator.push('/');
	};

	return (
		<>
			<PanelHeader
				before={ <PanelHeaderBack onClick={goToMainPage} /> }
				after={ <PanelHeaderButton onClick={refreshPage} label='Refresh&nbsp;&nbsp;&nbsp;&nbsp;'/> }
			>
					Hacker News
			</PanelHeader>
			<PullToRefresh onRefresh={refreshPage} isFetching={isFetching}>
				<Div className={cls.mainPage}>
					{!error ?
						story && story.type === 'story' ?
							<StoryInterface story={story} />
							:
							<Group>
								<Header> {isFetching ? 'Loading...' : '404 - Story is not found'} </Header>
							</Group>
						:
						<Group>
							<Header> Error occurred during data fetching </Header>
						</Group>
					}
				</Div>
			</PullToRefresh>
		</>
	);
};
