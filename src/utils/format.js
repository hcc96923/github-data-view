/* 
    formatTime
    格式化时间
*/
export const formatTime = (params) => {
    const { time, type } = params;
    if (type === 'long') {
        return time.slice(0, 10) + ' ' + time.slice(11, 19);
    } else {
        return time.slice(0, 10);
    }
};