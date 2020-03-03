monitor.controller('forceManageCtrl', function ($scope, $state, $stateParams, ngDialog, $interval
   ) {
   	
   	$scope.list=[
   		{"jh":"01212","f1":"12","f2":"12","f3":"13","f4":"14","f5":"15","f6":"16","f7":"17"},
   		{"jh":"01212","f1":"12","f2":"12","f3":"13","f4":"14","f5":"15","f6":"16","f7":"17"},
   		{"jh":"01212","f1":"12","f2":"12","f3":"13","f4":"14","f5":"15","f6":"16","f7":"17"}
   	]
   	
   	$scope.params = {
        queryObj: {   //查询条件用的参数
			time:""
        }
    }
   	
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
})