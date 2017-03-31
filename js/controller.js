var app=angular.module('numApp',[]);
app.controller('numCtrl',function($scope){
	
	$scope.number=function(num){			
    $scope.enternum =  JSON.parse(localStorage.getItem('$scope.enternum'));
           if($scope.enternum == null){
            $scope.enternum = [];
            }
    $scope.enternum.push(num);
    return localStorage.setItem('$scope.enternum', JSON.stringify($scope.enternum));
   
   }


  $scope.showResult=function(){
    $scope.message="Maximum Number is:";
    $scope.Minimum="Minimum Number is:";
    $scope.sumOfNumber="Sum of Numbers is:";
    $scope.avgNumber="Average Number is:";
    $scope.countingRepeated="Repeated Numbers is:";
     
       $scope.obj={};
  	 
	  	 $scope.min=0; 
	  	 $scope.max=0;
       $scope.sum=0;
       $scope.avg=0;
	  	
           for(i=0;i< $scope.enternum.length;i++){
            console.log("length",$scope.enternum.length)
             $scope.strl = $scope.enternum[i];
             console.log("strl",$scope.strl)
             $scope.obj[$scope.strl] = (isNaN($scope.obj[$scope.strl]) ? 1 : $scope.obj[$scope.strl] + 1);
              console.log("count", $scope.obj )

             $scope.sum=angular.copy($scope.sum+$scope.enternum[i]);
             console.log("sum",$scope.sum)
	           
	           	if($scope.min>$scope.enternum[i]){
                  console.log("min",$scope.min)

	           		 $scope.min=angular.copy($scope.enternum[i]);
	           		 console.log("min",$scope.min)
	           		}
	           	else if($scope.max<$scope.enternum[i]){
		                $scope.max=angular.copy($scope.enternum[i]);
                    $scope.min=angular.copy($scope.enternum[i]);
		            }
                    console.log("max",$scope.max)
                   

           }
             $scope.avg =angular.copy( $scope.sum/$scope.enternum.length);
             console.log("avg",$scope.avg )  

            
      }     



	  	




  	

	
});
