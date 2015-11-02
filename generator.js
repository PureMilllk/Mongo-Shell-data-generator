(function(){


	function Init(){
		this.args = (function(a){
			return [].slice.call(a[0]);
		}(arguments));
		this.count = 10;
	}
	Init.prototype.fire = function(){
		if (arguments.length){
			localargs = [].slice.call(arguments);
			(function(a,b,c){
				switch(!!a[0]){
					case a[0] === 'default' :
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
							print("Generated")
						}
						break;
					case typeof a[0] === 'object' && !Array.isArray(a[0]) && !isEmpty(a[0]) :
						result = {};
						(function(obj,nest){
							arr = [];
							for(i in obj){
								arr.push(i);
							}
							for(j = 0 ; j < arr.length; j++ ){
								if(typeof obj[arr[j]] === 'string'){
									if(nest){
										result[nest][arr[j]] = randomString()
									}else{
									result[arr[j]] = randomString()};
								}
								else if(typeof obj[arr[j]] === 'object' && !Array.isArray(obj[arr[j]]) && !isEmpty(obj[arr[j]]) ){
									result[arr[j]] = {};
									arguments.callee(obj[arr[j]], [arr[j]]);
								}
								else if(typeof obj[arr[j]] === 'object' && Array.isArray(obj[arr[j]]) && obj[arr[j]].length){
									print('arr');
								}
								else{
									print('wrong input');
								}
							}
						})(a[0])
						db[b]['insert'](result);
						break;
					default :
						print('wrong input , plz check the documentation');
						break;
				}
				function randomDate(start, end) {
				    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
				}
				function isEmpty(obj) {

				    // null and undefined are "empty"
				    if (obj == null) return true;

				    // Assume if it has a length property with a non-zero value
				    // that that property is correct.
				    if (obj.length > 0)    return false;
				    if (obj.length === 0)  return true;

				    // Otherwise, does it have any properties of its own?
				    // Note that this doesn't handle
				    // toString and valueOf enumeration bugs in IE < 9
				    for (var key in obj) {
				        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
				    }

				    return true;
				}
				function randomString()
				{
				    var text = "";
				    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

				    for( var i=0; i < 5; i++ )
				        text += possible.charAt(Math.floor(Math.random() * possible.length));

				    return text;
				}
			}(localargs, this.args, this.count))
		}else{
			print("You can define some options or use Init(...).gen('default')" );
		}
	};

	Init.prototype.total = function(n){
		this.count = n;
		return this;
	}

	this.Geninit = function(){
		return new Init(arguments);
	}

}.call(this))