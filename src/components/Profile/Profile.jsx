import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    debugger;
    return (
        <div className={s.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
