var app=angular.module('numApp',[]);
app.controller('numCtrl',function($scope){
	$scope.number=function(num){
		// $scope.printNumber='hi';
		// console.log("sdf",$scope.printNumber)

		
   $scope.enternum =  JSON.parse(localStorage.getItem('$scope.enternum'));
           if($scope.enternum == null){
           $scope.enternum = [];
            }

   $scope.enternum.push(num);
    console.log(angular.copy($scope.enternum));
    return localStorage.setItem('$scope.enternum', JSON.stringify($scope.enternum));
    $scope.result=angular.copy($scope.enternum)
   }


  $scope.showResult=function(){

    var sum = 0; 
    for(var i = 0; i < $scope.avgData; i++){
    	console.log("jhk",$scope.avgData)
     sum =sum+ parseInt($scope.avgData[i], 10); 
    }

    var avg = sum/$scope.avgData;

    return avg; 
};


	   

	
});
