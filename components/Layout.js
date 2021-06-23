import LayoutStyles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Header />
            <div className={LayoutStyles.container}>
                <main className={LayoutStyles.main}>{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
