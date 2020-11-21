import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Axios from "axios";
import { ACCESS_TOKEN } from '@/utils/config';
import BackGroundImage from "@/components/BackGroundImage/index";
import Particle from "@/components/Particle/index";
import './style.less';


class Home extends Component {
    state = {};
    handleRequestGithub = () => {
        const params = { access_token: ACCESS_TOKEN };
        Axios.get('/api/users/hcc96923', { params })
            .then(response => {
                const { data } = response;
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() { 
        return (  
            <div className="home">
                {/* 背景图片 */}
                <BackGroundImage></BackGroundImage>
                {/* 粒子特效 */}
                <Particle></Particle>
                {/* <Button onClick={this.handleRequestGithub}>请求</Button> */}
            </div>
        );
    }
}

export default Home;