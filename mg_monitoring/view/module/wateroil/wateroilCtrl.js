monitor.controller('wateroilCtrl', function ($scope, $state, $stateParams, ngDialog, $interval) {
   	$scope.tableList =[
   		{"zj":"f1","yy":"2.12","sy":"2.12","ll":"11","bl":"90%","ty":"1"},
   		{"zj":"f2","yy":"3.21","sy":"2.12","ll":"11","bl":"90%","ty":"0"},
   		{"zj":"f3","yy":"1.21","sy":"2.12","ll":"11","bl":"90%","ty":"1"},
   		{"zj":"f4","yy":"2.1","sy":"2.12","ll":"11","bl":"90%","ty":"1"},
   		{"zj":"f5","yy":"4.2","sy":"2.12","ll":"11","bl":"90%","ty":"0"},
   		{"zj":"f6","yy":"2.12","sy":"2.12","ll":"11","bl":"90%","ty":"1"},
   		{"zj":"f7","yy":"2.12","sy":"2.12","ll":"11","bl":"90%","ty":"1"},
   	]
   	
   	//投入率
   	var lineChart = echarts.init(document.getElementById('touruLine'));  //echarts定义
   	option = {
	    title: {
	        text: '润滑功能投用图',
        	left: 'center'
	    },
	    grid:{
	          top:"30px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    xAxis: {
	        type: 'category',
	        data: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
	        {
	            type:'line',
	            step: 'start',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        }
	    ]
	};
	lineChart.setOption(option);
	
	//水压
	var shuiyaChart = echarts.init(document.getElementById('shuiyaLine'));  //echarts定义
   	shuiyaoption = {
	    title: {
	        text: '油压',
        	left: 'center'
	    },
	    grid:{
	          top:"30px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	   	tooltip: {  /**鼠标悬浮显示数据*/
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
		xAxis: {
	        type: 'category',
	        axisTick: {/**x轴对称*/
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '水压' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
			data: ["f1","f2","f3","f4","f5","f6","f7"]
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
		    {
	            type:'line',
	            smooth: true,
	            data: [1.2,2.2,3.2,3.3,4.1,5.1,6.1,7.2]
	       },
	       {
	            type:'line',
	            smooth: true,
	            data: [2.3,3.2,5.2,5.1,5.5,6.2,7.6]
	        }
	    ]
	};
	shuiyaChart.setOption(shuiyaoption);
	
	//油压
	var youyaChart = echarts.init(document.getElementById('youyaLine'));  //echarts定义
   	youyaoption = {
	    title: {
	        text: '水压',
        	left: 'center'
	    },
	    grid:{
	          top:"30px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	   	tooltip: {  /**鼠标悬浮显示数据*/
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
		xAxis: {
	        type: 'category',
	        axisTick: {/**x轴对称*/
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '油压' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
			data: ["f1","f2","f3","f4","f5","f6","f7"]
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
		    {
	            type:'line',
	            smooth: true,
	            data: [1.2,2.2,3.2,3.3,4.1,5.1,6.1,7.2]
	       },
	       {
	            type:'line',
	            smooth: true,
	            data: [2.3,3.2,5.2,5.1,5.5,6.2,7.6]
	        }
	    ]
	};
	youyaChart.setOption(youyaoption);
	
	//流量
	var liuliangChart = echarts.init(document.getElementById('liuliangLine'));  //echarts定义
   	liuliangoption = {
	    title: {
	        text: '流量',
        	left: 'center'
	    },
	    grid:{
	          top:"30px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	   	tooltip: {  /**鼠标悬浮显示数据*/
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
		xAxis: {
	        type: 'category',
	        axisTick: {/**x轴对称*/
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '流量' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
			data: ["f1","f2","f3","f4","f5","f6","f7"]
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
		    {
	            type:'line',
	            smooth: true,
	            data: [1.2,2.2,3.2,3.3,4.1,5.1,6.1,7.2]
	       },
	       {
	            type:'line',
	            smooth: true,
	            data: [2.3,3.2,5.2,5.1,5.5,6.2,7.6]
	        }
	    ]
	};
	liuliangChart.setOption(liuliangoption);
	
	//比例
	var biliChart = echarts.init(document.getElementById('biliLine'));  //echarts定义
   	bilioption = {
	    title: {
	        text: '水油比例',
        	left: 'center'
	    },
	    grid:{
	          top:"30px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	   	tooltip: {  /**鼠标悬浮显示数据*/
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
	        }
	    },
		xAxis: {
	        type: 'category',
	        axisTick: {/**x轴对称*/
                alignWithLabel: true
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '比例' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
			data: ["f1","f2","f3","f4","f5","f6","f7"]
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
		    {
	            type:'line',
	            smooth: true,
	            data: [1.2,2.2,3.2,3.3,4.1,5.1,6.1,7.2]
	       },
	       {
	            type:'line',
	            smooth: true,
	            data: [2.3,3.2,5.2,5.1,5.5,6.2,7.6]
	        }
	    ]
	};
	biliChart.setOption(bilioption);
})