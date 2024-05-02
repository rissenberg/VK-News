import cls from './style.module.scss';
import { IItem } from '../../Item';
import { IUser } from '../../User';
import { Button, Div, RichCell } from '@vkontakte/vkui';
import React from 'react';

interface IProps {
	story: IItem,
	author: IUser,
}

export const StoryCard = (props: IProps) => {
	const { story, author } = props;

	const storyDate = new Date(parseInt(story.time) * 1000);

	return (
		<RichCell
			subhead={`Author: ${author.id} [${author.karma > 0 && '+'}${author.karma}]`}
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
			actions={
				<Button mode="primary" size="s">
					{story.descendants} Comments
				</Button>
			}
		>
			<Div className={cls.cardContent}>
				{story.title}
			</Div>
		</RichCell>
	);
};