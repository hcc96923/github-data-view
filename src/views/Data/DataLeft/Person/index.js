import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './style.less';


function Person() {
    return (
        <div className="person">
            <div className="profile">
                <div>
                    <Avatar src="" size={100} icon={<UserOutlined />} />
                </div>
                <div className="join">
                    <h1>hcc96923</h1>
                    <h2>2019-08-13</h2>
                    <h3>加入GitHub</h3>
                </div>
            </div>

            <div className="basic">
                <p className="bio">弱小的人才习惯嘲讽与否定，内心强大的人从不吝啬赞美与鼓励。</p>
                <p className="company">ByteDance</p>
                <p className="blog">https://github.com/hcc96923</p>
                <p className="email">hcc96923@gmail.com</p>
                <p className="address">中国 河南省</p>
            </div>
        </div>
    )
}

export default Person;