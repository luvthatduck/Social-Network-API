const { Schema, Types } = require('mongoose');


const reactionSchema = new Schema({
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

module.exports = reactionSchema;