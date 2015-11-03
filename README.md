# Mongo-Shell-data-generator
Data generator for test and practice usage.

```
$ npm install mongo-shell-data-generator

$ mongo

$ cd('./node_modules/mongo-shell-data-generator')

$ load("generator.js")

$ use test //select table

```
#Syntax:

###Default

```
$ var collection = 'collectionname'; //specify collection
$ var optionCount = 5; //specify the amount of data to be generated
```

```
$ gen_Init(collection).total(optionCount).style("default");
```

eg:
gen_Init("awesome").total(5).style("default");


### Object(Can be nested)(New Feature,not finish)


```
$ var collection = 'collectionname'; //specify collection
$ var optionCount = 5; //specify the amount of data to be generated
$ var optionStyle = {
key1 : 'str',
key2 : 'num',
key3 : 'bool',
key4 : ['num','bool','str'],
key5 : {key1: 'str', key2: 'str'},
key6 : {key1: {key1: ['num','num','num']},
        key2: [{key1: 'str'},{key1: 'num'}, {key3: 'bool'}]
        }
....
} //specify the style of data to be generated
```

```
$ gen_Init(collection).total(optionCount).style(optionStyle);
```
eg:
gen_Init("awesome").total(5).style({

name : 'str',
class : 'str',
Major : {
math : {score : 'num' },
science :{ score : 'num' }
}

});
```
$ db[collection].find()
```
Use db[collection].find() to view the generated data.

eg:db.awesome.find().pretty()

