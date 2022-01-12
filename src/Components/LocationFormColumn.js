import React from 'react'
import {Space} from "antd";
import Text from "antd/es/typography/Text";
import {CheckSquareOutlined, DeleteOutlined} from "@ant-design/icons";
import LocationColumn from "../Components/LocationColumn"

export default function LocationFormColumns(handleDelete, handleAccept){

    const staticWidth = "auto"
    const baseForm = [
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
    ];

    const locationFormWithContent = LocationColumn();
    function isNotContent(value) {
        return value !== 'General Content' 
      }

    function isNotLikes(value) {
        return value !== 'Likes' 
      }
      
    const locationFormWithLikes = locationFormWithContent.filter((a)=> isNotContent(a.title));
    const locationForm = locationFormWithLikes.filter((a)=> isNotLikes(a.title));

    const actions = [
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

    const halfList = baseForm.concat(locationForm)
    const fullList = halfList.concat(actions)
    console.log(fullList);
    return fullList;

}