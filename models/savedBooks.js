const mongoose =require("mongoose");

const Schema = mongoose.Schema;

let SavedBooksSchema = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    author: String,
    description:String,
    image:String,
    link:String,
    bookId:String
});

let SavedBooks = mongoose.model("SavedBooks", SavedBooksSchema);

module.exports = SavedBooks;