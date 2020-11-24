import React, { useState, useEffect } from 'react';
import { Spin, Avatar } from 'antd';
import Axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import { ACCESS_TOKEN } from '@/utils/config';
import DataBox from '@/components/DataBox/index';
import './style.less';


function StarFollow(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        const handleRequestFollow = (username) => {
            setLoading(true);
            const params = { access_token: ACCESS_TOKEN };
            Axios.get(`/api/users/${username}/followers`, { params })
                .then(response => {
                    const { status, data } = response;
                    if (status === 200) {
                        setData(data);
                    } 
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        handleRequestFollow(username);
    }, [username]);
    console.log(data);
    return (
        <div className="star-follow">
            <DataBox height="200px" fontSize="16px" title="新增粉丝">
                <ul className="star">
                    {

                    }
                    <li></li>
                </ul>
            </DataBox>
            <DataBox height="200px" fontSize="16px" title="最近跟随">
                <ul className="follow">
                    <li></li>
                </ul>
            </DataBox>
        </div>
    )
};
export default StarFollow;