import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
    return (
        <div>
            <h1 className={HeaderStyles.title}>
                <span>Naruto</span> Quotes
                <i className="ri-leaf-line"></i>
            </h1>
        </div>
    );
};

export default Header;
