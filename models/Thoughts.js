const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')


const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: 'Reaction is required',
    validate: [({ length }) => length < 280, 'Thought should be less than 280 characters']

  },
  username: {
    type: String,
    required: 'Username is required',
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },

});


const ThoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Thought is required',
    validate: [({ length }) => length <280, 'Thought should be less than 280 characters']
   
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
  username: {
    type: String,
    required: 'Username is required',
  },
  reactions: [ reactionSchema ],
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  },
);

ThoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;