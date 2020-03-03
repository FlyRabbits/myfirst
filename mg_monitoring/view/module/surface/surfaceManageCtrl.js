monitor.controller('surfaceManageCtrl', function ($scope, $state, $stateParams, ngDialog, $interval
   ) {
   	
   	$scope.list=[
   		{"type":"润滑投入","f1":"12","f2":"12","f3":"13","f4":"14","f5":"15","f6":"16","f7":"17"},
   		{"type":"润滑未投入","f1":"12","f2":"12","f3":"13","f4":"14","f5":"15","f6":"16","f7":"17"}
   	]
   	
   	$scope.params = {
        queryObj: {   //查询条件用的参数
			time:""
        }
    }
   	
   	//缺陷个数
	var shuiyaChart = echarts.init(document.getElementById('shuiyaLine'));  //echarts定义
   	shuiyaoption = {
	    title: {
	        text: '缺陷个数'
	    },
	    grid:{
	          top:"40px",
	          left:"20px",
	          right:"20px",
	          bottom:"20px"
	    },
	    legend: {},
    	tooltip: {},
	   	dataset: {
	        source: [
	            ['product', '未投入', '已投入'],
	            ['钢种一', 10, 5],
	            ['钢种二', 6, 1],
	            ['钢种三', 5, 0],
	            ['钢种四', 1, 0]
	        ]
	    },
	    xAxis: {type: 'category'},
	    yAxis: {},
	    series: [
	        {type: 'bar'},
	        {type: 'bar'}
	    ]
	};
	shuiyaChart.setOption(shuiyaoption);
})