const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const connnetDB = async()=>{
       

   try {



        //local db connection
        // try {
        //     await mongoose.connect('mongodb://localhost:27017/user', {
        //         useNewUrlParser: true,
        //         useUnifiedTopology: true
        //       });
        //       console.log("MongoDB Connected...");
              

        // } catch (err) {
        //        console.error(err.message);
        //        process.exit(1);
        // }



       const con = await mongoose.connect(process.env.URL,{
           useNewUrlParser: true,
           useUnifiedTopology: true 
       })

       console.log(`MongoDB Connected ${con.connection.host}`);
       
   } catch (error) {
       console.log(error.message );
       process.exit()
   }

}

module.exports = connnetDB