import React, { useState, useEffect } from 'react';
import { Spin, Avatar } from 'antd';
import Axios from 'axios';
import { ACCESS_TOKEN } from '@/utils/config';
import './style.less';


function StarFollow(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [followingData, setFollowingData] = useState([]);
    const handleResolveFollowing = (data) => {
        const following = data.map(user => {
            return { id: user.id, avatar: user.avatar_url, username: user.login };
        });
        const followingData = following.splice(0, 20);
        setFollowingData(followingData);
    };
    useEffect(() => {
        const params = { access_token: ACCESS_TOKEN };
        const handleRequestFollowing = (username) => {
            setLoading(true);
            Axios.get(`/api/users/${username}/following`, { params })
                .then(response => {
                    const { status, data } = response;
                    if (status === 200) {
                        handleResolveFollowing(data);
                    } 
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        handleRequestFollowing(username);
    }, [username]);
    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={loading}>
            <ul className="follow">
                {  
                    followingData.map(item => {
                        return (
                            <li key={item.id} className="follow-item">
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
export default StarFollow;