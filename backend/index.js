import express from "express";
import ImageKit from "imagekit";
import cors from "cors"
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";


const app=express();
const port=process.env.PORT || 3000;

async function connect(){
    try{
await mongoose.connect(process.env.MONGO)
console.log("mongodb connection estabilished")
    }catch(err){
        console.log(err)
    }
}


app.use(cors({origin:process.env.CLIENT_URL,}));
app.use(express.json());

const imagekit=new ImageKit({
    urlEndpoint:process.env.IMAGE_KIT_ENDPOINT,
    publicKey:process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey:process.env.IMAGE_KIT_PRIVATE_KEY

});

app.get("/api/upload",(req,res)=>{
    const result=imagekit.getAuthenticationParameters();
    res.send(result);
})
//creating new chat
app.post("/api/chats", async (req, res) => {
    const { text, userId } = req.body;
    try {
        const newChat = new Chat({
            userId: userId,
            history: [{ role: "user", parts: { text } }]
        });
        const savedChat = await newChat.save();
        
        // Check if userChats exist
        const userChatsDoc = await UserChats.find({ userId: userId });
        
        if (!userChatsDoc.length) {
            // Create new userChats document
            const newUserChats = new UserChats({
                userId: userId,
                chats: [
                    {
                        _id: savedChat._id,
                        title: text.substring(0, 40)
                    }
                ]
            });
            await newUserChats.save();
        } else {
            // If exists, push the chat into existing array
            await UserChats.updateOne(
                { userId: userId },
                {
                    $push: {
                        chats: {
                            _id: savedChat._id,
                            title: text.substring(0, 40)
                        }
                    }
                }
            );
        }
        
        res.status(201).send(newChat._id);
        
    } catch (err) {
        console.log(err);
        res.status(500).send("Error creating chat!");
    }
});


app.listen(port,()=>{
    connect()
    console.log("server is running");
});