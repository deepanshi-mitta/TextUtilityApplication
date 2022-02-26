//object Creation to establish Connection
const mongose=require("mongoose");
//Connection created or create a new database if it is not present
mongose.connect("mongodb://localhost:27017/deepu",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successful..."))
.catch((err=>console.log(err)));
//define Schema of our database
const playlistSchema=new mongose.Schema({name:{type:String,
required:true},
ctype:String,
videos:Number,
author:String,
active:Boolean,
//validations in date
date:{
    type:Date,
    default:Date.now
}
})
//with the help of schema we need to create a model
//create Collection by model and add schemaa to it
const Playlist=new mongose.model("deepu",playlistSchema);

//create or insert a document
//create a async function as we have used await function
const createDocument=async()=>{
    try{
const jsPlaylist=new Playlist({
    name:"JavaScript",
        ctype:"Front End",
        videos:40,
        author:"Deepanshi",
        active:true,
})
const mongoPlaylist=new Playlist({
    name:"MongoDB",
        ctype:"back End",
        videos:70,
        author:"Deepanshi",
        active:true,
})
const mongoosePlaylist=new Playlist({
    name:"mongoose",
        ctype:"back End",
        videos:90,
        author:"Deepanshi",
        active:true,
})
const expressPlaylist=new Playlist({
    name:"Express JS",
        ctype:"back End",
        videos:30,
        author:"Deepanshi",
        active:true,
})

//save our document
//reactPlaylist.save();
//save method return a promise.So t takes times to insert so instead of promise we use async await
const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist]);//Now it will not take time and await cannot work without async function
console.log(result);
}

catch(err){
    console.log(err);
}
}
//createDocument();

//How to read a document
const getDocument=async()=>{
    try{
    const data= await Playlist.find({ctype:"Front End"}).select({name:1}).limit(2);
    console.log(data);

}catch(err){
    console.log(err);
}
}
getDocument();
