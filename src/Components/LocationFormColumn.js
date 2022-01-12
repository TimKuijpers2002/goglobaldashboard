import React from 'react'
import Text from "antd/es/typography/Text";
import {Space,Tag} from "antd";
import {CheckSquareOutlined, DeleteOutlined} from "@ant-design/icons";

export default function LocationFormColumns(handleDelete, handleAccept){

    const staticWidth = "auto"
    return [
        {
            title: 'Id',
            dataIndex: 'locationFormId',
            key: 'locationFormId',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Submitter',
            dataIndex: ['baseForm', 'nameSubmitter'],
            key:'nameSubmitter',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Email submitter',
            dataIndex: ['baseForm', 'emailSubmitter'],
            key:'emailSubmitter',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title:'Content',
            dataIndex: ['baseForm', 'formContent'],
            key:'formContent',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Longitude',
            dataIndex: 'longitude',
            key: 'longitude',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Latitude',
            dataIndex: 'latitude',
            key: 'latitude',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Facilities',
            dataIndex: 'facilities',
            key: 'facilities',
            width: staticWidth,
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
            width: staticWidth,
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
            width: staticWidth,
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
            width: staticWidth,
    
            render: (record) =>
                        <Space size={"middle"}>
                        <DeleteOutlined style={{color:'red'}} onClick={()=> {
                            handleDelete(record);
                        }}/>
                        <CheckSquareOutlined style={{color:'green'}} onClick={()=> {
                            handleAccept(record);
                            }}/>
                        </Space>
        },
    ];

}