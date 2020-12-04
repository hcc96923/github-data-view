import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, message } from 'antd';
import Axios from "axios";
import { ACCESS_TOKEN } from '@/utils/config';
import BackGroundImage from "@/components/BackGroundImage/index";
import Particle from "@/components/Particle/index";
import './style.less';
import { useEffect } from 'react';


function Home(props){
    const [loading, setLoading] = useState(false);
    const ref = useRef(false); 
    const handleRequestGithub = (value) => {
        setLoading(true);
        const params = { access_token: ACCESS_TOKEN };
        Axios.get(`/api/users/${value}`, { params })
            .then(response => {
                const { status } = response;
                if (status === 200) {
                    message.success('Success');
                    props.history.push(`/data/${value}`);
                } else {
                    message.error('Error');
                }
                if (ref.current) {
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
    useEffect(() => {
        ref.current = true;
        return () => { ref.current = false };
    });
    return (
        <div className="home">
            {/* 背景图片 */}
            <BackGroundImage></BackGroundImage>
            {/* 粒子特效 */}
            <Particle></Particle>
            {/* 标题 */}
            <div className="title">
                <h1>GitHub-Data-View</h1>
            </div>
            {/* 搜索 */}
            <div className="search-form">
                <Input.Search 
                    size="large"
                    enterButton
                    loading={loading} 
                    defaultValue="yyx990803"
                    placeholder="输入用户名生成你的GitHub数据"
                    onSearch={handleRequestGithub}>
                </Input.Search>
            </div>
        </div>
    )
};
export default withRouter(Home);
