import React from 'react';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';
import { hashRouter } from '../../../router';

interface IProps {
  children: React.ReactNode,
}

export const VKProvider = (props: IProps) => {
	const { children } = props;

	return (
		<ConfigProvider appearance="light">
			<AdaptivityProvider>
				<RouterProvider router={hashRouter}>
					{children}
				</RouterProvider>
			</AdaptivityProvider>
		</ConfigProvider>
	);
};
