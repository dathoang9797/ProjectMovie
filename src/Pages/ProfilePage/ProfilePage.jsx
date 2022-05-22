import React, {useState} from 'react';
import {Layout} from "antd";
import {BellOutlined, EditOutlined, MailOutlined} from "@ant-design/icons";
import HomeProfile from "@Pages/ProfilePage/HomeProfile/HomeProfile";
import EditProfile from "@Pages/ProfilePage/EditProfile/EditProfile";
import {userInfo} from "@Utils/FakeData/user1";
import Sidebar from "@Pages/ProfilePage/Sidebar/Sidebar";
import {ProfilePageCSS} from './ProfilePage.style'
import {ButtonCSS} from "@Components/Button";
import ComingSoon from "@Pages/ProfilePage/ComingSoon";
import SidebarInner from "@Pages/ProfilePage/Sidebar/SidebarInner/SidebarInner.styles";

const {ButtonNavigationProfile} = ButtonCSS
const {AvatarOutline, CardOutlineProfile, AvatarImg} = ProfilePageCSS

const { Content, Footer } = Layout;

function ProfilePage(props) {
    const HOME_PROFILE = process.env.REACT_APP_KEY_NAME_PROFILE_RENDER_HOME;
    const EDIT_PROFILE = process.env.REACT_APP_KEY_NAME_PROFILE_RENDER_EDIT;
    const [renderKey, setRenderKey] = useState(HOME_PROFILE);

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
                return <ComingSoon/>;
        }
    };
    return(
        <div>
            <Layout className="border-r-2 border-r-amber-600 shadow-2xl text-lg" hasSider={true}>
                <div className="lg:w-[350px] md:w-[150px] w-0 h-screen bg-transparent">
                    <Sidebar renderKey={renderKey} >
                        <SidebarInner>
                            <CardOutlineProfile>
                                <AvatarOutline>
                                    <AvatarImg
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
                                    <ButtonNavigationProfile>
                                        <BellOutlined />
                                    </ButtonNavigationProfile>
                                    <ButtonNavigationProfile
                                        onClick={() => {
                                            handleRenderContent(EDIT_PROFILE);
                                        }}>
                                        <EditOutlined />
                                    </ButtonNavigationProfile>
                                    <ButtonNavigationProfile>
                                        <MailOutlined />
                                    </ButtonNavigationProfile>
                                </div>
                            </CardOutlineProfile>
                            <CardOutlineProfile className='grow'>
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
                            </CardOutlineProfile>
                        </SidebarInner>
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
