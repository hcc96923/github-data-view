import React, { useState, useEffect }from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import Chart from '@/components/Chart/index';
import { ACCESS_TOKEN } from '@/utils/config';


function Star(props) {
	const { username } = props;
	const [loading, setLoading] = useState(false);
	const [starData, setStarData] = useState([]);
	const chartOptions = {
		title: {
			top: 20,
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
		color: ['#469F4B', '#1DA57A', ' #096DD9', '#FFC530', '#15698A'],
		series: [
			{
				name: '仓库star统计',
				type: 'pie',
				radius: '50%',
				center: ['50%', '60%'],
				data: starData,
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
	useEffect(() => {
		const handleRequestStar = (username) => {
			setLoading(true);
			const params = { access_token: ACCESS_TOKEN };
			Axios.get(`/api/users/${username}/repos`, { params })
				.then(response => {
					const { status, data } = response;
					if (status === 200) {
						const resolveData = data.map(item => {
							return { name: item.name, value: item.watchers_count };
						});
						setStarData(resolveData);
					}
					setLoading(false);
				})
				.catch(error => {
					console.log(error);
				});
		};
		handleRequestStar(username);
	}, [username]);
    return (
		<Spin
			size="large"
			tip="Loading..."
			spinning={loading}>
			<Chart chartId={"star"} chartHeight="400px" chartOptions={chartOptions}/>
		</Spin>
    );
};
export default Star;