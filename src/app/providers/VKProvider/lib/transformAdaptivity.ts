import {
	type AdaptivityProps,
	getViewWidthByViewportWidth,
	getViewHeightByViewportHeight,
	ViewWidth,
} from '@vkontakte/vkui';
import type { UseAdaptivity } from '@vkontakte/vk-bridge-react';


export const transformAdaptivity = (props: UseAdaptivity): AdaptivityProps => {
	const {
		type,
		viewportWidth,
		viewportHeight,
	} = props;

	switch (type) {
	case 'adaptive':
		return {
			viewWidth: getViewWidthByViewportWidth(viewportWidth),
			viewHeight: getViewHeightByViewportHeight(viewportHeight),
		};
	case 'force_mobile':
	case 'force_mobile_compact':
		return {
			viewWidth: ViewWidth.MOBILE,
			sizeX: 'compact',
			sizeY: type === 'force_mobile_compact' ? 'compact' : 'regular',
		};
	default:
		return {};
	}
};