import React, {useEffect, useState} from "react";
import {Button, Empty, Spin, Table, Space,} from "antd";
import axios from 'axios';
import {LoadingOutlined, EditOutlined} from "@ant-design/icons";
import {Sidebar} from "../Components/Sidebar";
import AdminModal from "../Components/AdminModal"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export default function Admin() {

    const columns = [
        {
            title: 'Id',
            dataIndex: 'adminId',
            key: 'adminId',
            width: 10,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 20,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 20,
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
            width: 20,
        },
        {
            title: 'Actions',
            key: 'operations',
            width: 20,
    
            render: (record) =>
                        <Space size={"middle"}>
                            <EditOutlined style={{color:'red'}} onClick={()=> {toggleVisibility(true); setAdmin(record)}}/>
                        </Space>
        },
    ];

    const [admins, setAdmins] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [visibility, toggleVisibility] = useState(false);
    const [admin, setAdmin] = useState();
    
    const getAdmins = () =>
        axios.get("api/admins")
            .then(res => {
                console.log(res);
                setAdmins(res.data);
                setFetching(false);
            })

    useEffect(() => {
        console.log("component is mounted");
        getAdmins().then(r => console.log(r));
    }, []);

    const renderAdmins = () => {
        if(fetching){
            return <Spin indicator={antIcon} />
        }
        if(admins.length <= 0){
            return <Empty />;
        }
        return <Table
            dataSource={admins}
            columns={columns}
            bordered
            title={() => 'Admins:'}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            rowKey = {(admin) => admin.id}
        />;

    }
    return (
        <Sidebar name={"Admin"} data={
            <div>
                <Button onClick={() => {window.location.pathname = "/AdminCreate"}}>Create admin</Button>
                {renderAdmins()}
                <div >
                    {visibility && <AdminModal closeModal = {toggleVisibility} adminId={admin.adminId} />}
                </div>
            </div>
        }/>
    );
}