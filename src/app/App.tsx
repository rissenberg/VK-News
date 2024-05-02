import React from 'react';
import { AppRoot, Panel, PanelHeader, View } from '@vkontakte/vkui';
import { useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_PANEL } from './router';

function App() {
	const activePanel = useGetPanelForView('default_view');

	return (
		<AppRoot mode="full">
			<View nav="default_view" activePanel={activePanel ?? DEFAULT_PANEL}>
				<Panel id="main">
					<PanelHeader> Main Page </PanelHeader>
				</Panel>
				<Panel id="404">
					<PanelHeader> 404 - Nothing found! </PanelHeader>
				</Panel>
			</View>
		</AppRoot>
	);
}

export default App;
