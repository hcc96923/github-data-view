import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, message } from 'antd';
import Axios from "axios";
import { ACCESS_TOKEN } from '@/utils/config';
import BackGroundImage from "@/components/BackGroundImage/index";
import Particle from "@/components/Particle/index";
import './style.less';


class Home extends Component {
    state = {
        loading: false
    };
    handleRequestGithub = (value="hcc96923") => {
        this.setState({ loading: true });

        const params = { access_token: ACCESS_TOKEN };
        Axios.get(`/api/users/${value}`, { params })
            .then(response => {
                const { status, data } = response;
                if (status === 200) {
                    message.success('Success');
                    console.log(data);
                } else {
                    message.error('Error');
                }
                this.setState({ loading: false });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() { 
        const { loading } = this.state;
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
                <div className="search_form">
                    <Input.Search 
                        size="large"
                        enterButton
                        loading={loading} 
                        placeholder="输入用户名生成你的GitHub数据"
                        onSearch={this.handleRequestGithub}>
                    </Input.Search>
                </div>
            </div>
        );
    }
}

export default Home;