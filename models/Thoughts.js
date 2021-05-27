const { Schema, model } = require('mongoose');


const thoughtsSchema = new Schema({
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

thoughtsSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;