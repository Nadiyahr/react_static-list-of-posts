import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <div className="CommentList__item" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
