import React, {useEffect, useState} from "react";
import {Sidebar} from "../Components/Sidebar";
import axios from "axios";
import {Empty, Space, Spin, Table, Tag} from "antd";
import {CheckSquareOutlined, DeleteOutlined, LoadingOutlined} from "@ant-design/icons";
import Text from "antd/es/typography/Text";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export default function LocationSubmit() {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'locationFormId',
            key: 'locationFormId',
            width: 8,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Submitter',
            dataIndex: ['baseForm', 'nameSubmitter'],
            key:'nameSubmitter',
            width: 10,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Email submitter',
            dataIndex: ['baseForm', 'emailSubmitter'],
            key:'emailSubmitter',
            width: 15,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Content',
            dataIndex: ['baseForm', 'formContent'],
            key:'formContent',
            width: 20,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude',
            width: 10,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude',
            width: 10,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 15,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Facilities',
            dataIndex: 'facilities',
            key: 'facilities',
            width: 9,
            render: facilities => (
                <Text>
                    {facilities.map(facility => {
                        let color = 'geekblue';
                        return (
                            <Tag color={color} key={facility.name}>
                                {facility.name.toUpperCase()}
                            </Tag>
                        );
                    })}
                </Text>
            ),
        },
        {
            title: 'Categories',
            dataIndex: 'categories',
            key: 'categories',
            width: 11,
            render: categories => (
                <Text>
                    {categories.map(category => {
                        let color = 'geekblue';
                        return (
                            <Tag color={color} key={category.name}>
                                {category.name.toUpperCase()}
                            </Tag>
                        );
                    })}
                </Text>
            ),
        },
        {
            title: 'Terrains',
            dataIndex: 'terrains',
            key: 'terrains',
            width: 10,
            render: terrains => (
                <Text>
                    {terrains.map(terrain => {
                        let color = 'geekblue';
                        return (
                            <Tag color={color} key={terrain.name}>
                                {terrain.name.toUpperCase()}
                            </Tag>
                        );
                    })}
                </Text>
            ),
        },
        {
            title: 'Actions',
            key: 'operations',
            width: 10,
    
            render: (record) =>
                        <Space size={"middle"}>
                        <DeleteOutlined style={{color:'red'}} onClick={()=> {
                            handleDelete(record);
                        }}/>
                        <CheckSquareOutlined style={{color:'green'}}/>
                        </Space>
        },
    ];

    const [locationForms, setLocationSubmits] = useState([]);
    const [fetching, setFetching] = useState(true);

    const handleDelete = (record) => {
        if(window.confirm('Are you sure?'))
        {
            console.log(record.locationFormId);
            axios.delete('api/locationforms/' + record.locationFormId
        ).then(res => {
            console.log(res);
            });
            window.location.reload()
        }
    }

    const getLocationForms = () =>
        axios.get("api/locationforms")
            .then(res => {
                console.log(res);
                setLocationSubmits(res.data);
                setFetching(false);
            })

    useEffect(() => {
        console.log("component is mounted");
        getLocationForms().then();
    }, []);

    const renderLocationForms = () => {
        if(fetching){
            return <Spin indicator={antIcon} />
        }
        if(locationForms.length <= 0){
            return <Empty />;
        }
        return <Table
            dataSource={locationForms}
            columns={columns}
            bordered
            title={() => 'Submitted location forms:'}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            rowKey = {(locationForms) => locationForms.key}
        />;

    }
    return (
        <Sidebar data={
            <div>
                {renderLocationForms()}
            </div>
        }/>
    );
}