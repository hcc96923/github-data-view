import React from 'react';
import { Card } from 'antd';
import { BarChartOutlined } from '@ant-design/icons'


function DataContent() {
    return (
        <div className="data-content">
            <div className="left">
                <Card title="公开仓库数">
                    <BarChartOutlined />
                </Card>
            </div>
            <div className="right">
                <Card title="粉丝">
                    <BarChartOutlined />
                </Card>
                <Card title="跟随">
                    <BarChartOutlined />
                </Card>
            </div>
        </div>
    )
}

export default DataContent;