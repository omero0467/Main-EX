import { MongoClient } from "mongodb";
import express from "express";
import { ObjectID } from "bson";
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "blogPosts";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, Client) => {
    if (err) {
        return console.log(err,"not connect");
    }
    console.log("client running on",Client.s.url);
    const db = Client.db(databaseName)
    const query = { _id: ObjectID('63971f9f9e503d0676d2b0f5') };
    const updateDocument = {
      $push: { comments: { author:'lidor',body:"this is not good"} }
    };
        db.collection('posts').updateOne(query, updateDocument);
})



const users = [
  {
    name: 'Omer',
    email: 'omer@test.com',
    age: 23,
    location: 'Zanzibar',
    posts: []
  },
  {
    name: 'Benny',
    email: 'benny@test.com',
    age: 29,
    location: 'Maldives',
    posts: []
  },
  {
    name: 'Meir',
    email: 'meir@test.com',
    age: 38,
    location: 'Costa-Rica',
    posts: []
  },
  {
    name: 'Lidor',
    email: 'lidor@test.com',
    age: 29,
    location: 'Amsterdam',
    posts: []
  },
  {
    name:'arel',
    email:'arel@test.com',
    age:30,
    location:'porto-rico',
    post:[]
  }
]



    // const connectionURL = "mongodb://127.0.0.1:27017";
    // const databaseName = "task-manager";
    
    // MongoClient.connect(
    //   connectionURL,
    //   { useNewUrlParser: true },
    //   (error, client) => {
    //     if (error) {
    //       return console.log("Unable to connect to database!");
    //     }
    //     const db = client.db(databaseName);
    
    //     db.collection("users").insertOne({
    //       name: "Andrew",
    //       age: 27,
    //     });
    //   }
    
// Part 1
// Design your Data Model
//! 1. Create an appropriate schema for a blog.
//? - What collections do you need?
//* I will create 2 collections
//* one for users and one for posts.

//? - How are you going to structure your documents?
//* {_id: post._id, author: user._id ,body: post.body}
//* users → user → {_id: user._id, name: user.name, email: user.email, posts: [post1Id, post2Id, post3Id...]}

//? - Should you embed your data or use references?
//* We shold use references, this will allow us to keep the user document leaner



