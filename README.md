# Mongo-Shell-data-generator
Data generator for test and practice usage.


$ npm i mongo-shell-data-generator

$ mongo

$ cd('./node_modules/mongo-shell-data-generator')

$ load("generator.js")

$ use test

Syntax:

### Default
$ Geninit("【collection name which u r gonna create】").total(【amount of data（default is 10）】).fire("default");

eg:Geninit("awesome").total(5).fire("default");

### Object(Can be nested)(New Feature,not finish)
$ Geninit("【collection name which u r gonna create】").total(【amount of data（default is 10）】).fire({

});

eg:Geninit("awesome").total(5).fire({

name : 'Str',
class : 'Str',
Major : {
math : {score : 'Str' },
science :{ score : 'Str' }
}

});

$ db.【collection name which u r gonna create】.find()
