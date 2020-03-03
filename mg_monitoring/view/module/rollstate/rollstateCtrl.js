monitor.controller('rollstateCtrl', function ($scope, $state, $stateParams, ngDialog, $interval) {
   	$scope.tableList =[
   		{"zj":"f1","zzl":"2.12","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f2","zzl":"3.21","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f3","zzl":"1.21","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f4","zzl":"2.1","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f5","zzl":"4.2","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f6","zzl":"2.12","zj":"2.12","gl":"11","dl":"20"},
   		{"zj":"f7","zzl":"2.12","zj":"2.12","gl":"11","dl":"20"},
   	]
   	
	//轧制力
	var shuiyaChart = echarts.init(document.getElementById('shuiyaLine'));  //echarts定义
   	shuiyaoption = {
	    title: {
	        text: '轧制力',
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
	
	//轧制转矩
	var youyaChart = echarts.init(document.getElementById('youyaLine'));  //echarts定义
   	youyaoption = {
	    title: {
	        text: '轧制转矩',
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
	
	//轧制功率
	var liuliangChart = echarts.init(document.getElementById('liuliangLine'));  //echarts定义
   	liuliangoption = {
	    title: {
	        text: '轧制功率',
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
	
	//轧制电路
	var biliChart = echarts.init(document.getElementById('biliLine'));  //echarts定义
   	bilioption = {
	    title: {
	        text: '轧制电路',
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