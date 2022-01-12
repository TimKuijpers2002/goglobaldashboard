import React from 'react'
import Text from "antd/es/typography/Text";
import {Tag} from "antd";

export default function LocationFormColumns(){

    const staticWidth = "auto"
    return [
        {
            title: 'Id',
            dataIndex: 'locationId',
            key: 'locationId',
            width: "auto",
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
            title: 'General Content',
            dataIndex: 'generalContent',
            key: 'generalContent',
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
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
            width: staticWidth,
            render: text => <Text>{text}</Text>,
        },
    ];

}