# Mongo-Shell-data-generator
Data generator for test and practice usage.


$ npm i mongo-shell-data-generator

$ mongo

$ cd('./node_modules/mongo-shell-data-generator')

$ load("generator.js")

$ use test

$ Geninit("【collection name which u r gonna create】").total(【amount of data（default is 10）】).fire("default");

$ db.【collection name which u r gonna create】.find()
