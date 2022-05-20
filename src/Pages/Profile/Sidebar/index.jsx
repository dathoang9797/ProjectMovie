import React, {useEffect, useState} from 'react';
import {Drawer} from "antd";
import {DoubleLeftOutlined, DoubleRightOutlined} from "@ant-design/icons";
import './index.css'
import {ProfilePageCSS} from '../Profile.style'

const {ButtonShowDrawer} = ProfilePageCSS

function Sidebar(props) {
    const [isMobile, setIsMobile] = useState(false)
    const [visible, setVisible] = useState(false);
    const MOBILE_MAX_WIDTH = 768;
    const {renderKey}= props;

    const handleResize = () => {
        if (window.innerWidth < MOBILE_MAX_WIDTH) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        onClose()
    }, [renderKey]);


    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
    })

    useEffect(() => {
        return () => {
            window.removeEventListener("resize", handleResize)
        };
    }, []);

    return (
        !isMobile
            ?
            (<div className='lg:w-[350px] md:w-[160px] w-[0px] h-screen p-1.5 fixed'>
                {props.children}
            </div>)
            :
            <>
                <Drawer
                    id='profile_sidebar'
                    placement="left"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    key={'left'}
                    closeIcon={<DoubleLeftOutlined />}
                >
                    {props.children}
                </Drawer>
                <ButtonShowDrawer onClick={() => {
                    showDrawer()
                }}>
                    <DoubleRightOutlined />
                </ButtonShowDrawer>
            </>
    );
}

export default Sidebar;
