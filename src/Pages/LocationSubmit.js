import React, {useEffect, useState} from "react";
import {Sidebar} from "../Components/Sidebar";
import axios from "axios";
import {Empty, Spin, Table} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import LocationFormColumns from "../Components/LocationFormColumn"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
export default function LocationSubmit() {

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

    const handleAccept = (record) => {
        if(window.confirm('Are you sure?'))
        {
            console.log(record);
            axios.post('api/locationformaccepted', record
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
            columns={LocationFormColumns(handleDelete, handleAccept)}
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