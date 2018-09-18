const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}).then((result) => {
    console.log(result);
});*/

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5ba15441744c59ea59225dc3'}).then((todo) => {
   console.log(todo);
});


/*
Todo.findByIdAndRemove('5ba152d1744c59ea59225d50').then((todo) => {
    console.log(todo);
});*/
