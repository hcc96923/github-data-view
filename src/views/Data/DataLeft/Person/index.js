import React, { useState, useEffect } from 'react';
import { Spin, Avatar } from 'antd';
import Axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import { ACCESS_TOKEN } from '@/utils/config';
import { formatTime } from '@/utils/format';
import './style.less';


function Person(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        const handleRequestPerson = (username) => {
            setLoading(true);
            const params = { access_token: ACCESS_TOKEN };
            Axios.get(`/api/users/${username}`, { params })
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
        handleRequestPerson(username);
    }, [username]);
    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={loading}>
            <div className="person">
                <div className="profile">
                    <div className="avatar">
                        <Avatar src={data.avatar_url} size={80} icon={<UserOutlined />} />
                    </div>
                    <div className="join">
                        <h1>{data.login}</h1>
                        <h2>{data.created_at ? formatTime({time: data.created_at, type: 'short'}) : data.created_at}</h2>
                        <h3>加入GitHub</h3>
                    </div>
                </div>
                <div className="basic">
                    <p className="bio">{data.bio ? data.bio : "bio"}</p>
                    <p className="company">{data.company ? data.company : "Google"}</p>
                    <p className="blog">{data.blog ? data.blog : data.html_url}</p>
                    <p className="email">{data.email ? data.email : "email"}</p>
                    <p className="address">{data.location ? data.location : "location"}</p>
                </div>
            </div>
        </Spin>
    )
};
export default Person;