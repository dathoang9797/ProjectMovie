import React from 'react';
import {ProfilePageCSS} from '../Profile.style'

const {CardOutlineProfile} = ProfilePageCSS;

function HomeProfile(props) {

    const {userInfo} = props
    return (
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
            <CardOutlineProfile
                className="">
                <h2>Thông tin cá nhân</h2>
                <div className="grid grid-cols-1 w-4/5 gap-3 bg-te">
                    <div className="flex justify-between">
                        <div className="">
                            <span>Họ tên:</span>
                        </div>
                        <div className="text-right">
                            <span>{userInfo?.fullName}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <span>Tài khoản:</span>
                        </div>
                        <div className="text-right">
                            <span>{userInfo?.userName}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <span>Email:</span>
                        </div>
                        <div className="text-right">
                            <span>{userInfo?.email}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <span>Số điện thoại:</span>
                        </div>
                        <div className="text-right">
                            <span>{userInfo?.phone}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="">
                            <span>Địa chỉ:</span>
                        </div>
                        <div className="text-right">
                            <span>{userInfo.address}</span>
                        </div>
                    </div>
                </div>
            </CardOutlineProfile>
        </div>
    );
}

export default HomeProfile;
