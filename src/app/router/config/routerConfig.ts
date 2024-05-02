import { createHashRouter } from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_PANEL = 'main';

export const hashRouter = createHashRouter([
	{
		path: '/main',
		panel: 'main',
		view: 'default_view',
	},
	{
		path: '*',
		panel: '404',
		view: 'default_view',
	},
]);