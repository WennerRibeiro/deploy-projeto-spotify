// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://wennerribeiro17:WohDDPQDITLckxB1@cluster0.jhzul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// console.log(db);
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
