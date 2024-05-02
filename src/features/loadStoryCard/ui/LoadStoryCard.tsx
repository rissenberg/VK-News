import { useQuery } from '@tanstack/react-query';
import { getItemInfo, IItem } from '../../../entity/Item';
import { Group, Header } from '@vkontakte/vkui';
import { getUserInfo, IUser } from '../../../entity/User';
import React from 'react';
import { StoryCard } from '../../../entity/StoryCard/ui/StoryCard';

interface IProps {
	storyID: number,
}

export const LoadStoryCard = (props: IProps) => {
	const { storyID } = props;

	const {
		data: story,
		error: errorStory,
		isFetching: isFetchingStory
	} = useQuery<IItem>(getItemInfo(storyID));

	const {
		data: author,
		error: errorAuthor,
		isFetching: isFetchingAuthor
	} = useQuery<IUser>(getUserInfo(story?.by));

	if (errorAuthor || errorStory)
		return (
			<Group>
				<Header> Error occurred during data fetch </Header>
			</Group>
		);

	return (isFetchingStory || isFetchingAuthor) ?
		(<Group>
			<Header> Loading... </Header>
		</Group>)
		:
		(<Group>
			{ story && author && <StoryCard story={story} author={author}/>}
		</Group>);
};
