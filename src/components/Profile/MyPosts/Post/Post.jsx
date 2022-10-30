import s from './Post.module.css'
import userPhoto from '../../../../assets/images/avaLogo.jpg'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src={userPhoto} alt="" />
                <div>
                    {props.message}
                </div>
            </div>
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    );
}

export default Post;