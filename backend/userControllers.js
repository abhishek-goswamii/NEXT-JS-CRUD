const { mongoose } = require("mongoose")
const User = require("./userModel")


const createUser = async(req,res) => {
    
    try {
        
        const {name,email,age,pic} = req.body
        
        if(!name || !email || !age || !pic) {
            res.send("all fields required")
        }

        const check = await User.findOne({email: email})

        if(check){
            res.send("user already exists")
        }

        const usr = await User.create({
                name:name,
                email:email,
                age:age,
                pic:pic
        })

        res.send(usr)

    } catch (error) {
        res.send(error.message)
    }

}

const deleteUser = async(req, res) => {
 

    try {
        
        const {email} = req.body
        
        if(!email){
            res.message("email is required to delete user")
        }
    
        const user = await User.findOneAndDelete({email:email})

        if(user){
            res.send(user)
        }else{
            res.send({"message":"user not found with this email address"})
        }

    } catch (error) {
        res.send(error)   
    }

}

const updateUser = async (req,res) => {
    
    
    try {

        const {id,name,email,age,pic} = req.body
        if(!id)res.send("id cannot be empty")
        if(!name&&!email&&!age&&!pic)req.send("all fields are empty")

        const usr = await User.updateOne(
            {
                _id:id
            },
            {
                $set:{
                    name:name,
                    email:email
                }
            }
        )

        console.log(usr);
        res.send('updated successfully')
        
    } catch (error) {
        res.send(error)
        
    }


}

const allUsers = async (req,res) => {
    try {
        
        const usr = await User.find()
        res.send(usr)

    } catch (error) {
        res.send(error)        
    }
}

module.exports = {createUser,deleteUser,updateUser,allUsers}
