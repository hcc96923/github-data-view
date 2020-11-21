import React from 'react';
import './style.less';


function Person() {
    return (
        <div className="personal-box">
            <div className="personal-body">
            <div className="left">
                <div className="img">
                    <img />
                </div>
            </div>
            <div className="right">
                <div className="name">hcc96923</div>

                <div className="year">
                <a className="date">2020-11-21</a>
                <a className="time">加入github</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Person;