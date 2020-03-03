monitor.controller('updownManageCtrl', function ($scope, $state, $stateParams, ngDialog, $interval
//  , OilFindByPage, OilInsert, DeleteOneOil, UpdateOil, FindByIndocnoOil) {
    ) {
    /*------------------------------------参数-----------------------------------------*/
    $scope.params = {
        queryOilObj: {   //查询条件用的参数
			indocno:"",
			oilname:"",
			brand:"",
			nowbrand:"",   //当前润滑油牌号
			appear:"",
			acid:"",
			flashpoint:"",
			burnpoint:"",
			condenpoint:"",
			density:"",
			viscosity:"",
			supplycompany:"",  //供应商
			snote:"",
			istate:"",
			createtime:"",
			createid:"",
			createname:"",
			moditime:"",
			modiid:"",
			modiname:"",
			idel:"",
        },
        addOilObj: {  //添加数据用的字段
			indocno:"",
			oilname:"",
			brand:"",
			appear:"",
			acid:"",
			flashpoint:"",
			burnpoint:"",
			condenpoint:"",
			density:"",
			viscosity:"",
			snote:"",
			istate:"",
			createtime:"",
			createid:"",
			createname:"",
			moditime:"",
			modiid:"",
			modiname:"",
			idel:"",
        }
    }
    $scope.list=[
    	{"f1":"CWRX1166","f2":"100","f3":"铸钢轧辊","f4":"2019-08-26","f5":"2019-08-27"},
    	{"f1":"CWRX1166","f2":"100","f3":"铸钢轧辊","f4":"2019-08-27","f5":"2019-08-28"}
    ]
    /*------------------------------------方法-----------------------------------------*/
    $scope.reset = function () {
		$scope.params.queryOilObj.indocno = ""
		$scope.params.queryOilObj.oilname = ""
		$scope.params.queryOilObj.brand = ""
		$scope.params.queryOilObj.appear = ""
		$scope.params.queryOilObj.acid = ""
		$scope.params.queryOilObj.flashpoint = ""
		$scope.params.queryOilObj.burnpoint = ""
		$scope.params.queryOilObj.condenpoint = ""
		$scope.params.queryOilObj.density = ""
		$scope.params.queryOilObj.viscosity = ""
		$scope.params.queryOilObj.snote = ""
		$scope.params.queryOilObj.istate = ""
		$scope.params.queryOilObj.createtime = ""
		$scope.params.queryOilObj.createid = ""
		$scope.params.queryOilObj.createname = ""
		$scope.params.queryOilObj.moditime = ""
		$scope.params.queryOilObj.modiid = ""
		$scope.params.queryOilObj.modiname = ""
		$scope.params.queryOilObj.idel = ""
    }
    $scope.modelreset = function () {
        $scope.params.addOilObj.indocno = "";
        $scope.params.addOilObj.oilname = "";
        $scope.params.addOilObj.brand = "";
        $scope.params.addOilObj.appear = "";
        $scope.params.addOilObj.acid = "";
        $scope.params.addOilObj.flashpoint = "";
        $scope.params.addOilObj.burnpoint = "";
        $scope.params.addOilObj.condenpoint = "";
        $scope.params.addOilObj.density = "";
        $scope.params.addOilObj.viscosity = "";
        $scope.params.addOilObj.snote = "";
        $scope.params.addOilObj.istate = "";
        $scope.params.addOilObj.createtime = "";
        $scope.params.addOilObj.createid = "";
        $scope.params.addOilObj.createname = "";
        $scope.params.addOilObj.moditime = "";
        $scope.params.addOilObj.modiid = "";
        $scope.params.addOilObj.modiname = "";
        $scope.params.addOilObj.idel = "";
    }

    //查询所有
    $scope.queryByCondition = function () {
        $scope.queryList($scope.params.queryOilObj)
    };
    //删除
    $scope.deleteOil = function (indocno) {
        var dialog = ngDialog.open({
            template: 'deleteOil',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                console.log($scope)
                $scope.sure = function () {
                    DeleteOneOil.save({
                        indocno: indocno
                    }, function (response) {
                        if (response.status == 2000) {
                            $scope.closeThisDialog();
                            alert("删除成功");
                            $scope.queryList($scope.params.queryOilObj)
                        } else {
                            alert(response.msg)
                        }
                    })
                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            width: 300,
            height: 100,
            overlay: true
        });
        dialog.closePromise.then(function (data) {//右上角叉号事件
        });
    };
    
    $scope.addOil= function () {

        var dialog = ngDialog.open({
            template: 'addOil',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.sure = function () {
                    OilInsert.save({
                        oil: {
							indocno:$scope.params.addOilObj.indocno,
							oilname:$scope.params.addOilObj.oilname,
							brand:$scope.params.addOilObj.brand,
							appear:$scope.params.addOilObj.appear,
							acid:$scope.params.addOilObj.acid,
							flashpoint:$scope.params.addOilObj.flashpoint,
							burnpoint:$scope.params.addOilObj.burnpoint,
							condenpoint:$scope.params.addOilObj.condenpoint,
							density:$scope.params.addOilObj.density,
							viscosity:$scope.params.addOilObj.viscosity,
							snote:$scope.params.addOilObj.snote,
							istate:$scope.params.addOilObj.istate,
							createtime:$scope.params.addOilObj.createtime,
							createid:$scope.params.addOilObj.createid,
							createname:$scope.params.addOilObj.createname,
							moditime:$scope.params.addOilObj.moditime,
							modiid:$scope.params.addOilObj.modiid,
							modiname:$scope.params.addOilObj.modiname,
							idel:$scope.params.addOilObj.idel,
                        }
                    }, function (data) {
                        if (data.status == 2000) {
                            $scope.closeThisDialog();
                            $scope.queryList($scope.params.queryOilObj)
                            $scope.params.addOilObj.indocno = "";
                            $scope.params.addOilObj.oilname = "";
                            $scope.params.addOilObj.brand = "";
                            $scope.params.addOilObj.appear = "";
                            $scope.params.addOilObj.acid = "";
                            $scope.params.addOilObj.flashpoint = "";
                            $scope.params.addOilObj.burnpoint = "";
                            $scope.params.addOilObj.condenpoint = "";
                            $scope.params.addOilObj.density = "";
                            $scope.params.addOilObj.viscosity = "";
                            $scope.params.addOilObj.snote = "";
                            $scope.params.addOilObj.istate = "";
                            $scope.params.addOilObj.createtime = "";
                            $scope.params.addOilObj.createid = "";
                            $scope.params.addOilObj.createname = "";
                            $scope.params.addOilObj.moditime = "";
                            $scope.params.addOilObj.modiid = "";
                            $scope.params.addOilObj.modiname = "";
                            $scope.params.addOilObj.idel = "";
                            alert(data.msg)
                        }
                    })
                }
                $scope.close = function () {
                    $scope.closeThisDialog();
                    $scope.modelreset();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                    $scope.modelreset();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            width: 1000,
            overlay: true
        });
        dialog.closePromise.then(function (data) {//右上角叉号事件
        });
    };
    //修改
    $scope.modOil = function (indocno) {
        var dialog = ngDialog.open({
            template: 'modOil',
            scope: $scope,//这样就可以传递参数
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.$parent.params.addOilObj.brand = "no1231";
                $scope.$parent.params.addOilObj.appear = "颜色不错";
                $scope.$parent.params.addOilObj.acid = "2.3";
                $scope.$parent.params.addOilObj.flashpoint = "1.2";
                $scope.$parent.params.addOilObj.burnpoint = "3.2";
                $scope.$parent.params.addOilObj.condenpoint = "5.6";
                $scope.$parent.params.addOilObj.density = "0.91g/ml";
                $scope.$parent.params.addOilObj.viscosity = "32";
                //查询单条信息
//              FindByIndocnoOil.save({
//                  indocno: indocno
//              }, function (response) {
//                  if (response.status == 2000) {
//                          $scope.$parent.params.addOilObj.indocno = response.data.indocno;
//                          $scope.$parent.params.addOilObj.oilname = response.data.oilname;
//                          $scope.$parent.params.addOilObj.brand = response.data.brand;
//                          $scope.$parent.params.addOilObj.appear = response.data.appear;
//                          $scope.$parent.params.addOilObj.acid = response.data.acid;
//                          $scope.$parent.params.addOilObj.flashpoint = response.data.flashpoint;
//                          $scope.$parent.params.addOilObj.burnpoint = response.data.burnpoint;
//                          $scope.$parent.params.addOilObj.condenpoint = response.data.condenpoint;
//                          $scope.$parent.params.addOilObj.density = response.data.density;
//                          $scope.$parent.params.addOilObj.viscosity = response.data.viscosity;
//                          $scope.$parent.params.addOilObj.snote = response.data.snote;
//                          $scope.$parent.params.addOilObj.istate = response.data.istate;
//                          $scope.$parent.params.addOilObj.createtime = response.data.createtime;
//                          $scope.$parent.params.addOilObj.createid = response.data.createid;
//                          $scope.$parent.params.addOilObj.createname = response.data.createname;
//                          $scope.$parent.params.addOilObj.moditime = response.data.moditime;
//                          $scope.$parent.params.addOilObj.modiid = response.data.modiid;
//                          $scope.$parent.params.addOilObj.modiname = response.data.modiname;
//                          $scope.$parent.params.addOilObj.idel = response.data.idel;
//                  } else {
//                      alert(response.msg);
//                  }
//              })
//              $scope.sure = function () {
//                  UpdateOil.save({
//                      oil: {
//                          indocno: indocno,
//							indocno:$scope.params.addOilObj.indocno,
//							oilname:$scope.params.addOilObj.oilname,
//							brand:$scope.params.addOilObj.brand,
//							appear:$scope.params.addOilObj.appear,
//							acid:$scope.params.addOilObj.acid,
//							flashpoint:$scope.params.addOilObj.flashpoint,
//							burnpoint:$scope.params.addOilObj.burnpoint,
//							condenpoint:$scope.params.addOilObj.condenpoint,
//							density:$scope.params.addOilObj.density,
//							viscosity:$scope.params.addOilObj.viscosity,
//							snote:$scope.params.addOilObj.snote,
//							istate:$scope.params.addOilObj.istate,
//							createtime:$scope.params.addOilObj.createtime,
//							createid:$scope.params.addOilObj.createid,
//							createname:$scope.params.addOilObj.createname,
//							moditime:$scope.params.addOilObj.moditime,
//							modiid:$scope.params.addOilObj.modiid,
//							modiname:$scope.params.addOilObj.modiname,
//							idel:$scope.params.addOilObj.idel,
//                      }
//                  }, function (response) {
//                      if(response.status == 2000){
//                         alert(response.msg);
//                         $scope.closeThisDialog();
//                         $scope.modelreset();
//                         $scope.queryList($scope.params.queryOilObj);
//                      }else {
//                          alert(response.msg)
//                      }
//
//                  })
//              }
                $scope.close = function () {
                    $scope.closeThisDialog();
                    $scope.modelreset();
                };
                $scope.cancel = function () {
                    $scope.closeThisDialog();
                    $scope.modelreset();
                };
            }],
            className: 'ngdialog-theme-default ngdialog-theme-custom',
            width: 1000,
            overlay: true
        });
    };
    //分页
//  $scope.paginationConf = {
//      currentPage: 1,//当前页
//      totalItems: 0,//allItem数
//      itemsPerPage: 20,//一页多少个
//      pagesLength: 10,//页码长度
//      perPageOptions: [10, 20, 30, 40, 50],
//      onChange: function () {
//          $scope.queryList($scope.params.queryOilObj);
//      }
//  };
    $scope.queryList = function (queryOilObj) {
//      OilFindByPage.save({
//          pageIndex: $scope.paginationConf.currentPage,
//          pageSize: $scope.paginationConf.itemsPerPage,
//          condition: queryOilObj
//      }, function (data) {
//          if (data.status == 2000) {
//              $scope.paginationConf.totalItems = data.count//总条数
//              $scope.oilList = data.data;
//          } else {
//              alert(data.msg)
//          }
//      })
    };
})