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
						}
						break;
					// case a[0] === 'test' :
					// 	for(i = 1; i <= c; i++){
					// 		db[b]['insert']({test:'test'});
					// 	}
					// 	print('test');
					// 	break;
					default :
						print('wrong input , plz check the documentation');
						break;
				}
				function randomDate(start, end) {
				    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
				}
			}(localargs, this.args, this.count))
		}else{
			print("You can define some options or use Init(...).gen('default')" );
		}
		return this;
	};

	Init.prototype.total = function(n){
		this.count = n;
		return this;
	}

	this.Geninit = function(){
		return new Init(arguments);
	}

}.call(this))