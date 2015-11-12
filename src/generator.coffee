
if module.exports
	this.print = console.log

randomDate = (start, end) ->
	new Date start.getTime() + Math.random() * (end.getTime() - start.getTime())
# end randomDate
isEmpty = (obj) ->
	if obj is null
		return true
	if obj.length > 0
		return false
	if obj.length is 0
		return true
	for key of obj
		if Object.prototype.hasOwnProperty.call obj, key
			return false
	true
# end Empty
randomString = () ->
	text = ""
	possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	for i in [0...7]
		text += possible.charAt Math.floor Math.random() * possible.length
	text
# end randomString
randomNumber = (args...) ->
	if not args.length then Math.floor Math.random() * 101 else Math.floor Math.random() * (1 + args[0])
# end randomNumber
randomBool = () ->
	[true,false][Math.floor Math.random() * 2]
#end randomBool
randomName = (args...) ->
	Male = ["Nickolas","Ramon","Lou","Luciano","Mickey","Silas","Michael","Charles","Eusebio","Boyce","Martin","Rosendo","Val","Marcus","Berry","Lyndon","Chung","Kenton","Jackie","Tyron","Reid","Herb","Felipe","Lyle","Lowell","Salvador","Enrique","Hosea","Micheal","Rhett","Denver","Jimmy","Frederick","Otha","Anibal","Warren","Andre","Jim","Weldon","Blaine","Mariano","Gavin","Raymon","Jarrod","Nicolas","Minh","Justin","Johnny","Felix","Barry"]
	Female = ["Estefana","Danyel","Leonora","Velva","Celia","Cindie","Florine","Misty","Penny","Rosemarie","Creola","Nada","Carri","Lashanda","Letha","Aracelis","Arletta","Sherley","Herlinda","Pura","Gwyn","Carisa","Charmaine","Krishna","Katie","Dia","Bobbi","Criselda","Tamie","Azalee","Opal","Lyndsey","Paulita","Saran","Raylene","Corine","Jeanette","Delta","Despina","Sharonda","Claretta","Kacie","Toni","Elisabeth","Katherina","Elke","Tamala","Joy","Shandi","Devora"]
	if args.length
		if args[0] is "m"
			Male[Math.floor Math.random() * 50]
		else if args[0] is "f"
			Female[Math.floor Math.random() * 50]
		else
			(Male.concat Female)[Math.floor Math.random() * 100]
	else 
		(Male.concat Female)[Math.floor Math.random() * 100]
	# end randomName

Init = (args...) ->
	@args = args
	@count = 10
	return

Init::style = (localargs...) ->
	if localargs.length
		((a, b, c) ->
			input = a[0]
			switch true
				when input is "default" and not module.exports
					for i in [1..c]
						db[b]["insert"]
							"address":
								"building": Math.floor(Math.random()*10001)
								"coord": [-(Math.random()*100000001/1000000).toFixed(6), (Math.random()*100000001/1000000).toFixed(6)]
								"street": ['East','South','West','North'][Math.floor(Math.random()*4)]+' '+Math.floor(Math.random()*101)+' Street'
								"zipcode": Math.floor(Math.random()*10001)
							 "borough": ["Manhattan","Brooklyn","Queens","Staten","Bronx"][Math.floor(Math.random()*5)]
							 "cuisine": ["Bakery","Hamburgers","Irish","American","Jewish","Delicatessen","Ice","Chinese","Chicken","Turkish","Caribbean","Donuts","Sandwiches"][Math.floor(Math.random()*13)]
							 "grades": [
						 			{
						 				"date":
						 					"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
									 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
									}, 
									{
										"date":
									 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
									 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
									}, 
									 {
									 	"date":
									 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
									 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
									 }, 
									 {
									 	"date":
									 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
									 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
									 }, 
									 {
									 	"date":
									 		"date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
									 	"grade": "ABCD"[Math.floor(Math.random()*4)], "score": Math.floor(Math.random()*11)
									 }
							 	]
							 "name": ["Morris","Wendy","Riviera","Tov","Brunos","Kosher","Wilken","Regina","Taste","Wild","Seuda","Carvel","Nordic","Glorious","The","Sal","Bully","Steve","Harriet","Angelika"][Math.floor(Math.random()*20)]+" Shop"
							 "restaurant_id": String(Math.floor(Math.random()*30000000))
					print "\nAwesome ~ Generated "+c+" default test data\nUse db[collection].find().pretty(); to view :)\n"
				when typeof input is "object" and not Array.isArray input and not isEmpty input
					for z in [1..c]
						result = {}
						nestStack = []
						reachEnd = false
						# digitReg = /^d\d*/
						# nameReg = /^n,[mf]/
						((obj, nest) -> 
							arr = []
							for i of obj
								arr.push i
							for j in [0...arr.length]
								### begin ###
								name = arr[j]
								val = obj[name]
								if val is "s"
									if nest and not reachEnd
										eval "result[' #{ nestStack.join "']['" } '][' #{ name } '] = randomString()"
									else if nest and reachEnd
										nestStack.pop()
										if not nestStack.length is 1
											eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = randomString()"
										else
											eval "result[' #{ nestStack[0] } '][' #{ name } '] = randomString()"
									else
										result[name] = randomString()
								# end String
								else if val is "d"

									# if not val is "d" and val.toString().match(digitReg).length
									# 	match = val.toString().match digitReg
									# 	if match.length
									# 		match[0].substr 1, match.length
									# 		randomDigitResult = randomNumber Number match[0]
									# 	else
									# 		randomDigitResult = randomNumber()
									# else
									# 	randomDigitResult = randomNumber()

									if nest and not reachEnd
										eval "result[' #{ nestStack.join "']['" } '][' #{ name } '] = randomNumber()"
									else if nest and reachEnd
										nestStack.pop()
										if not nestStack.length is 1
											eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = randomNumber()"
										else
											eval "result[' #{ nestStack[0] } '][' #{ name } '] = randomNumber()"
									else
										result[name] = randomNumber()
								# end Digit
								else if val is "b"
									if nest and not reachEnd
										eval "result[' #{ nestStack.join "']['" } '][' #{ name } '] = randomBool()"
									else if nest and reachEnd
										nestStack.pop()
										if not nestStack.length is 1
											eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = randomBool()"
										else
											eval "result[' #{ nestStack[0] } '][' #{ name } '] = randomBool()"
									else
										result[name] = randomBool()
								# end Bool
								else if val is "n"
									# else if not Array.isArray val and not typeof val is "object" and (val is "n" or nameReg.test val.toString())
									# 	if not val is "n" and val.toString().match(nameReg).length
									# 		match = val.toString().match digitReg
									# 		if match.length
									# 			if match[0] is "n,m"
									# 				randomNameResult = randomName "m"
									# 			else if match[0] is "n,f"
									# 				randomNameResult = randomName()
									# 			else
									# 				randomNameResult = randomName()
									# 		else
									# 			randomNameResult = randomName()
									if nest and not reachEnd
										eval "result[' #{ nestStack.join "']['" } '][' #{ name } '] = randomName()"
									else if nest and reachEnd
										nestStack.pop()
										if not nestStack.length is 1
											eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = randomName()"
										else
											eval "result[' #{ nestStack[0] } '][' #{ name } '] = randomName()"
									else
										result[name] = randomName()
								# end Name
								else if typeof val is "object" and not Array.isArray val and not isEmpty val
									if nest
										eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = {}"
									else
										result[name] = {}
									nestStack.push name
									arguments.callee val, name
								# end Obj
								else if typeof val is "object" and Array.isArray val and val.length
									if nest
										eval "result[' #{ nestStack.join "']['"  } '][' #{ name } '] = []"
									else
										result[name] = []
									nestStack.push name
									arguments.callee val, name
								# end Array
								else
									print "\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n "
								if j is arr.length - 1
									reachEnd = true
									nestStack.pop()
								else
									reachEnd = false
							return
							) input
						if not module.exports
							db[b]['insert'](result)
					print "\nAwesome ~ Generated "+c+" default test data\nUse db[collection].find().pretty(); to view :)\n"
				else
					print "\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n"
			# end switch
			# end IIFE
			return
			) localargs, this.args, this.count
	else
		print "You can define some options or use gen_Init(...).style('default')"
	return

Init::total = (n) ->
	this.count = n
	this



this.gen_Init = (args...) ->
	new Init args