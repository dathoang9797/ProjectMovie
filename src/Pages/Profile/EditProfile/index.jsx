import React, {useEffect} from "react";
import {Form, Input, message} from "antd";
import validator from "validator";
import "./index.css";
import {ButtonCSS} from "@Components/Button";
import {ProfilePageCSS} from "../Profile.style"

const {CardOutlineProfile} = ProfilePageCSS;

const {ButtonPrimary, ButtonEscape} = ButtonCSS;

function EditProfile(props) {
    const {userInfo, setRenderKey} = props
    const [form] = Form.useForm();
    const HOME_PROFILE = process.env.REACT_APP_KEY_NAME_PROFILE_RENDER_HOME;

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 16
        }
    };
    console.log(process.env.REACT_APP_LINK_PROFILE)

    useEffect(() => {
        form.setFieldsValue(userInfo);
    }, []);

    const isValuesChanged = (values, newValues) => {
        for (let key in values) {
            if (values[key] !== newValues[key]) {
                return true
            }
        }
        return false
    };

    const handleEditInfo = () => {
        setRenderKey(HOME_PROFILE);
        message.success("Cập nhật thông tin thành công!");
    }

    const onFinish = (values) => {
        isValuesChanged(values, userInfo)
            ? handleEditInfo()
            : message.warning("Bạn chưa thay đổi gì, vui lòng thử lại", 2);
        window.location.reload();
    };

    return (
        <CardOutlineProfile className="overflow-hidden">
            <h3>Chỉnh sửa tài khoản</h3>
            <Form {...layout} form={form} name="form-edit-profile" onFinish={onFinish} className="form-edit-profile">
                <Form.Item
                    name="userName"
                    label="Tài khoản"
                    disabled
                >
                    <Input disabled={true} bordered={false}
                           className="rounded-full bg-amber-100 text-right text-primary"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input.Password className="rounded-full bg-amber-100 text-right"/>
                </Form.Item>
                <Form.Item
                    name="fullName"
                    label="Họ tên"
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input className="rounded-full bg-amber-100 text-right"/>
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email"
                        },
                        {
                            validator: (_rule, value) => {
                                return validator.isEmail(value)
                                    ? Promise.resolve()
                                    : Promise.reject("Email không hợp lệ");
                            },
                            message: "Email không hợp lệ"
                        }
                    ]}
                >
                    <Input className="rounded-full bg-amber-100 text-right"/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập số điện thoại"
                        },
                        {
                            validator: (_rule, value) => {
                                return validator.isMobilePhone(value, "vi-VN")
                                    ? Promise.resolve()
                                    : Promise.reject("Số điện thoại không hợp lệ");
                            },
                            message: "Số điện thoại không hợp lệ"
                        }
                    ]}>
                    <Input placeholder="Chưa có số điện thoại"
                           className="rounded-full bg-amber-100 text-right placeholder:text-gray-500 placeholder:opacity-60"/>
                </Form.Item>

                <div className='flex justify-around'>
                    <ButtonEscape onClick={() => {
                        setRenderKey(HOME_PROFILE)
                    }}>
                        Hủy
                    </ButtonEscape>
                    <ButtonPrimary htmlType="submit">
                        Cập nhật
                    </ButtonPrimary>
                </div>
            </Form>
        </CardOutlineProfile>
    );
}

export default EditProfile;
