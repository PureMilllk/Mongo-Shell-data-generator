(function(){
	
	// if(module.exports !== undefined){
	// 	this.print = console.log;
	// }

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
						// if(this.module.exports === undefined){
						for(i = 1; i <= c; i++){
							// Default formatted data[mongodb test data format]
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
						// }else{
						// 	print("This is for NodeJS testing environment,so it does not support adding items to the database~ :)");
						// }
						break;
					case typeof a[0] === 'object' && !Array.isArray(a[0]) && !isEmpty(a[0]) :
						for(z = 1; z <= c; z++){
							// Create an outer empty obj to collect the output
							var result = {};
							var nestStack = [];
							var reachEnd = false;
							var digitReg = /^d\d*/;
							var nameReg = /^n,[mf]/;
							// Recursion for nesting obj or array
							(function(obj,nest){

								// Basic setting
								var arr = [];
								for(var i in obj){
									arr.push(i);
								}

								for(var j = 0 ; j < arr.length; j++ ){

									if(obj[arr[j]] === 's'){
										// Handle string
										if(nest && !reachEnd){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomString()');
										}else if(nest && reachEnd){
											nestStack.pop();
											if(nestStack.length !== 1){
												eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomString()')
											}else{
												eval('result["'+ nestStack[0]+'"]["'+arr[j]+'"] = randomString()')
											}
										}else{
											result[arr[j]] = randomString()
										};
										
									}
									// Handle digit
									else if(!Array.isArray(obj[arr[j]]) && typeof obj[arr[j]] !== 'object' && (obj[arr[j]] === 'd' || digitReg.test(obj[arr[j]].toString()) ) ){

										var randomDigitResult;
										if (obj[arr[j]] !== 'd' && obj[arr[j]].toString().match(digitReg).length ){
											var match = obj[arr[j]].toString().match(digitReg);
											if (match.length){
												match[0].substr(1, match.length);
												randomDigitResult = randomNumber(Number(match[0]));
											}else{
												randomDigitResult = randomNumber();
											}
											
										}else{
											randomDigitResult = randomNumber();
										}

										if(nest && !reachEnd){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomDigitResult')
										}else if(nest && reachEnd){
											nestStack.pop();
											if(nestStack.length !== 1){
												eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomDigitResult')
											}else{
												eval('result["'+ nestStack[0]+'"]["'+arr[j]+'"] = randomDigitResult')
											}
										}else{
											result[arr[j]] = randomDigitResult
										};
										
									}
									// Handle boolean
									else if(obj[arr[j]] === 'b'){
										if(nest && !reachEnd){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomBool()')
										}else if(nest && reachEnd){
											nestStack.pop();
											if(nestStack.length !== 1){
												eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomBool()')
											}else{
												eval('result["'+ nestStack[0]+'"]["'+arr[j]+'"] = randomBool()')
											}
										}else{
											result[arr[j]] = randomBool()
										};
										
									}
									// Handle name
									else if(!Array.isArray(obj[arr[j]]) && typeof obj[arr[j]] !== 'object' && (obj[arr[j]] === 'n' || nameReg.test(obj[arr[j]].toString()) ) ){


										var randomNameResult;
										if (obj[arr[j]] !== 'n' && obj[arr[j]].toString().match(nameReg).length){
											var match = obj[arr[j]].toString().match(digitReg);
											if (match.length){

												if(match[0] === 'n,m'){
													randomNameResult = randomName('m');
												}else if(match[0] === 'n,f'){
													randomNameResult = randomName('f');
												}else{
													randomNameResult = randomName();
												}
											}else{
												randomNameResult = randomName();
											}
											
										}else{
											randomNameResult = randomName();
										}


										if(nest && !reachEnd){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomNameResult');
										}else if(nest && reachEnd){
											nestStack.pop();
											if(nestStack.length !== 1){
												eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = randomNameResult');
											}else{
												eval('result["'+ nestStack[0]+'"]["'+arr[j]+'"] = randomNameResult');
											}
										}else{
											result[arr[j]] = randomNameResult;
										};
										
									}
									// Check if the current input is an obj
									else if(typeof obj[arr[j]] === 'object' && !Array.isArray(obj[arr[j]]) && !isEmpty(obj[arr[j]]) ){

										if(nest){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = {}')
										}else{
											result[arr[j]] = {};
										}
										nestStack.push(arr[j]);
										arguments.callee(obj[arr[j]], arr[j]);
									}
									// Check if the current input is an array
									else if(typeof obj[arr[j]] === 'object' && Array.isArray(obj[arr[j]]) && obj[arr[j]].length){
										
										if(nest){
											eval('result["'+ nestStack.join('"]["')+'"]["'+arr[j]+'"] = []')
										}else{
											result[arr[j]] = [];
										}
										nestStack.push(arr[j]);
										arguments.callee(obj[arr[j]], arr[j]);

									}
									else{
										print('\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n ');
									}
									if(j == arr.length-1){
										reachEnd = true;
										nestStack.pop();
									}else{
										reachEnd = false;
									}
								}
							})(a[0])
							if(this.module.exports === undefined){
								db[b]['insert'](result);
							}
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

				// Check if the given obj is empty
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
				    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

				    for( var i=0; i < 7; i++ )
				        text += possible.charAt(Math.floor(Math.random() * possible.length));

				    return text;
				}

				// Handle random number
				function randomNumber(){
					return !arguments.length ? Math.floor(Math.random()*101) : Math.floor(Math.random()*(1+arguments[0]));
				}

				// Handle random boolean
				function randomBool(){
					return [true,false][Math.floor(Math.random()*2)]
				}

				// Handle random name
				function randomName(){
					var Male = ["Nickolas","Ramon","Lou","Luciano","Mickey","Silas","Michael","Charles","Eusebio","Boyce","Martin","Rosendo","Val","Marcus","Berry","Lyndon","Chung","Kenton","Jackie","Tyron","Reid","Herb","Felipe","Lyle","Lowell","Salvador","Enrique","Hosea","Micheal","Rhett","Denver","Jimmy","Frederick","Otha","Anibal","Warren","Andre","Jim","Weldon","Blaine","Mariano","Gavin","Raymon","Jarrod","Nicolas","Minh","Justin","Johnny","Felix","Barry"];
						
					var Female = ["Estefana","Danyel","Leonora","Velva","Celia","Cindie","Florine","Misty","Penny","Rosemarie","Creola","Nada","Carri","Lashanda","Letha","Aracelis","Arletta","Sherley","Herlinda","Pura","Gwyn","Carisa","Charmaine","Krishna","Katie","Dia","Bobbi","Criselda","Tamie","Azalee","Opal","Lyndsey","Paulita","Saran","Raylene","Corine","Jeanette","Delta","Despina","Sharonda","Claretta","Kacie","Toni","Elisabeth","Katherina","Elke","Tamala","Joy","Shandi","Devora"];

					return arguments.length ? arguments[0] === 'm' ? Male[Math.floor(Math.random()*50)] : arguments[0] === 'f' ? Female[Math.floor(Math.random()*50)] : Male.concat(Female)[Math.floor(Math.random()*100)] : Male.concat(Female)[Math.floor(Math.random()*100)];
				}
			}(localargs, this.args, this.count))
		}else{
			print("You can define some options or use gen_Init(...).style('default')" );
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

