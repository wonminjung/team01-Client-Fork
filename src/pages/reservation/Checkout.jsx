import { useEffect, useRef, useState, React } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import "./style.css";
import { useQuery  } from "@tanstack/react-query";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const selector = "#payment-widget";

// TODO: clientKey는 개발자센터의 결제위젯 연동 키 > 클라이언트 키로 바꾸세요.
// TODO: customerKey는 구매자와 1:1 관계로 무작위한 고유값을 생성하세요.
// @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = nanoid();

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const roomId = searchParams.get("roomId");
    const sdate = searchParams.get("sdate");
    const edate = searchParams.get("edate");
    const guests = searchParams.get("guests");
    const infants = searchParams.get("infants");
    const title = searchParams.get("title");
    const days = Number(searchParams.get("days"));
    const dayPrice = Number(searchParams.get("dayPrice"));
    const cleanVat = Number(searchParams.get("cleanVat"));
    const { data: paymentWidget } = usePaymentWidget(clientKey, customerKey);
    // const paymentWidget = usePaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
    const paymentMethodsWidgetRef = useRef(null);
    const sum = dayPrice * days + cleanVat;
    const [price] = useState(sum + sum/10);
    const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] = useState(false);
    const params = createSearchParams({roomId, sdate, edate, guests, infants}).toString();
    const currentUser = useSelector(state => state.user.currentUser);
    const userName = currentUser.name;
    const userEmail = currentUser.email;
    const userPhone = currentUser.phone;

    useEffect(() => {
        if (paymentWidget == null) {
            return;
        }

        // ------  결제 UI 렌더링 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price }, { variantKey: "DEFAULT" });

        // ------  이용약관 UI 렌더링 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
        paymentWidget.renderAgreement("#agreement", { variantKey: "AGREEMENT" });

        //  ------  결제 UI 렌더링 완료 이벤트 ------
        paymentMethodsWidget.on("ready", () => {
            paymentMethodsWidgetRef.current = paymentMethodsWidget;
            isPaymentMethodsWidgetReady(true);
        });
    }, [paymentWidget,price]);

    useEffect(() => {
        const paymentMethodsWidget = paymentMethodsWidgetRef.current;

        if (paymentMethodsWidget == null) {
            return;
        }

        // ------ 금액 업데이트 ------
        // @docs https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
        paymentMethodsWidget.updateAmount(price);
    }, [price]);

    return (
        <div className="container">
            <div className="wrapper">
                <div className="box_section">
                    <div id="payment-widget" />
                    <div id="agreement" />
                    <button
                        className="button"
                        style={{ marginTop: "30px" }}
                        disabled={!paymentMethodsWidgetReady}
                        onClick={async () => {
                            // TODO: 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                            // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                            try {
                            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                            // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
                                await paymentWidget?.requestPayment({
                                    orderId: nanoid(),
                                    orderName: title,
                                    customerName: userName,
                                    customerEmail: userEmail,
                                    customerMobilePhone: userPhone.replaceAll("-",""),
                                    successUrl: `${window.location.origin}/reservation/checkout/success?${params}&title=${title}`,
                                    failUrl: `${window.location.origin}/fail`,
                                });
                            } catch (error) {
                            // 에러 처리하기
                                console.error(error);
                            }
                        }}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    );
}

function usePaymentWidget(clientKey, customerKey) {
    return useQuery({
        queryKey: ["payment-widget", clientKey, customerKey],
        queryFn: () => {
        // ------  결제위젯 초기화 ------
         // @docs https://docs.tosspayments.com/reference/widget-sdk#sdk-설치-및-초기화
            return loadPaymentWidget(clientKey, customerKey);
        },
    });
}

export default Checkout;