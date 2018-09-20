const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            minlength: 6,
            trim: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: '{VALUE} is not a valid email'
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    });

//.methods mean an instance method as opposed to a model method
UserSchema.methods.toJSON = function () {
	var user = this; //this binded to the document not the model..small u!
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

	user.tokens = user.tokens.concat([{access, token}]);

	return user.save().then(() => {
		return token;
	});
};
//statics mean it becomes a model method as opposed to an instance method.
UserSchema.statics.findByToken = function(token) {
  var User = this; //model methods get called with model as the 'this' binding, not the document... big U!!
  var decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch(e) {
   /* return new Promise((resolve, reject) => {
        reject();
    });*/
   return Promise.reject(); //same as ablove. if we put an arg in reject it becomes the (e) in catch
  }
  return User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth'
  });
};

UserSchema.pre('save', function(next) {
    var user = this;

    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = {User};