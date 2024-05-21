import React from "react";
import { Outlet } from "react-router-dom";
import S from "./style";

const Layout = () => {
    return (
        <div>
            <S.Header>헤더</S.Header>

            <main>
                <Outlet />
            </main>

            <footer>푸터</footer>
        </div>
    );
};

export default Layout;
