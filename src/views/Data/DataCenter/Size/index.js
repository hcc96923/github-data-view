import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import Chart from '@/components/Chart/index';
import { ACCESS_TOKEN } from '@/utils/config';


function Size(props) {
    const { username } = props;
	const [loading, setLoading] = useState(false);
	const [nameData, setNameData] = useState([]);
    const [sizeData, setSizeData] = useState([]);
	const chartOptions = {
        title: {
            top: 30,
            text: '仓库size统计',
            textStyle: {
                fontWeight: 'bold',
                fontSize: 30,
                color: '#1DA57A'
            },
            left: '100'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [
            {
                type: 'category',
                data: nameData,
                axisLine: {
                    lineStyle: {
                        color: '#000B2D',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#1DA57A',
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#1DA57A',
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
                    color: '#FFFFFF'
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
                data: sizeData,
                itemStyle: {
					normal: {
						color: '#4788FB',
						label: {
							show: true,
							position: 'top',
							formatter: '{c} MB'
						}
					}
				},
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            }
        ]
    };
	useEffect(() => {
        const handleRequestSize = (username) => {
            setLoading(true);
            const params = { access_token: ACCESS_TOKEN };
            Axios.get(`/api/users/${username}/repos`, { params })
                .then(async response => {
                    const { status, data } = response;
                    if (status === 200) {
                        const resolveName = data.map(item => item.name);
                        setNameData(resolveName);
                        const resolveSize = data.map(item => (item.size/1024).toFixed(2));
                        setSizeData(resolveSize);
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                });
        };
		handleRequestSize(username);
	}, [username]);
    return (
        <Spin
            size="large"
            tip="Loading..."
            spinning={loading}>
            <Chart chartId={"size"} chartHeight="400px" chartOptions={chartOptions}></Chart>
        </Spin>
    );
};
export default Size;