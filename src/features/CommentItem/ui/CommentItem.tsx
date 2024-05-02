import { getItemInfo, IItem } from '../../../entity/Item';
import { Group, Header } from '@vkontakte/vkui';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo, IUser } from '../../../entity/User';
import { Comment } from '../../../entity/Comment';

interface IProps {
	commentID: number,
}

export const CommentItem = (props: IProps) => {
	const { commentID } = props;

	const {
		data: comment,
		error: errorComment,
		isFetching: isFetchingComment
	} = useQuery<IItem>(getItemInfo(commentID));

	const {
		data: author,
		error: errorAuthor,
	} = useQuery<IUser>(getUserInfo(comment?.by));

	if (errorAuthor || errorComment)
		return (
			<Group>
				<Header> Error occurred during data fetch </Header>
			</Group>
		);

	return (isFetchingComment) ?
		(<Group>
			<Header> Loading... </Header>
		</Group>)
		:
		(<Group>
			{ comment &&
					<Comment comment={comment} author={author}>
						{comment.kids?.map(replyID =>
							<CommentItem commentID={replyID} key={replyID}/>
						)}
					</Comment>
			}
		</Group>);
};