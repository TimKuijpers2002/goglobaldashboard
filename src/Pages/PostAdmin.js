import React, { useState} from "react";
import {Button, Form, Input, Space} from "antd";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios';
import {MailOutlined, SafetyCertificateOutlined, UserOutlined} from "@ant-design/icons";
import {Sidebar} from "../Components/Sidebar"
import ErrorBoundary from "../ErrorHandling/ErrorBoundary";
import SuccesNotifier from "../ErrorHandling/SuccesNotifier"
import ErrorNotifier from "../ErrorHandling/ErrorNotifier"

toast.configure();
export default function PostAdmin() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const ChangeHandler = (e) => {
        switch (e.target.name) {
            case "name" :
                setName(e.target.value);
                break;
            case "email" :
                setEmail(e.target.value);
                break;
            case "password" :
                setPassword(e.target.value);
                break;
            default:
        }
    }

    const headers = {
        'Content-Type': 'application/json'
    }

    const properties = {
        name: name,
        email: email,
        password: password,
    }

    function SubmitHandler(e) { 
        ValidateInput(properties.name, properties.email, properties.password)
        e.preventDefault()

        axios.post("./api/admins", JSON.stringify(properties) , {
            headers: headers})
            .then(function (res) {
                if(res.status === 200)
                SuccesNotifier("Admin succesfully created!");
            })
            .catch(function (error) {
                console.log(error.response.status)
                if (error.response) {
                    //console.log(error.response.status)
                    if(error.response.status === 409)
                    ErrorNotifier("Another admin with this email already exists!");
                }
            });
    }

    function ValidateInput(name, email, password){
        if(!name || !email || !password){
            throw new Error("All fields need to be filled in correctly!")
        }
        else return
    }

    return (
        <Sidebar name="Admin Create" data={ 
            <div>
                <Form>
                    <Space direction="vertical">
                        <Input name="name" type="text" value={name} onChange={ChangeHandler} placeholder="name" prefix={<UserOutlined />}/>
                        <Input name="email" type="text" value={email} onChange={ChangeHandler} placeholder="email" prefix={<MailOutlined />}/>
                        <Input.Password name="password" type="text" value={password} onChange={ChangeHandler} placeholder="password" prefix={<SafetyCertificateOutlined />}/>
                        <ErrorBoundary>
                        <Button name="post-btn" type="primary" htmlType="submit" onClick={SubmitHandler}>Submit</Button>
                        </ErrorBoundary>
                    </Space>
                </Form>
            </div>
        }/>
    );
}
