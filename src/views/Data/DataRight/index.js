import React from 'react';
import DataBox from '@/components/DataBox/index';
import Star from './Star/index';
import Follow from './Follow/index';
import './style.less';


function DataRight(props) {
    const { username } = props;
    return (
        <div className="data-right">
            {/* star */}
            <DataBox height="400px" fontSize="18px" title="新增粉丝">
                <Star username={username}></Star>
            </DataBox>
            {/* follow  */}
            <DataBox height="400px" fontSize="18px" title="最近跟随">
                <Follow username={username}></Follow>
            </DataBox>
        </div>
    )
};
export default DataRight;