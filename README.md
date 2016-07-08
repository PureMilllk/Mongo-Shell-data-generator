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


### Object(Can be nested)


```
$ var collection = 'collectionname'; //specify collection
$ var optionCount = 5; //specify the amount of data to be generated
$ var optionStyle = {
key1 : 's',  //'s' Stands for string,The value type specification will always be 's' or 'd' or 'b' or 'n'
key2 : 'd', //'d' Stands for integer digits, number in other way.
key3 : 'b', //'b' Stands for boolean
key4 : ['n','n','n'], //'n' Stands for name
key5 : {key1: 's', key2: 's'},
key6 : {key1: {key1: ['d','d','d']},
        key2: [{key1: 's'},{key1: 'd'}, {key3: 'b'}]
        }
....
} //specify the style of data to be generated
```

```
$ gen_Init(collection).total(optionCount).style(optionStyle);
```
eg:
gen_Init("awesome").total(5).style({

name : 'n',
class : 's',
Major : {
math : {score : 'd' },
science :{ score : 'd' }
}

});
```
$ db[collection].find()
```
Use db[collection].find() to view the generated data.

eg:db.awesome.find().pretty()

### Options

```
$ gen_Init("awesome").total(5).style({
 
name : 'n,m', // n,m means that u need a male name,and can also use 'n,f'
class : 's',
Major : {
math : {score : 'd10' }, // can specify the random range,here 'd10' is ranged 10
science :{ score : 'd50' }, // random number now has range 50
biology :{ score: 'd20,85' } // generated number will be between 20 and 85
}
 
});
```
