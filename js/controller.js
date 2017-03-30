var app=angular.module('numApp',[]);
app.controller('numCtrl',function($scope){
	
	$scope.number=function(num){			
    $scope.enternum =  JSON.parse(localStorage.getItem('$scope.enternum'));
           if($scope.enternum == null){
            $scope.enternum = [];
            }
    $scope.enternum.push(num);
    console.log("print",angular.copy($scope.enternum));
    return localStorage.setItem('$scope.enternum', JSON.stringify($scope.enternum));
   
   }


  $scope.showResult=function(){
    $scope.message="Maximum Number is:";
    $scope.message="Minimum Number is:";

  	$scope.result=[];
	  	$scope.min=0; 
	  	 $scope.max=0;
	  	
// 	  		 $scope.min=$scope.enternum;
// 	         $scope.max=$scope.enternum;
// }          
           for(i=0;i<=$scope.enternum.length;i++){
	           
	           	if($scope.min>$scope.enternum[i]){
                  console.log("hhh",$scope.min)

	           		 $scope.min=angular.copy($scope.enternum[i]);
	           		 console.log("kkkk",$scope.min)
	           		}
	           	else if($scope.max<$scope.enternum[i]){
                                   console.log("hhh",$scope.max)


		                $scope.max=angular.copy($scope.enternum[i]);
		            }

              






	          	     console.log("hhh",$scope.max)

           }
           // $scope.avg = $scope.sum/$scope.enternum;

      }     



	  	




  	// $scope.avgNumber=function(){
   //   var sum = 0; 
   //   for(var i = 0; i < $scope.avgData; i++){
    
   //    console.log("jhk",$scope.avgData)
   //       }
   //  var avg = sum/$scope.avgData;
   //  return avg; 
   // };
 

   // $scope.repeatedNumbers=function(number){
   //    $scope.obj={};
   //     var repeats=[];
   //     var length = number.length;
   //    for(var i = 0; i < length; i++) {
   //     console.log("gggg",number.length)
   //     var strl = number.charAt(i)
   //    $scope.obj[strl] = (isNaN($scope.obj[strl]) ? 1 : $scope.obj[strl] + 1);
   //    }
   //  }

	
});
