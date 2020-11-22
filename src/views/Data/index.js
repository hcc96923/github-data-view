import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import DataHeader from './DataHeader/index';
import DataLeft from './DataLeft/index';
import DataCenter from './DataCenter/index';
import DataRight from './DataRight/index';
import './style.less';


function Data(props) {
    const { params } = props.match;
    return (
        <div className="data">
            {/* 头部 */}
            <DataHeader></DataHeader>
            {/* 内容 */}
            <div className="content">
                {/* 左侧 */}
                <div className="left">
                    <DataLeft
                        username={params.username}>
                    </DataLeft>
                </div>
                {/* 中心 */}
                <div className="center">
                    <DataCenter
                        username={params.username}>
                    </DataCenter>
                </div>
                {/* 右侧 */}
                <div className="right">
                    <DataRight
                        username={params.username}>
                    </DataRight>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Data);