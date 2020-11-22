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
    useEffect(() => {
        handleRequestPerson(username);
    }, [username]); // 只有当useEffect依赖的值改变了才会重新触发函数
    return (
        <Spin
            size="small"
            tip="Loading..."
            spinning={loading}>
            <div className="card">
                <div className="card_item">
                    <section className="card_item_left">
                        <BankOutlined />
                    </section>
                    <section className="card_item_right">
                        <span className="card_item_title">公开仓库</span>
                        <span className="card_item_count">{personData.public_repos ? personData.public_repos : 0}</span>
                    </section>
                </div>
                <div className="card_item">
                    <section className="card_item_left">
                        <EyeInvisibleOutlined />
                    </section>
                    <section className="card_item_right">
                        <span className="card_item_title">私有仓库</span>
                        <span className="card_item_count">{personData.owned_private_repos}</span>
                    </section>
                </div>
                <div className="card_item">
                    <section className="card_item_left">
                        <HeartOutlined />
                    </section>
                    <section className="card_item_right">
                        <span className="card_item_title">粉丝数量</span>
                        <span className="card_item_count">{personData.followers}</span>
                    </section>
                </div>
                <div className="card_item">
                    <section className="card_item_left">
                        <UserOutlined />
                    </section>
                    <section className="card_item_right">
                        <span className="card_item_title">跟随数量</span>
                        <span className="card_item_count">{personData.following}</span>
                    </section>
                </div>
            </div>
        </Spin>
        
    )
}
export default Card;