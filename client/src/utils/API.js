import axios from "axios";

let url = "https://www.googleapis.com/books/v1/volumes?q=";
let apiKey = "&AIzaSyDJYQ3UWNQArzm6UopuTGKZ3Z7d5NIYjIc";

export default {
    getBooks:function(query){
        return axios.get(url + query + apiKey);
    },
    saveBook: function(title,author,description,image,link,bookId){
        return axios.post("/api/books",{
            name:title,
            author:author,
            description:description,
            image:image,
            link:link,
            bookId:bookId
        });
    },
    getSavedBooks: function(){
        return axios.get("/api/books");
    },
    getBookById: function(id){
        return axios.get(url + id + apiKey );
    },
    deleteSavedBook: function (id){
        return axios.delete("/api/books/" + id)
    }
};
