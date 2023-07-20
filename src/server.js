
const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB URL you want to attach 

const dbURL = "mongodb+srv://utmalik:qwerty123@cluster0.mzc2yil.mongodb.net/?retryWrites=true&w=majority";

const FoodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    calories:{
        type:Number,
        default:0,
        validate(value){
            if(value <0){
                throw new Error("Negative calores are not possible");
            }
        }
    },
    foodType:{
        type:String,
        enum:["Healthy", "UnHeality"] 
    }
});

const Food = mongoose.model("Food", FoodSchema);

const food={
    name:"Subway",
    calories:-10
};

const newFood = new Food(food);

newFood.save()
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})







app.get("/", (req,res)=>{
    res.send("Hello from server");
})

app.get("/about", (req,res)=>{
    res.send(" Hello from about page");
})


app.get("/foods",(req,res)=>{
    
    //query all documents

        // Food.find({name:"burger"})
        // .then(data=>{
        //     res.send(data);
        // })
        // .catch(err=>{
        //     res.status(500).send(err);
        // })

    //   Food.findOne({name:'burger'})  
    //       .then(data=>{
    //         res.send(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send(err);
    //     })

    // Food.findById("64b96109739114e9b1b25a21")
    //           .then(data=>{
    //         res.send(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send(err);
    //     })


    //find all the food items having calories greater than 1000


    // Food.find({calories:{$gte:1500}})
    //           .then(data=>{
    //         res.send(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send(err);
    //     })

   //Find all the foods having calories in range 500-1000


   Food.find({$or:[
     {calories:{$gte:500}},
    {calories:{$lte:1000}}
   ]})
   .then(data=>{
            res.send(data);
        })
        .catch(err=>{
            res.status(500).send(err);
        })


});


mongoose.connect(dbURL,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to DB successfully");
})
.catch((err)=>{
    console.log("Couldn't connect to the database", err);
})









app.listen(3000, ()=>{
    console.log("Server is up and running on PORT 3000");
})