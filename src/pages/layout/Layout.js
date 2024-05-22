import React from "react";
import { Outlet } from "react-router-dom";
import S from "./style";
// import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <S.LayoutWrapper>
            {/* <Header /> */}

            <main>
                <Outlet />
            </main>

            <Footer />
        </S.LayoutWrapper>
    );
};

export default Layout;
