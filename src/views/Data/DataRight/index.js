import React from 'react';
import DataBox from '@/components/DataBox/index';
import StarFollow from './StarFollow/index';
import RecentOperation from './RecentOperation/index';
import './style.less';


function DataRight(props) {
    const { username } = props;
    return (
        <div className="data-right">
            {/* star与follow */}
            <DataBox height="400px">
                <StarFollow username={username}></StarFollow>
            </DataBox>
            {/* 最近的操作 */}
            <DataBox height="400px">
                <RecentOperation username={username}></RecentOperation>
            </DataBox>
        </div>
    )
};
export default DataRight;