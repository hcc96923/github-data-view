import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Axios from "axios";
import { ACCESS_TOKEN } from '@/utils/config';


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
            <Card>
                <Button onClick={this.handleRequestGithub}>请求</Button>
            </Card>
        );
    }
}

export default Home;