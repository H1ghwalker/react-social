import s from './Header.module.css'
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" />
        </header>
    );
};

export default Header;