import React from 'react';
import DataBox from '@/components/DataBox/index';
import Person from './Person/index';
import Classify from './Classify/index';
import './style.less';


function DataLeft(props) {
    const { username } = props;
    return (
        <div className="data_left">
            {/* 个人信息 */}
            <DataBox height="360px">
                <Person
                    username={username}>
                </Person>
            </DataBox>
            {/* 仓库star */}
            <DataBox height="420px" title="仓库语言分类">
                <Classify
                    username={username}>
                </Classify>
            </DataBox>
        </div>
    )
}

export default DataLeft;