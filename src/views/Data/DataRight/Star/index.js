import React, { useState, useEffect } from 'react';
import { Spin, Avatar } from 'antd';
import Axios from 'axios';
import { ACCESS_TOKEN } from '@/utils/config';
import './style.less';


function Star(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [followersData, setFollowersData] = useState([]);
    const handleResolveFollowers = (data) => {
        const followers = data.map(user => {
            return { id: user.id, avatar: user.avatar_url, username: user.login };
        });
        const followersData = followers.splice(0, 20);
        setFollowersData(followersData);
    };
    useEffect(() => {
        const params = { access_token: ACCESS_TOKEN };
        const handleRequestFollowers = (username) => {
            setLoading(true);
            Axios.get(`/api/users/${username}/followers`, { params })
                .then(response => {
                    const { status, data } = response;
                    if (status === 200) {
                        handleResolveFollowers(data);
                    } 
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        handleRequestFollowers(username);
    }, [username]);
    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={loading}>
            <ul className="star">
                {  
                    followersData.map(item => {
                        return (
                            <li key={item.id} className="star-item">
                                <Avatar src={item.avatar} size={50} />
                                <span className="username">{item.username}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </Spin>
    )
};
export default Star;