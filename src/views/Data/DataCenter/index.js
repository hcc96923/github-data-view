import React from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import Card from './Card/index';
import Star from './Star/index';


function DataCenter() {
    return (
        <div className="data_center">
            <div className="top_card">
                <Card></Card>
            </div>
            <div className="star">
                <Star></Star>
            </div>
        </div>
    )
}

export default DataCenter;