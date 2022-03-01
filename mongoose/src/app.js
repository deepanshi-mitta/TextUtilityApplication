//object Creation to establish Connection
const mongose=require("mongoose");
//Connection created or create a new database if it is not present
mongose.connect("mongodb://localhost:27017/deepu",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection successful..."))
.catch((err=>console.log(err)));
//define Schema of our database
const playlistSchema=new mongose.Schema({name:{type:String,
required:true,
trim:true},
ctype:{type:String,
    required:true,
    lowercase:true,
    enum:["front end","back End","database"]},
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
    name:"JavaScript         ",
        ctype:"front end",
        videos:40,
        author:"Deepanshi",
        active:true,
})
// const mongoPlaylist=new Playlist({
//     name:"MongoDB",
//         ctype:"back End",
//         videos:70,
//         author:"Deepanshi",
//         active:true,
// })
//const mongoosePlaylist=new Playlist({
//     name:"mongoose",
//         ctype:"back End",
//         videos:90,
//         author:"Deepanshi",
//         active:true,
// })
// const expressPlaylist=new Playlist({
//     name:"Express JS",
//         ctype:"back End",
//         videos:30,
//         author:"Deepanshi",
//         active:true,
// })

//save our document
//reactPlaylist.save();
//save method return a promise.So t takes times to insert so instead of promise we use async await
// const result=await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expressPlaylist]);//Now it will not take time and await cannot work without async function
 result=await Playlist.insertMany([jsPlaylist]);
console.log(result);
}

catch(err){
    console.log(err);
}
}
createDocument();

//How to read a document
const getDocument=async()=>{
    try{
    const data= await Playlist.find({author:"Deepanshi"}).select({name:1}).sort({name:-1});
    console.log(data);

}catch(err){
    console.log(err);
}
}
//getDocument();

//update document in mongoDB
const updateDocument=async(_id)=>{
    try{
const result=await Playlist.findByIdAndUpdate({_id},{$set:{ctype:"Back End"}},{use:true,useFindAndModify:false});
console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
//updateDocument("6216f4f0f8bd12803ffb02c6");

//delete the documents
const deleteDocument=async(_id)=>{
    try{
const result=await Playlist.findByIdAndDelete({_id});
console.log(result);
}

catch(err){
    console.log(err);

}
}
//deleteDocument("621a80eca7e3ac36d9c1b0df");