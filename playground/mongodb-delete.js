/*const MongoClient = require('mongodb').MongoClient;*/
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');



//delete many
/*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	console.log(result);
});*/

db.collection('Users').deleteMany({location: 'USA'}).then((result) => {
	console.log(result);
});

//delete one
/*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	console.log(result);
});*/

/*db.collection('Users').deleteOne({
		_id:new ObjectID('5a47d246d735bb0ee4e8cf09')
	}).then((result) => {
		console.log(result);
	});*/


//find one and delete
/*db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	console.log('result');
});*/

	//db.close();
});