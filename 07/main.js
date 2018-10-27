'use strick';

(function(){


		var data = [1, 'firstString', 30, 500, true, true, 'abc', false, {test: 'Object'}, undefined],
   			result = [];


   result = prioritySort(data, ['number', 'null', 'string', 'object', 'undefined', 'boolean']);

   console.log('result', result);

	function prioritySort(arr, dataPriority) {

   var dataPriority = ['number', 'null', 'string', 'object', 'undefined', 'boolean']; 
	var res = {
         'number': [],
         'null': [],
         'string': [],
         'object': [],
         'undefined': [],
         'boolean': []
	     };

   var array = [];


   for (var j = 0; j < arr.length; j++){

   	if (arr[j] !== null) {

		   switch (typeof arr[j]) {

				case (typeof 1): 

					res.number.push(arr[j]);		 
               break;
			
				case (typeof 'string'):

					res.string.push(arr[j]); 
					break;

				case (typeof {}):

					res.object.push(arr[j]); 
					break;

				case (typeof undefined): 

					res.undefined.push(arr[j]);  
					break;

				case (typeof true): 

					res.boolean.push(arr[j]);  
					break;
   		}

   	} else {

   		res.null.push(null); 
   	}	
   };	


                     
   res.number.sort(function(a, b) {
      return a - b;
   });

   array = [].concat(res.number, res.null, res.string.sort(), res.object, res.undefined, sortBoolean(res.boolean));
  
 
   function sortBoolean(arr) {
      var res = [];
      for (var i = 0; i < arr.length; i++){
         if (arr[i] === true){
            res.unshift(arr[i]);
         } else {
            res.push(arr[i]);
         }
      };
      return res;
   }
    return array;
}      
})();