import React, {useState} from "react";
import {Button, Form, Input, Space} from "antd";
import {MailOutlined, SafetyCertificateOutlined, UserOutlined} from "@ant-design/icons";
import axios from 'axios';

function Modal({ closeModal, adminId}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const headers = {
        'Content-Type': 'application/json'
    }

    const properties = {
        name: name,
        email: email,
        password: password,
    }

    const ChangeHandler = (e) => {
        switch (e.target.name) {
            case "Name" :
                setName(e.target.value);
                break;
            case "Email" :
                setEmail(e.target.value);
                break;
            case "Password" :
                setPassword(e.target.value);
                break;
            default:
        }
    }

    function SubmitHandler() {
        axios.put("./api/admins/" + adminId, JSON.stringify(properties) , {
            headers: headers})
            .then()
            .catch(err => console.log(err))
            window.location.reload()
    }

    return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="Header">
                <h2>Update admin <button onClick={() => closeModal(false)}>X</button></h2>
            </div>
            <div className="Content">
                <Form>
                    <Space direction="vertical">
                        <Input name="Name" type="text" value={name} onChange={ChangeHandler} placeholder="name" prefix={<UserOutlined />}/>
                        <Input name="Email" type="text" value={email} onChange={ChangeHandler} placeholder="email" prefix={<MailOutlined />}/>
                        <Input.Password name="Password" type="text" value={password} onChange={ChangeHandler} placeholder="password" prefix={<SafetyCertificateOutlined />}/>
                        <Button type="primary" htmlType="submit" onClick={SubmitHandler}>Submit</Button>
                    </Space>
                </Form>
            </div>
        </div>
    </div>);
}

export default Modal;