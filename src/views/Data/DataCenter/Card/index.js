import React from 'react';
import { 
    BankOutlined, 
    EyeInvisibleOutlined,
    HeartOutlined, 
    UserOutlined 
} from '@ant-design/icons';
import './style.less';

function Card() {
    return (
        <div className="card">
            <div className="card_item">
                <section className="card_item_left">
                    <BankOutlined />
                </section>
                <section className="card_item_right">
                    <span className="card_item_title">公开仓库</span>
                    <span className="card_item_count">7</span>
                </section>
            </div>
            <div className="card_item">
                <section className="card_item_left">
                    <EyeInvisibleOutlined />
                </section>
                <section className="card_item_right">
                    <span className="card_item_title">私有仓库</span>
                    <span className="card_item_count">1</span>
                </section>
            </div>
            <div className="card_item">
                <section className="card_item_left">
                    <HeartOutlined />
                </section>
                <section className="card_item_right">
                    <span className="card_item_title">粉丝数量</span>
                    <span className="card_item_count">1</span>
                </section>
            </div>
            <div className="card_item">
                <section className="card_item_left">
                    <UserOutlined />
                </section>
                <section className="card_item_right">
                    <span className="card_item_title">跟随数量</span>
                    <span className="card_item_count">12</span>
                </section>
            </div>
        </div>
    )
}
export default Card;