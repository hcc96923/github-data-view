import React from 'react';
import './style.less';

function DataBox(props) {
    console.log(props);
    return (
        <div className="data-box" style={{height: props.height}}>
            {/* 左上边框 */}
            <div className="line-box">
                <i className="t-l-line"></i>
                <i className="l-t-line"></i>
            </div>
            {/* 右上边框 */}
            <div className="line-box">
                <i className="t-r-line"></i>
                <i className="r-t-line"></i>
            </div>
            {/* 左下边框 */}
            <div className="line-box">
                <i className="l-b-line"></i>
                <i className="b-l-line"></i>
            </div>
            {/* 右下边框 */}
            <div className="line-box">
                <i className="r-b-line"></i>
                <i className="b-r-line"></i>
            </div>
            {/* 仓库标题 */}
            <div className="in-title">{props.title}</div>
            {/* 未知 */}
            <div className="chart">
            </div>
        </div>
    )
}

export default DataBox;