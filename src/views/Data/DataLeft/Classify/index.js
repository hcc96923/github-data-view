import React, { useState, useEffect} from 'react';
import { Spin } from 'antd';
import Axios from 'axios';
import Chart from '@/components/Chart';
import { ACCESS_TOKEN } from '@/utils/config';


function Classify(props) {
	const { username } = props;
	const [loading, setLoading] = useState(false);
	const [languageType, setLanguageType] = useState({});
	const [languageTypeValue, setLanguageTypeValue] = useState({});
	const chartOptions = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		color: ['#469F4B', '#1DA57A', ' #096DD9', '#FFC530', '#15698A'],
		legend: {
			orient: 'vertical',
			x: 15,
			data: languageType,
			top: 24,
			bottom: 24,
			textStyle: {
				color: '#fff'
			}
		},
		series: [
			{
				name: '语言分类',
				type: 'pie',
				radius: '50%',
				center: ['50%', '75%'],
				data: languageTypeValue,
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
	const handleResolveLanguage = (data) => {
		const languages = data.map(item => item.language).filter(Boolean);
		// 语言的种类
		const formatLanguages = [...new Set(languages)]
		setLanguageType(formatLanguages);
		// 初始化每种语言的数量
		const languageTypeCount = formatLanguages.map(item => {
			return { name: item, value: 0 };
		});
		// 计算每种语言的数量
		for (let index = 0; index < languages.length; index++) {
			languageTypeCount.forEach(item => {
				if (languages[index] === item.name) {
					item.value++;
				}
			});
		}
		setLanguageTypeValue(languageTypeCount);
	};
	useEffect(() => {
		const handleRequestLanguage = (username) => {
			setLoading(true);
			const params = { access_token: ACCESS_TOKEN };
			Axios.get(`/api/users/${username}/repos`, { params })
				.then(response => {
					const { status, data } = response;
					if (status === 200) {
						handleResolveLanguage(data);
					} 
					setLoading(false);
				})
				.catch(error => {
					console.log(error);
				});
		};
		handleRequestLanguage(username);
	}, [username]);
    return (
		<Spin
			size="large"
			tip="Loading..."
			spinning={loading}>
			<Chart
				chartId={"classify"}
				chartHeight="420px"
				chartOptions={chartOptions}>
			</Chart>
		</Spin>
    );
};
export default Classify;