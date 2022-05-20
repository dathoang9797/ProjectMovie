import React, {useState} from 'react';
import {Layout} from "antd";
import {BellOutlined, EditOutlined, MailOutlined} from "@ant-design/icons";
import HomeProfile from "@Pages/Profile/HomeProfile";
import EditProfile from "@Pages/Profile/EditProfile";
import {userInfo} from "@Utils/FakeData/user1";
import Sidebar from "@Pages/Profile/Sidebar";
import {ProfilePageCSS} from './Profile.style'

const {AvatarOutline} = ProfilePageCSS

const { Content, Footer } = Layout;

function ProfilePage(props) {
    const HOME_PROFILE = process.env.REACT_APP_KEY_NAME_PROFILE_RENDER_HOME;
    const EDIT_PROFILE = process.env.REACT_APP_KEY_NAME_PROFILE_RENDER_EDIT;
    const [renderKey, setRenderKey] = useState(HOME_PROFILE);

    // const handleRestrict= () => {
    //   if (localUserInfo?.role === "admin") {
    //
    //   } else if (localUserInfo?.role === "customer") {
    //
    //   }
    // }

    const handleRenderContent = (key) => {
        setRenderKey(key);
    };

    const renderContent = () => {
        switch (renderKey) {
            case HOME_PROFILE:
                return (
                    <HomeProfile userInfo={userInfo}/>
                );
            case EDIT_PROFILE:
                return (
                    <EditProfile userInfo={userInfo} setRenderKey={handleRenderContent}/>
                );
            default:
                return <div>Tính năng chưa được phát triển, vui lòng thử lại sau</div>;
        }
    };
    return(
        <div>
            <Layout className="border-r-2 border-r-amber-600 shadow-2xl text-lg" hasSider={true}>
                <div className="lg:w-[350px] md:w-[150px] w-0 h-screen bg-transparent h-screen">
                    <Sidebar renderKey={renderKey} >
                        <div className="flex flex-col h-full w-full">
                            <div
                                className="w-full flex-none flex-col flex justify-center items-center py-8 bg-teal-50 rounded-3xl shadow shadow-lg mb-2">
                                <AvatarOutline>
                                    <img
                                         className="rounded-full lg:w-[150px] lg:h-[150px] md:w-[120px] md:h-[120px] w-[80px] h-[80px] cursor-pointer"
                                        src={userInfo.avatar} alt="avatar"
                                         onClick={() => {
                                             handleRenderContent(HOME_PROFILE);
                                         }}/>
                                </AvatarOutline>
                                <div className="">
                                    <span>Welcome</span>
                                </div>
                                <div className="">
                                    <span>{userInfo.fullName}</span>
                                </div>
                                <div className="flex justify-center space-x-2 text-xl">
                                    <a
                                        className="bg-blue-200 rounded-full w-9 h-9 flex justify-center items-center text-primary hover:text-teal-600">
                                        <BellOutlined />
                                    </a>
                                    <a
                                        className="bg-blue-200 rounded-full w-9 h-9 flex justify-center items-center text-primary hover:text-teal-600"
                                        onClick={() => {
                                            handleRenderContent(EDIT_PROFILE);
                                        }}>
                                        <EditOutlined />
                                    </a>
                                    <a
                                        className="bg-blue-200 rounded-full w-9 h-9 flex justify-center items-center text-primary hover:text-teal-600">
                                        <MailOutlined />
                                    </a>
                                </div>
                            </div>
                            <div
                                className="grow w-full flex-col flex justify-center items-center py-8 bg-teal-50 rounded-3xl shadow shadow-lg">
                                <div className="">
                                    <span>Menu</span>
                                </div>
                                <div className="flex-col flex justify-center items-center">
                                    <div className="">
                                        <span>Option 1</span>
                                    </div>
                                    <div className="">
                                        <span>Option 2</span>
                                    </div>
                                    <div className="">
                                        <span>Option 3</span>
                                    </div>
                                    <div className="">
                                        <span>Option 4</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Sidebar>
                </div>
                <Layout>
                    <Content className="px-4 text-lg">
                        {renderContent()}
                        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}

export default ProfilePage;
