import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const { email, name, message } = req.body;
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: "Invalid Input" });
            return;
        }
        //Store it in a database
        const newMessage = {
            email, name, message
        };
        const username = process.env.mongodb_username;
        const password = process.env.mongodb_password;
        const databaseName = process.env.mongodb_database;
        const clusterName = process.env.mongodb_cluster;
        const collectionName = process.env.mongodb_collection;
        const uri = `mongodb+srv://${username}:${password}@${clusterName}.nrje3.mongodb.net/?retryWrites=true&w=majority`;
        const client = new MongoClient(uri);

        try {
            await client.connect();
        } catch (e) {
            res.status(500).json({ message: "Could not connect to database" });
            return;
        }
        const collection = client.db(databaseName).collection(collectionName);
        try {
            await collection.insertOne(newMessage);
        } catch (e) {
            res.status(500).json({ message: "Could not send info to database" });
            return;
        }
        
        client.close();
        res.status(201).json({ message: "Message stored successfully!", storedMessage: newMessage });
    }
}

export default handler;