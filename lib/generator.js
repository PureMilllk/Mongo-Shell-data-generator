(function() {
  var Init, isEmpty, randomBool, randomDate, randomName, randomNumber, randomString,
    slice = [].slice;

  if (module.exports) {
    this.print = console.log;
  }

  randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  isEmpty = function(obj) {
    var key;
    if (obj === null) {
      return true;
    }
    if (obj.length > 0) {
      return false;
    }
    if (obj.length === 0) {
      return true;
    }
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  };

  randomString = function() {
    var i, k, possible, text;
    text = "";
    possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (i = k = 0; k < 7; i = ++k) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  randomNumber = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (!args.length) {
      return Math.floor(Math.random() * 101);
    } else {
      return Math.floor(Math.random() * (1 + args[0]));
    }
  };

  randomBool = function() {
    return [true, false][Math.floor(Math.random() * 2)];
  };

  randomName = function() {
    var Female, Male, args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    Male = ["Nickolas", "Ramon", "Lou", "Luciano", "Mickey", "Silas", "Michael", "Charles", "Eusebio", "Boyce", "Martin", "Rosendo", "Val", "Marcus", "Berry", "Lyndon", "Chung", "Kenton", "Jackie", "Tyron", "Reid", "Herb", "Felipe", "Lyle", "Lowell", "Salvador", "Enrique", "Hosea", "Micheal", "Rhett", "Denver", "Jimmy", "Frederick", "Otha", "Anibal", "Warren", "Andre", "Jim", "Weldon", "Blaine", "Mariano", "Gavin", "Raymon", "Jarrod", "Nicolas", "Minh", "Justin", "Johnny", "Felix", "Barry"];
    Female = ["Estefana", "Danyel", "Leonora", "Velva", "Celia", "Cindie", "Florine", "Misty", "Penny", "Rosemarie", "Creola", "Nada", "Carri", "Lashanda", "Letha", "Aracelis", "Arletta", "Sherley", "Herlinda", "Pura", "Gwyn", "Carisa", "Charmaine", "Krishna", "Katie", "Dia", "Bobbi", "Criselda", "Tamie", "Azalee", "Opal", "Lyndsey", "Paulita", "Saran", "Raylene", "Corine", "Jeanette", "Delta", "Despina", "Sharonda", "Claretta", "Kacie", "Toni", "Elisabeth", "Katherina", "Elke", "Tamala", "Joy", "Shandi", "Devora"];
    if (args.length) {
      if (args[0] === "m") {
        return Male[Math.floor(Math.random() * 50)];
      } else if (args[0] === "f") {
        return Female[Math.floor(Math.random() * 50)];
      } else {
        return (Male.concat(Female))[Math.floor(Math.random() * 100)];
      }
    } else {
      return (Male.concat(Female))[Math.floor(Math.random() * 100)];
    }
  };

  Init = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    this.args = args;
    this.count = 10;
  };

  Init.prototype.style = function() {
    var localargs;
    localargs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (localargs.length) {
      (function(a, b, c) {
        var fn, i, input, k, l, nestStack, reachEnd, ref, ref1, result, z;
        input = a[0];
        switch (true) {
          case input === "default" && !module.exports:
            for (i = k = 1, ref = c; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
              db[b]["insert"]({
                "address": {
                  "building": Math.floor(Math.random() * 10001),
                  "coord": [-(Math.random() * 100000001 / 1000000).toFixed(6), (Math.random() * 100000001 / 1000000).toFixed(6)],
                  "street": ['East', 'South', 'West', 'North'][Math.floor(Math.random() * 4)] + ' ' + Math.floor(Math.random() * 101) + ' Street',
                  "zipcode": Math.floor(Math.random() * 10001),
                  "borough": ["Manhattan", "Brooklyn", "Queens", "Staten", "Bronx"][Math.floor(Math.random() * 5)],
                  "cuisine": ["Bakery", "Hamburgers", "Irish", "American", "Jewish", "Delicatessen", "Ice", "Chinese", "Chicken", "Turkish", "Caribbean", "Donuts", "Sandwiches"][Math.floor(Math.random() * 13)],
                  "grades": [
                    {
                      "date": {
                        "date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
                      },
                      "grade": "ABCD"[Math.floor(Math.random() * 4)],
                      "score": Math.floor(Math.random() * 11)
                    }, {
                      "date": {
                        "date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
                      },
                      "grade": "ABCD"[Math.floor(Math.random() * 4)],
                      "score": Math.floor(Math.random() * 11)
                    }, {
                      "date": {
                        "date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
                      },
                      "grade": "ABCD"[Math.floor(Math.random() * 4)],
                      "score": Math.floor(Math.random() * 11)
                    }, {
                      "date": {
                        "date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
                      },
                      "grade": "ABCD"[Math.floor(Math.random() * 4)],
                      "score": Math.floor(Math.random() * 11)
                    }, {
                      "date": {
                        "date": randomDate(new Date(2000, 0, 1), new Date()).getTime()
                      },
                      "grade": "ABCD"[Math.floor(Math.random() * 4)],
                      "score": Math.floor(Math.random() * 11)
                    }
                  ],
                  "name": ["Morris", "Wendy", "Riviera", "Tov", "Brunos", "Kosher", "Wilken", "Regina", "Taste", "Wild", "Seuda", "Carvel", "Nordic", "Glorious", "The", "Sal", "Bully", "Steve", "Harriet", "Angelika"][Math.floor(Math.random() * 20)] + " Shop",
                  "restaurant_id": String(Math.floor(Math.random() * 30000000))
                }
              });
            }
            print("\nAwesome ~ Generated " + c + " default test data\nUse db[collection].find().pretty(); to view :)\n");
            break;
          case typeof input === "object" && !Array.isArray(input && !isEmpty(input)):
            fn = function(obj, nest) {
              var arr, j, m, name, reachEnd, ref2, val;
              arr = [];
              for (i in obj) {
                arr.push(i);
              }
              for (j = m = 0, ref2 = arr.length; 0 <= ref2 ? m < ref2 : m > ref2; j = 0 <= ref2 ? ++m : --m) {

                /* begin */
                name = arr[j];
                val = obj[name];
                if (val === "s") {
                  if (nest && !reachEnd) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomString()");
                  } else if (nest && reachEnd) {
                    nestStack.pop();
                    if (!nestStack.length === 1) {
                      eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomString()");
                    } else {
                      eval("result[' " + nestStack[0] + " '][' " + name + " '] = randomString()");
                    }
                  } else {
                    result[name] = randomString();
                  }
                } else if (val === "d") {
                  if (nest && !reachEnd) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomNumber()");
                  } else if (nest && reachEnd) {
                    nestStack.pop();
                    if (!nestStack.length === 1) {
                      eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomNumber()");
                    } else {
                      eval("result[' " + nestStack[0] + " '][' " + name + " '] = randomNumber()");
                    }
                  } else {
                    result[name] = randomNumber();
                  }
                } else if (val === "b") {
                  if (nest && !reachEnd) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomBool()");
                  } else if (nest && reachEnd) {
                    nestStack.pop();
                    if (!nestStack.length === 1) {
                      eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomBool()");
                    } else {
                      eval("result[' " + nestStack[0] + " '][' " + name + " '] = randomBool()");
                    }
                  } else {
                    result[name] = randomBool();
                  }
                } else if (val === "n") {
                  if (nest && !reachEnd) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomName()");
                  } else if (nest && reachEnd) {
                    nestStack.pop();
                    if (!nestStack.length === 1) {
                      eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = randomName()");
                    } else {
                      eval("result[' " + nestStack[0] + " '][' " + name + " '] = randomName()");
                    }
                  } else {
                    result[name] = randomName();
                  }
                } else if (typeof val === "object" && !Array.isArray(val && !isEmpty(val))) {
                  if (nest) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = {}");
                  } else {
                    result[name] = {};
                  }
                  nestStack.push(name);
                  arguments.callee(val, name);
                } else if (typeof val === "object" && Array.isArray(val && val.length)) {
                  if (nest) {
                    eval("result[' " + (nestStack.join("']['")) + " '][' " + name + " '] = []");
                  } else {
                    result[name] = [];
                  }
                  nestStack.push(name);
                  arguments.callee(val, name);
                } else {
                  print("\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n ");
                }
                if (j === arr.length - 1) {
                  reachEnd = true;
                  nestStack.pop();
                } else {
                  reachEnd = false;
                }
              }
            };
            for (z = l = 1, ref1 = c; 1 <= ref1 ? l <= ref1 : l >= ref1; z = 1 <= ref1 ? ++l : --l) {
              result = {};
              nestStack = [];
              reachEnd = false;
              fn(input);
              if (!module.exports) {
                db[b]['insert'](result);
              }
            }
            print("\nAwesome ~ Generated " + c + " default test data\nUse db[collection].find().pretty(); to view :)\n");
            break;
          default:
            print("\nOops, Wrong input, Plz check the documentation\nOr try gen_Init[collection].style(\'default\'); to get the default testing data :)\n");
        }
      })(localargs, this.args, this.count);
    } else {
      print("You can define some options or use gen_Init(...).style('default')");
    }
  };

  Init.prototype.total = function(n) {
    this.count = n;
    return this;
  };

  this.gen_Init = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return new Init(args);
  };

}).call(this);
