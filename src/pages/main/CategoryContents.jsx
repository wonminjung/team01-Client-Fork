import React from 'react';
import { Link } from 'react-router-dom';
import Content from './ContentSlider';
import S from './style';

const CategoryContents = () => {
    const contentData = [
        {
            id : "1",
            img : ["./images/pages/main/image1-1.jpg","./images/pages/main/image1-2.jpg","./images/pages/main/image1-3.jpg","./images/pages/main/image1-4.jpg","./images/pages/main/image1-5.jpg"],
            title : "title1",
            address : "address1",
            dayPrice : "150000"
        },
        // {
        //     id : "2",
        //     img : ["img2-1","img2-2","img2-3","img2-4","img2-5"],
        //     title : "title2",
        //     address : "address2",
        //     dayPrice : "200000"
        // },
        // {
        //     id : "3",
        //     img : ["img3-1","img3-2","img3-3","img3-4","img3-5"],
        //     title : "title3",
        //     address : "address3",
        //     dayPrice : "250000"
        // },
        // {
        //     id : "4",
        //     img : ["img4-1","img4-2","img4-3","img4-4","img4-5"],
        //     title : "title4",
        //     address : "address4",
        //     dayPrice : "250000"
        // },
        // {
        //     id : "5",
        //     img : ["img5-1","img5-2","img5-3","img5-4","img5-5"],
        //     title : "title5",
        //     address : "address5",
        //     dayPrice : "250000"
        // },
        // {
        //     id : "6",
        //     img : ["img6-1","img6-2","img6-3","img6-4","img6-5"],
        //     title : "title6",
        //     address : "address6",
        //     dayPrice : "250000"
        // }
    ]
    return (
        <S.CategoryContentBox>
            {contentData.map((data,i)=>
                <div key={i} className="content">
                    <Link to={`/detail?content=${data.id}`}>
                        <div className="imgBox">
                            <Content img={data.img}/>
                        </div>
                        <div className="textBox">
                            <div className="titleBox">
                                <h6>{data.title}</h6>
                            </div>
                            <div className="addAndPriceBox">
                                <span className="address">{data.address}</span>
                                <span className="price">{data.dayPrice}</span>
                            </div>
                            <div className="linkBox">예약하기</div>
                        </div>
                    </Link>
                </div>
            )}
        </S.CategoryContentBox>
    );
};

export default CategoryContents;