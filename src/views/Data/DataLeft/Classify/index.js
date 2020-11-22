import React from 'react';
import Chart from '@/components/Chart';


const chartOptions = {
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	color: ['#001369', '#1890FF', '#1b9436', '#751313', '#1DA57A'],
	legend: {
		orient: 'vertical',
		x: 15,
		data: ['Vue', 'CSS', 'JavaScript', 'HTML', 'React'],
        top: 20,
        textStyle: {
			color: '#fff'
		}
	},
	series: [
		{
			name: '语言分类',
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
function Classify() {
    return (
        <Chart chartId={"classify"} chartHeight="280px" chartOptions={chartOptions}/>
    );
};
export default Classify;