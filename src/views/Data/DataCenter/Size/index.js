import React from 'react';
import Chart from '@/components/Chart/index';


const chartOptions = {
    // 标题
    title: {
        top: 20,
        bottom: 20,
		text: '仓库size统计',
		textStyle: {
			fontWeight: 'bold',
			fontSize: 30,
			color: '#1DA57A'
        },
		left: 'center'
    },
    // 文字提示
    tooltip: {
        trigger: 'axis'
    },
    // x轴
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                lineStyle: {
                    color: '#009688',
                    width: 1
                }
            },
			axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: 14
                }
			}
        },
        
    ],
    // y轴
    yAxis: [
        {
            type: 'value',
            name: '空间大小',
            nameTextStyle: {
                color: '#1DA57A',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
            axisLine: {
                lineStyle: {
                    color: '#009688',
                    width: 1
                }
            },
			axisLabel: {
                color: '#fff',
                formatter: '{value} MB',
                textStyle: {
                    fontSize: 14
                }
			}
        }
    ],
    dataZoom: [
		{
			show: true,
			height: 30,
			xAxisIndex: [0],
			bottom: 30,
			start: 10,
			end: 80,
			handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
			handleSize: '110%',
			handleStyle: {
				color: '#d3dee5'
			},
			textStyle: {
				color: '#fff'
			},
			borderColor: '#90979c'
		},
		{
			type: 'inside',
			show: true,
			height: 15,
			start: 1,
			end: 35
		}
	],
    series: [
        {
            name: '占用空间',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            }
        }
    ]
};
function Size() {
    return (
        <Chart chartId={"size"} chartHeight="360px" chartOptions={chartOptions}></Chart>
    );
};
export default Size;