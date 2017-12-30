/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	/*db.collection('Todos').find({
		_id:new ObjectID('5a47d01d14080224580bf451')
	}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 4));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/
	//db.close();
/*
	db.collection('Todos').find().count().then((count) => {
		console.log('Todos count: '+ count);
		
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});*/

	db.collection('Users').find({location: 'Ireland'}).toArray().then((docs) => {
		console.log('Users.');
		console.log(JSON.stringify(docs,undefined, 2));
	}, (err) => {
		console.log('Unable to retrieve results', err);
		});
});
