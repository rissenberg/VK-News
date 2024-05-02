import React from 'react';
import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance } from '@vkontakte/vk-bridge-react';
import { transformAdaptivity } from '../lib/transformAdaptivity';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';
import { hashRouter } from '../../../router';

interface IProps {
  children: React.ReactNode,
}

export const VKProvider = (props: IProps) => {
	const { children } = props;

	vkBridge.send('VKWebAppInit');

	const vkBridgeAppearance = useAppearance() || undefined;
	const vkBridgeAdaptivityProps = transformAdaptivity(useAdaptivity());
	const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);


	return (
		<ConfigProvider
			appearance={vkBridgeAppearance}
			platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
			isWebView={vkBridge.isWebView()}
			hasCustomPanelHeaderAfter={vk_platform !== 'desktop_web'}
		>
			<AdaptivityProvider {...vkBridgeAdaptivityProps}>

				<RouterProvider router={hashRouter}>

					{children}

				</RouterProvider>

			</AdaptivityProvider>

		</ConfigProvider>
	);
};
