import React from 'react';
import { BankOutlined } from '@ant-design/icons';
import './style.less';

function Card() {
    return (
        <div className="card">
            <div className="card_item">
                <section className="card_item_left">
                    <BankOutlined />
                </section>
                <section className="card_item_right">
                    <span className="card_item_title">公开仓库数</span>
                    <span className="card_item_count">7</span>
                </section>
            </div>
            <div className="card_item">

            </div>
            <div className="card_item">

            </div>
            <div className="card_item">

            </div>
        </div>
    )
}
export default Card;