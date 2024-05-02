import React from 'react';
import cls from './style.module.scss';
import { Div, Group, Header, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const NotFound = () => {
	const routeNavigator = useRouteNavigator();

	const goBack = () => {
		routeNavigator.back();
	};

	return (
		<>
			<PanelHeader before={ <PanelHeaderBack onClick={goBack} /> }>
					Hacker News
			</PanelHeader>
			<Div className={cls.notFoundPage}>
				<Group>
					<Header size='large'> 404 - Nothing found! </Header>
				</Group>
			</Div>
		</>
	);
};
