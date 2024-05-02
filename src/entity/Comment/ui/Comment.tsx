import cls from './style.module.scss';
import { IItem } from '../../Item';
import { IUser } from '../../User';
import { Button, Card, Div, Header, RichCell } from '@vkontakte/vkui';
import React, { useState } from 'react';
import { AlertHeader } from '@vkontakte/vkui/dist/components/Alert/AlertTypography';

interface IProps {
	comment: IItem,
	author?: IUser,
	children: React.ReactNode,
}

export const Comment = (props: IProps) => {
	const { comment, author, children } = props;
	const [showReplies, setShowReplies] = useState<boolean>(false);

	const commentDate = new Date(parseInt(comment.time) * 1000);

	const toggleShowReplies = () => {
		setShowReplies(prev => !prev);
	};

	if (comment.deleted)
		return (<Div> Deleted Comment </Div>);

	return (
		<>
			<RichCell
				subhead={author && `Author: ${author.id} [${author.karma > 0 && '+'}${author.karma}]`}
				caption={commentDate.toLocaleString()}
				actions={
					<Button
						mode="primary"
						appearance={comment.kids ? 'accent' : 'neutral'}
						size="s"
						after={!comment.kids ? null : showReplies ? '^' : 'v'}
						onClick={toggleShowReplies}
						disabled={!comment.kids}
					>
						{comment.kids? comment.kids.length : 0} {comment.kids?.length === 1 ? 'Reply' : 'Replies'}
					</Button>
				}
			>
				<Div
					className={cls.commentContent}
					dangerouslySetInnerHTML={{ __html: comment.text ?? '' }}
				/>
			</RichCell>
			<Div
				className={cls.repliesContainer}
				style={{ display: showReplies ? 'block' : 'none' }}
			>
				{ children }
			</Div>
		</>
	);
};