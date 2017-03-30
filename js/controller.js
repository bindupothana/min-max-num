var app=angular.module('numApp',[]);
app.controller('numCtrl',function($scope){
	$scope.number=function(num){
		// $scope.printNumber='hi';
		console.log("sdf",$scope.printNumber)

		
   var enternum =  JSON.parse(localStorage.getItem('enternum'));
   console.log(angular.copy());
           if(enternum == null){
           enternum = [];
            }

    enternum.push(num);
    console.log(angular.copy(enternum));
    return localStorage.setItem('enternum', JSON.stringify(enternum));
    $scope.result=angular.copy(enternum)
   }



	
	   $scope.showResult=function(){

	   }
    
   

	
});
