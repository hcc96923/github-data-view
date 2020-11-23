import React, { useEffect }from 'react';
import { PropTypes } from 'prop-types';
import Echarts from 'echarts';
import { throttle } from '@/utils/optimize';


function Chart(props) {
    const { chartId, chartHeight, chartOptions } = props;
    useEffect(() => {
        const chart = Echarts.init(document.getElementById(chartId));
        const initChart = () => {
            chart.showLoading({ color: '#5FB878'});
            chart.setOption(chartOptions);
            chart.hideLoading({ color: '#5FB878'});
        };
        const resizeChart = () => {
            throttle(chart.resize.bind(this), 500)();
        };
        // 初始化图表
        initChart();
        // 注册监听resize的事件
        window.addEventListener('resize', () => resizeChart());
        // 取消注册的监听事件
        return () => {
            window.removeEventListener('resize', () => resizeChart());
        };
    });
    return (
        <div id={chartId} style={{height: chartHeight}}></div>
    )
};
PropTypes.propTypes = {
    chartId: PropTypes.string.isRequired,
    chartHeight: PropTypes.string.isRequired,
    chartOptions: PropTypes.object.isRequired
};
export default Chart;