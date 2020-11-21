import React, { Component } from 'react';
import DataHeader from './DataHeader/index';
import DataLeft from './DataLeft/index';
import DataContent from './DataContent/index';
import DataRight from './DataRight/index';
import './style.less';

class Data extends Component {
    state = {  };
    render() { 
        return (  
            <div className="data-page">
                {/* 头部 */}
                <DataHeader></DataHeader>
                {/* 内容 */}
                <div className="data-content">
                    {/* 数据 */}
                    <div className="data-main">
                        {/* 左侧 */}
                        <div className="main-left">
                            <DataLeft></DataLeft>
                        </div>
                        {/* 中心 */}
                        <div className="main-center">
                            <DataContent></DataContent>
                        </div>
                        {/* 右侧 */}
                        <div className="main-right">
                            <DataRight></DataRight>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Data;