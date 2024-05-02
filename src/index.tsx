import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { QueryProvider } from './app/providers/QueryProvider';
import '@vkontakte/vkui/dist/vkui.css';
import { hashRouter } from './app/router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<ConfigProvider appearance="light">
		<AdaptivityProvider>
			<RouterProvider router={hashRouter}>
				<QueryProvider>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</QueryProvider>
			</RouterProvider>
		</AdaptivityProvider>
	</ConfigProvider>,
);
