import React from 'react';
import DataBox from '@/components/DataBox/index';
import Person from './Person/index';
import Classify from './Classify/index';
import './style.less';



function DataLeft() {
    return (
        <div className="data-left">
            {/* 个人信息 */}
            <DataBox height="360px">
                <Person></Person>
            </DataBox>
            
            {/* 仓库star */}
            <DataBox height="360px" title="仓库语言分类">
                <Classify></Classify>
            </DataBox>
        </div>
    )
}

export default DataLeft;