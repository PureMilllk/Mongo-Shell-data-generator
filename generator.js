(function(){

	// Initialization
	function Init(){
		this.args = (function(a){
			return [].slice.call(a[0]);
		}(arguments));
		this.count = 10;
	}

	// Take input and generate data base on the input 
	Init.prototype.style = function(){
		if (arguments.length){
			localargs = [].slice.call(arguments);
			(function(a,b,c){
				switch(true){
					case (a[0] === 'default') :
						for(i = 1; i <= c; i++){
							db[b]['insert'](
									{"address": {
											"building": Math.floor(Math.random()*10001), 
											"coord": [-(Math.random()*100000001/1000000).toFixed(6), (Math.random()*100000001/1000000).toFixed(6)], 
											"street": ['East','South','West','North'][Math.floor(Math.random()*4)]+' '+Math.floor(Math.random()*101)+' Street',
											"zipcode": Math.floor(Math.random()*10001)
										},
									 "borough": ["Manhattan","Brooklyn","Queens","Staten","Bronx"][Math.floor(Math.random()*5)], 
									 "cuisine": ["Bakery","Hamburgers","Irish","American","Jewish","Delicatessen","Ice","Chinese","Chicken","Turkish","Caribbean","Donuts","Sandwiches"][Math.floor(Math.random()*13)], 
									 "grades": [
								 			{
								 				"date": {
								 					"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
								 					}, 
											 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
											}, 
											{
												"date": {
											 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
												}, 
											 "grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
											}, 
											 {
											 	"date": {
											 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
											 	}, 
											 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
											 }, 
											 {
											 	"date": {
											 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
											 	}, 
											 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
											 }, 
											 {
											 	"date": {
											 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
											 	}, 
											 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
											 }
									 	], 
									 "name": ["Morris","Wendy","Riviera","Tov","Brunos","Kosher","Wilken","Regina","Taste","Wild","Seuda","Carvel","Nordic","Glorious","The","Sal","Bully","Steve","Harriet","Angelika"][Math.floor(Math.random()*20)]+" Shop", 
									 "restaurant_id": String(Math.floor(Math.random()*30000000))
									}
							);
						}
						print("\nAwesome ~ Generated "+c+" default test data\nUse db[collection].find().pretty(); to view :)\n");
						break;
					case typeof a[0] === 'object' && !Array.isArray(a[0]) && !isEmpty(a[0]) :
						for(z = 1; z <= c; z++){
							// Create an outer empty obj to collect the output
							result = {};
							nestarr = [];
							// Recursion for nesting obj or array
							(function(obj,nest){

								// Basic setting
								arr = [];
								for(i in obj){
									arr.push(i);
								}

								for(j = 0 ; j < arr.length; j++ ){
									if(//typeof obj[arr[j]] === 'string' || 
										obj[arr[j]] === 'str'){

										// Recursion exit
										if(nest){
											eval('result.'+ nestarr.join('.')+'.'+arr[j]+' = randomString()')
											// result[nest][arr[j]] = randomString()
										}else{
										result[arr[j]] = randomString()};

									}
									// Handle number
									else if(//typeof obj[arr[j]] === 'number' || 
										obj[arr[j]] === 'num'){
										if(nest){
											eval('result.'+ nestarr.join('.')+'.'+arr[j]+' = randomNumber()')
											
											// result[nest][arr[j]] = randomNumber()
										}else{
										result[arr[j]] = randomNumber()};
									}
									// Handle boolean
									else if(//typeof obj[arr[j]] === 'boolean' || 
										obj[arr[j]] === 'bool'){
										if(nest){
											eval('result.'+ nestarr.join('.')+'.'+arr[j]+' = randomBool()')
											// result[nest][arr[j]] = randomBool()
										}else{
										result[arr[j]] = randomBool()};
									}
									// Check if the current input is an obj
									else if(typeof obj[arr[j]] === 'object' && !Array.isArray(obj[arr[j]]) && !isEmpty(obj[arr[j]]) ){

										if(nest){
											// result[nest][arr[j]] = {};
											eval('result.'+ nestarr.join('.')+'.'+arr[j]+' = {}')
										}else{
											result[arr[j]] = {};
										}
										nestarr.push(arr[j]);
										arguments.callee(obj[arr[j]], arr[j]);
									}
									// Check if the current input is an array
									else if(typeof obj[arr[j]] === 'object' && Array.isArray(obj[arr[j]]) && obj[arr[j]].length){
										
										if(nest){
											// result[nest][arr[j]] = {};
											eval('result.'+ nestarr.join('.')+'.'+arr[j]+' = {}')
										}else{
											result[arr[j]] = {};
										}
										nestarr.push(arr[j]);
										arguments.callee(obj[arr[j]], arr[j]);

									}
									else{
										print('\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n ');
									}
								}
							})(a[0])
							db[b]['insert'](result);
						}
						print("\nAwesome ~ Generated "+c+" default test data\nUse db[collection].find().pretty(); to view :)\n");
						break;
					default :
						print('\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n ');
						break;
				}
				// Hoisting functions
				function randomDate(start, end) {
				    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
				}

				// Check if the obj is empty
				function isEmpty(obj) {
				    if (obj == null) return true;
				    if (obj.length > 0)    return false;
				    if (obj.length === 0)  return true;
				    for (var key in obj) {
				        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
				    }
				    return true;
				}

				// Handle random string
				function randomString(){
				    var text = "";
				    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				    for( var i=0; i < 5; i++ )
				        text += possible.charAt(Math.floor(Math.random() * possible.length));

				    return text;
				}

				// Handle random number
				function randomNumber(){
					return Math.floor(Math.random()*100);//for test
				}

				// Handle random boolean
				function randomBool(){
					return [true,false][Math.floor(Math.random()*2)]
				}
			}(localargs, this.args, this.count))
		}else{
			print("You can define some options or use Init(...).gen('default')" );
		}
	};

	// Specify the amount of data to insert
	Init.prototype.total = function(n){
		this.count = n;
		return this;
	}

	// Output to the global
	this.gen_Init = function(){
		return new Init(arguments);
	}

}.call(this))