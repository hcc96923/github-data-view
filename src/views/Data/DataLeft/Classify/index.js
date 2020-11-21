import React from 'react';
import Chart from '@/components/Chart';


const chartOptions = {
	title: {
		top: 30,
		text: '饼图',
		textStyle: {
			fontWeight: 'normal',
			fontSize: 16,
			color: '#1DA57A'
		},
		left: 'center'
	},
	color: ['#001369', '#1890FF', '#1b9436', '#751313', '#1DA57A'],
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	// legend: {
	// 	orient: 'vertical',
	// 	x: 20,
	// 	data: ['电费', '水费', '物业费', '管理费', '停车费'],
    //     top: 20,
    //     textStyle: {
	// 		fontWeight: 'normal',
	// 		fontSize: 16,
	// 		color: '#fff'
	// 	}
	// },
	series: [
		{
			name: '语言分类',
			type: 'pie',
			radius: '50%',
			center: ['50%', '60%'],
			data: [{ value: 100, name: 'Vue' }, { value: 50, name: 'CSS' }, { value: 224, name: 'JavaScript' }, { value: 60, name: 'HTML' }, { value: 800, name: 'React' }]
		}
	]
};
function Classify() {
    return (
        <Chart chartId={"classify"} chartOptions={chartOptions}/>
    );
};
export default Classify;