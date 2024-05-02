import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { QueryProvider } from './app/providers/QueryProvider';
import '@vkontakte/vkui/dist/vkui.css';
import { VKProvider } from './app/providers/VKProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
	<VKProvider>
		<QueryProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</QueryProvider>
	</VKProvider>
);
