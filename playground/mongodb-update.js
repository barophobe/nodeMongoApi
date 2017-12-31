/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

/*	db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5a4823b20059021d87bca9f2')
}, {
	$set: {
		completed: true
	}
}, {
	returnOriginal: false
}).then((result) => {
		console.log(result);
	});*/


	db.collection('Users').findOneAndUpdate({_id: new ObjectID('5a47d1a1db13030cb4e27685')
}, {
	$set: {
		name: 'Edmond'
	},
	$inc: {
		age: 1
	}
}, {
	returnOriginal: false
}).then((result) => {
		console.log(result);
	});



	//db.close();
});