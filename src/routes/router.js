import { createBrowserRouter } from "react-router-dom";

// 페이지
import Layout from "../pages/layout/Layout";
import PageNotFound from "../pages/error/PageNotFound";
import Main from "../pages/main/Main";
import BookingListContainer from "../pages/bookingList/BookingListContainer";
import DetailContainer from "../pages/detail/DetailContainer";
import MyPageContainer from "../pages/myPage/MyPageContainer";
import ReservationContainer from "../pages/reservation/ReservationContainer";
import SearchContainer from "../pages/search/SearchContainer";
import SignInContainer from "../pages/signIn/SignInContainer";
import SignUpContainer from "../pages/signUp/SignUpContainer";
import WishListContainer from "../pages/wishList/WishListContainer";
import Checkout from "../pages/reservation/Checkout";
import Success from "../pages/reservation/Success";
import Fail from "../pages/reservation/Fail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/bookingList',
                element: <BookingListContainer />
            },
            {
                path: '/detail',
                element: <DetailContainer />
            },
            {
                path: '/myPage',
                element: <MyPageContainer />
            },
            {
                path: '/reservation',
                element: <ReservationContainer />,
            },
            {
                path: '/reservation/checkout',
                element: <Checkout />,
            },
            {
                path: '/reservation/checkout/success',
                element: <Success />,
            },
            {
                path: '/fail',
                element: <Fail />,
            },
            {
                path: '/search',
                element: <SearchContainer />,
                children: [
                    {
                        path: ":currentPage",
                        element: <SearchContainer />,
                    }
                ]
            },
            {
                path: '/signIn',
                element: <SignInContainer />
            },
            {
                path: '/signUp',
                element: <SignUpContainer />
            },
            {
                path: '/wishList',
                element: <WishListContainer />
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]);

export default router;