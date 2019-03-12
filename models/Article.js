const mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  
  link: {
    type: String,
    required: true
  },
  
    summary: {
      type: String,
      required: true
    },
  
 
 
  note: [ {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }],
  
  saved: {
    type: Boolean,
    default: false
  },
});

// This creates our model from the above schema, using mongoose's model method
let Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;
