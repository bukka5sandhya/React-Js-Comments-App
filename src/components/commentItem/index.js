import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
    const {commentDetails} = props
    const {id,name,comment,isLiked,initialClassName,date} = commentDetails

    const initial = name? name[0].toUpperCase(): '';
    const likeTextClassName= isLiked? 'button active': 'button';
    const likeImgUrl = isLiked ?
     'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
     :'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png';

    const postedTime = formatDistanceToNow(date);

     const onClickLike = () => {
        const {toggleLiked} = props
        toggleLiked(id)
     }

     const onDeleteComment = () => {
        const {commentDelete} = props
        commentDelete(id)
     }
     return(
        <>
        <li className="comment-item">
            <div className="comment-container">
                <div className={initialClassName}>
                    <p className="initial">{initial}</p>
                </div>
                <div>
                    <div className="username-time-container">
                        <p className="username">{name}</p>
                        <p className="time">{postedTime} ago</p>
                    </div>
                    <p className="comment">{comment}</p>
                </div>
            </div>
            <div className="buttons-container">
                <div className="like-container">
                <img src={likeImgUrl} className="like-image" alt="like"/>
                <button
                 className={likeTextClassName}
                 type="button"
                 onClick={onClickLike}>
                    Like
                </button>
                
            </div>
            <button 
            type="button"
             className="button"
              onClick={onDeleteComment}
              testid="delete">
                <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className="delete" alt="delete"/>
              </button>
            </div>
            <hr className="comment-line"/>

        </li>
        </>

     )


}
export default CommentItem;