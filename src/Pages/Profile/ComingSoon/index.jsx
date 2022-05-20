import React from 'react';
import {ProfilePageCSS} from '../Profile.style';

const {CardOutlineProfile} = ProfilePageCSS;

function ComingSoon() {
    return (
        <CardOutlineProfile className='w-full h-full'>
            <h2>Coming soon</h2>
        </CardOutlineProfile>
    );
}

export default ComingSoon;
