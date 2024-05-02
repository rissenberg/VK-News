import { IItem } from '../../../entity/Item';
import { Div, Group, Header, Link, RichCell } from '@vkontakte/vkui';
import cls from './style.module.scss';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo, IUser } from '../../../entity/User';
import { CommentItem } from '../../../features/CommentItem';

interface IProps {
	story: IItem,
}

export const StoryInterface = (props: IProps) => {
	const { story } = props;

	const {
		data: author,
		isFetching: isFetchingAuthor
	} = useQuery<IUser>(getUserInfo(story.by));

	const storyDate = new Date(parseInt(story.time) * 1000);

	return (
		<>
			<Group>
				<RichCell
					subhead={isFetchingAuthor ? 'Loading...' :
						author && `Author: ${author.id} [${author.karma > 0 && '+'}${author.karma}]`}
					caption={storyDate.toLocaleString()}
					afterCaption={
						<Div
							className={cls.scoreLabel}
							style={{ backgroundColor: story.score > 0 ? '#4bb34b' : '#757576' }}
						>
							{story.score > 0 && '+'}
							{story.score}
						</Div>
					}
				>
					<Div className={cls.storyTitle}>
						{story.title}

						<Div
							className={cls.storyText}
							dangerouslySetInnerHTML={{ __html: story.text ?? '' }}
						/>

						<Link> {story.url} </Link>
					</Div>

				</RichCell>
			</Group>

			<Group>
				<Header>{story.descendants} {story.descendants === 1 ? 'Comment' : 'Comments'}</Header>
				{story.kids?.map(replyID =>
					<CommentItem commentID={replyID} key={replyID} />
				)}
			</Group>
		</>
	);
};