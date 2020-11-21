import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Echarts from 'echarts';
import { debounce } from '@/utils/optimize';


class Chart extends Component {
    state = { chart: null };
    static propTypes = {
        chartId: PropTypes.string.isRequired,
        chartHeight: PropTypes.string.isRequired,
        chartOptions: PropTypes.object.isRequired,
    };
    static defaultProps = {
		chartId: 'chartId',
		chartHeight: '280px',
		chartOptions: {}
	};
    initChart = () => {
		this.setState(
			{
				chart: Echarts.init(document.getElementById(this.props.chartId))
			},
			() => {
                this.state.chart.showLoading({ color: '#5FB878'});
                this.state.chart.setOption(this.props.chartOptions);
                this.state.chart.hideLoading();
			}
		);
    };
    resize = () => {
        const chart = this.state.chart;
        if (chart) {
            debounce(chart.resize.bind(this), 500)();
        };
    };
    dispose = () => {
		if (!this.state.chart) return null;
		window.removeEventListener('resize', () => this.resize()); // 移除窗口，变化时重置图表
		this.setState({ chart: null });
    };
    componentDidMount() {
        debounce(this.initChart.bind(this), 500)(); //初始化图表
        window.addEventListener('resize', () => this.resize()); // 监听窗口，变化时重置图表
    };
    componentWillUnmount() {
		this.dispose();
	};
    render() { 
        return (  
            <div id={this.props.chartId} style={{height: this.props.chartHeight}}></div>
        );
    };
};
export default Chart;