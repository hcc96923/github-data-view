import React from 'react';
import DataBox from '@/components/DataBox/index';
import Person from './Person/index';
import './style.less';

function DataLeft() {
    return (
        <div className="data-left">
            <div className="left-box">
                {/* 个人信息 */}
                <Person
                    userName={'韩畅畅'}
                    personData={[]}>
                </Person>
                {/* 仓库star */}
                <DataBox height="280px" title="仓库star数据" />
                
                {/* 仓库语言 */}
                <DataBox height="280px" title="仓库语言数据" />
            </div>
        </div>
    )
}

export default DataLeft;