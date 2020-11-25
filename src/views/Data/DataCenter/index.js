import React from 'react';
import Card from './Card/index';
import Star from './Star/index';
import Size from './Size/index';


function DataCenter(props) {
    const { username } = props;
    return (
        <div>
            <Card
                username={username}>
            </Card>
            <Star
                username={username}>
            </Star>
            <Size
                username={username}>
            </Size>
        </div>
    )
};
export default DataCenter;