import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" />
            </div>
            <div className={s.prof__desc}>
                ava + desc
            </div>
        </div>
    );
};

export default ProfileInfo;
