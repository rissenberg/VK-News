import { createHashRouter } from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_PANEL = 'main';

export const hashRouter = createHashRouter([
	{
		path: '/',
		panel: 'main',
		view: 'default_view',
	},
	{
		path: '/stories/:id',
		panel: 'story',
		view: 'default_view',
	},
	{
		path: '*',
		panel: '404',
		view: 'default_view',
	},
]);