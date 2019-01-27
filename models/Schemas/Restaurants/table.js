const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BillSchema = require('./Bill');
/**
 * More will be added later. This is just basic to work with menus.
 */
const TableSchema = new Schema({
  // Number corresponding to the table for the hostess
  number: {
    type: Number,
  },
  // List of bills assigned to the table
  Bills: [ BillSchema ],
  // Street Address preferably, but not required
  status: {
    type: String,
    required: true,
    default: 'open'
  },
  // # of occupants at the table
  occupants: {
    type: Number,
    required: false,
    default: 0
  },
  // Special conditions
  flags: {
    type: [ String ],
    required: false
  },
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = TableSchema;
