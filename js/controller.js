var app=angular.module('numApp',[]);
app.controller('numCtrl',function($scope){
	
	$scope.number=function(num){			
    $scope.enternum =  JSON.parse(localStorage.getItem('$scope.enternum'));
           if($scope.enternum == null){
            $scope.enternum = [];
            }
    $scope.enternum.push(num);
    console.log(angular.copy($scope.enternum));
    return localStorage.setItem('$scope.enternum', JSON.stringify($scope.enternum));
    $scope.result=angular.copy($scope.enternum)
   }


  $scope.showResult=function(enternum){
	  	if($scope.min==0 && $scope.max==0){
	  		 $scope.min=enternum;
	         $scope.max=enternum;

	  	}
	  	else{
	            if($scope.min>enternum){
	            	console.log("hjkl",$scope.min)
	                $scope.min=enternum;
	            }
	            else if($scope.max<enternum){
	                $scope.max=enternum;
	            }
	        }
   }




  	$scope.avgNumber=function(){
     var sum = 0; 
     for(var i = 0; i < $scope.avgData; i++){
    
      console.log("jhk",$scope.avgData)
         }
    var avg = sum/$scope.avgData;
    return avg; 
   };
 

   $scope.repeatedNumbers=function(number){
      $scope.obj={};
       var repeats=[];
       var length = number.length;
      for(var i = 0; i < length; i++) {
       console.log("gggg",number.length)
       var strl = number.charAt(i)
      $scope.obj[strl] = (isNaN($scope.obj[strl]) ? 1 : $scope.obj[strl] + 1);
      }
    }



    

	   

	
});
