"use client"

import Footer from "../Footer/Footer";

const Header = () => {
    console.log('hello i am from header component')
    return (
        <div>
            <h1>this is header component</h1>
            <Footer/>
        </div>
    );
};

export default Header;