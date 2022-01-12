import React, {useEffect, useState} from "react";
import {Sidebar} from "../Components/Sidebar";
import {LoadingOutlined} from "@ant-design/icons";
import axios from 'axios';
import {Empty, Spin, Table} from "antd";
import LocationColumns from "../Components/LocationColumn"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Location() {
    const [locations, setLocations] = useState([]);
    const [fetching, setFetching] = useState(true);

    const fetchLocations = () =>
        axios.get("api/locations")
            .then(res => {
                console.log(res);
                setLocations(res.data);
                setFetching(false);
            })

    useEffect(() => {
        console.log("component is mounted");
        fetchLocations().then(r => console.log(r));
    }, []);

    const renderLocations = () => {
        if(fetching){
            return <Spin indicator={antIcon} />
        }
        if(locations.length <= 0){
            return <Empty />;
        }
        return <Table
            dataSource={locations}
            columns={LocationColumns()}
            bordered
            title={() => 'Locations'}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
            rowKey = {(location) => location.id}
        />;

    }
    return (
        <Sidebar data={
            <div>
                {renderLocations()}
            </div>
        }/>
    );
}