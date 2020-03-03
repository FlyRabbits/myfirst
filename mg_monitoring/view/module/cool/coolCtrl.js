monitor.controller('coolCtrl', function ($scope, $state, $stateParams, ngDialog, $interval) {
   	$scope.tableList =[
   		{"zj":"f1","ljd":"2.12","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f2","ljd":"3.21","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f3","ljd":"1.21","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f4","ljd":"2.1","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f5","ljd":"4.2","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f6","ljd":"2.12","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   		{"zj":"f7","ljd":"2.12","lyl":"2.12","cjd":"11","cyl":"12","cll":"2.12"},
   	]
   	
   	//投入率
   	var lineChart = echarts.init(document.getElementById('touruLine'));  //echarts定义
   	option = {
	    title: {
	        text: '冷却水角度',
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
	lineChart.setOption(option);
	
	//冷却水压力
	var shuiyaChart = echarts.init(document.getElementById('shuiyaLine'));  //echarts定义
   	shuiyaoption = {
	    title: {
	        text: '冷却水压力',
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
	
	//除磷水角度
	var youyaChart = echarts.init(document.getElementById('youyaLine'));  //echarts定义
   	youyaoption = {
	    title: {
	        text: '除磷水角度',
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
	
	//除磷水压力
	var liuliangChart = echarts.init(document.getElementById('liuliangLine'));  //echarts定义
   	liuliangoption = {
	    title: {
	        text: '除磷水压力',
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
	
	//除磷水流量
	var biliChart = echarts.init(document.getElementById('biliLine'));  //echarts定义
   	bilioption = {
	    title: {
	        text: '除磷水流量',
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