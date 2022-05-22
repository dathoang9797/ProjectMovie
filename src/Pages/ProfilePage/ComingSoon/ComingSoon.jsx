import React from 'react';
import {ProfilePageCSS} from '../ProfilePage.style';

const {CardOutlineProfile} = ProfilePageCSS;

function ComingSoon() {
    return (
        <CardOutlineProfile className='w-full h-full flex justify-center items-center'>
            <h2>Tính năng chưa được phát triển, vui lòng thử lại sau</h2>
        </CardOutlineProfile>
    );
}

export default ComingSoon;
