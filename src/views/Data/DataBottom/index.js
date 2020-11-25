import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import { ACCESS_TOKEN } from '@/utils/config';
import './style.less';


function RecentOperation(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(false);
    const handleResolveReceviedEvents = (data) => {

    };
    useEffect(() => {
        const params = { access_token: ACCESS_TOKEN };
        const handleRequestReceviedEvents = (username) => {
            setLoading(true);
            Axios.get(`/api/users/${username}/received_events`, { params })
                .then(response => {
                    const { status, data } = response;
                    if (status === 200) {
                        console.log(data);
                        // handleResolveFollowers(data);
                    } 
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        handleRequestReceviedEvents(username);
    }, [username]);
    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={loading}>
                <div className="recent-operation">
                    recent-operation
                </div>
        </Spin>
    )
};
export default RecentOperation;