import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { 
    BankOutlined, 
    EyeInvisibleOutlined,
    HeartOutlined, 
    UserOutlined 
} from '@ant-design/icons';
import Axios from 'axios';
import { ACCESS_TOKEN } from '@/utils/config';
import './style.less';


function Card(props) {
    const { username } = props;
    const [loading, setLoading] = useState(false);
    const [personData, setPersonData] = useState({});
    useEffect(() => {
        const handleRequestPerson = (username) => {
            setLoading(true);
            const params = { access_token: ACCESS_TOKEN };
            Axios.get(`/api/users/${username}`, { params })
                .then(response => {
                    const { status, data } = response;
                    if (status === 200) {
                        setPersonData(data);
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
            size="small"
            tip="Loading..."
            spinning={loading}>
            <div className="card">
                <div className="card-item">
                    <section className="item-left">
                        <BankOutlined />
                    </section>
                    <section className="item-right">
                        <span className="item-title">公开仓库</span>
                        <span className="item-count">{personData.public_repos ? personData.public_repos : 0}</span>
                    </section>
                </div>
                <div className="card-item">
                    <section className="item-left">
                        <EyeInvisibleOutlined />
                    </section>
                    <section className="item-right">
                        <span className="item-title">私有仓库</span>
                        <span className="item-count">{personData.owned_private_repos}</span>
                    </section>
                </div>
                <div className="card-item">
                    <section className="item-left">
                        <HeartOutlined />
                    </section>
                    <section className="item-right">
                        <span className="item-title">粉丝数量</span>
                        <span className="item-count">{personData.followers}</span>
                    </section>
                </div>
                <div className="card-item">
                    <section className="item-left">
                        <UserOutlined />
                    </section>
                    <section className="item-right">
                        <span className="item-title">跟随数量</span>
                        <span className="item-count">{personData.following}</span>
                    </section>
                </div>
            </div>
        </Spin>
        
    )
};
export default Card;