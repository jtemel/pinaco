import mongoose from 'mongoose';

/**
 * Store a card in the data base.
 *
 * The card stores three attributes:
 *  - suit: the suit of the card
 *  - value: the number on the card (J = 11, Q = 12, K = 13, A = 1, JK = 0)
 *  - points: the point assigned to the card (multipled by 10) where:
 *    - [3 - 9]   = 5
 *    - [10 - 13] = 10
 *    - [1]       = 15
 *    - [2]       = 20
 *    - [0]       = 30
 */
const cardSchema = mongoose.Schema({
  suit: {
    type: String,
    enum: ['spades', 'hearts', 'clubs', 'diamonds', 'joker_black', 'joker_red'],
    required: true,
  },
  value: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    requried: true
  }
});

const Card = mongoose.model('Card', cardSchema);
export default Card;
