const {ObjectId} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectId(); //created here so it can be passed into the user array for a token
const userTwoId = new ObjectId();

const users = [{
    _id: userOneId,
    email: 'edoconnolly@hotmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString() //abc123 does not need to be the same as earlier example
}]
}, {
         _id: userTwoId,
        email: 'jen@example.com',
        password: 'userTwoPass'
}];
const todos = [{
    _id: new ObjectId(),
    text: 'First test todo'
},
    {
        _id: new ObjectId(),
        text: 'Second test todo',
        completed: true,
        completedAt: 333
    }];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};