import React from 'react';
import Card from './Card/index';
import Star from './Star/index';
import Size from './Size/index';


function DataCenter(props) {
    const { username } = props;
    return (
        <div className="data-center">
            <div className="top-card">
                <Card
                    username={username}>
                </Card>
            </div>
            <div className="star">
                <Star
                    username={username}>
                </Star>
            </div>
            <div className="size">
                <Size
                    username={username}>
                </Size>
            </div>
        </div>
    )
};
export default DataCenter;