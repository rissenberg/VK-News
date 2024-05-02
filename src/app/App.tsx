import React from 'react';
import { AppRoot, Panel, View } from '@vkontakte/vkui';
import { useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_PANEL } from './router';
import { MainPage } from '../pages/MainPage';
import { NotFound } from '../pages/NotFound';
import { StoryPage } from '../pages/StoryPage';

function App() {
	const activePanel = useGetPanelForView('default_view');

	return (
		<AppRoot mode="full">
			<View nav="default_view" activePanel={activePanel ?? DEFAULT_PANEL}>
				<Panel id="main">
					<MainPage />
				</Panel>
				<Panel id="story">
					<StoryPage />
				</Panel>
				<Panel id="404">
					<NotFound />
				</Panel>
			</View>
		</AppRoot>
	);
}

export default App;
