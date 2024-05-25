import React from 'react';
import { Link } from 'react-router-dom';

const CategoryContents = () => {
    return (
        <div className='cateContentBox'>
            <div className="content">
                <Link to={'/detail'}>
                    <div className="imgBox">
                        <div className="imgSwiper">
                            이미지 슬라이드
                        </div>
                    </div>
                    <div className="textBox"></div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryContents;