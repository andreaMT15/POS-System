const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MenuCategorySchema = require("./MenuCategory");

const MenuSchema = new Schema({
  // Name of the menu, in case a restaurant has multiple (ex. 'Lunch')
  name: {
    type: String,
  },
  // 'not served before 11am', etc.
  flags: {
    type: [ String ],
  },
  categories: [ MenuCategorySchema ],
  // Date that the document was created or last updated
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
