import React from 'react';
import Chart from '@/components/Chart/index';


const chartOptions = {
	title: {
		top: 30,
		text: '仓库star统计',
		textStyle: {
			fontWeight: 'bold',
			fontSize: 30,
			color: '#1DA57A'
		},
		left: 'center'
	},
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	color: ['#0122269', '#1890FF', '#1b9436', '#456789', '#1DA57A'],
	series: [
		{
			name: '仓库star统计',
			type: 'pie',
			radius: '50%',
			center: ['50%', '60%'],
			data: [
				{ value: 100, name: 'Vue' }, 
				{ value: 50, name: 'CSS' }, 
				{ value: 224, name: 'JavaScript' }, 
				{ value: 60, name: 'HTML' }, 
				{ value: 800, name: 'React' }
			],
			emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
		}
	]
};
function Star() {
    return (
        <Chart chartId={"star"} chartHeight="320px" chartOptions={chartOptions}/>
    );
};
export default Star;