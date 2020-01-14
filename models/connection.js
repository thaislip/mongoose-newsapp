var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ConnectionSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    body: {
        type: String,
        required: true
    },

});

var Comment = mongoose.model("Comment". CommentSchema);
module.exports = Comment;