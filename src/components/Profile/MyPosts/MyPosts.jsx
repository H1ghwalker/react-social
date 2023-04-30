import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => ( <Post message={p.message} likesCount={p.likesCount} /> ));

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text) 
    };

    return (
        <div>
            <div className={s.post__body}>
                <h3 className={s.title}>My posts</h3>
                <div>
                    <div>
                        <textarea
                            onChange={ onPostChange }
                            ref={newPostElement}
                            value={props.newPostText}
                        />
                        <textarea></textarea>
                    </div>
                    <div>
                        <button onClick={ onAddPost }>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>{postsElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
