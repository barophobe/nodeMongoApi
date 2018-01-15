const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = '5a5cd7a6eccc5e2436400faa';

// from mongo, can authenticate if id is valid
if (!ObjectId.isValid(id)) {
	console.log('id not valid');
}*/

/*Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});
*/

/*Todo.findById(id).then((todo) => {
	if (!todo) {
		return console.log('id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
*/


var id = "5a48ccd0ce5dc894195693c8";

User.findById(id).then((user) => {
	if (!User) {
		return console.log('User not found');
	}
	console.log('User', user);
}).catch((e) => console.log(e));