const bcrypt = require('bcryptjs');
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const profileModal =require('../../Model/users/profilemodal')
const SECRET_KEY = "User Authentication";
const API_KEY = "GEEKWEB";

// craete users
const setUser = asyncHandler(async (req, res) => {
   
        if (!req.body) {
            res.status(400);
            res.send("Provide your details");
        }
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await profileModal.create({
              name:req.body.name,
              companyemail:req.body.companyemail,
              personalemail:req.body.personalemail,
              contactno:req.body.contactno,
              userrole:req.body.userrole,
              dateofbirth:req.body.dateofbirth,
              gender:req.body.gender,
              designation:req.body.designation,
              dateofjoin:req.body.dateofjoin,
              address: req.body.address,
        });
        res.status(200).json({user: newUser});

});

//set bank detail
const setBankDetails =(async (req, res) => {
    const user = await profileModal.findById(req.params.id);
    const id = parseInt(req.params.id);
    console.log(id,"id::")
    if(user){
        if (!req.body) {
            res.status(400);
            res.send("Provide your details");
        }
        const newBankDetail = await profileModal.findByIdAndUpdate(req.params.id,{
            salary:req.body.salary,
            bankname:req.body.bankname,
            accountno:req.body.accountno,
            ifsccode:req.body.ifsccode
        });
        res.status(200).json({user: newBankDetail});
        res.send("data insert");
    }
});


//get all users:
const getAllUsers=asyncHandler(async (req,res)=>{
    profileModal.find({},function(error,data){
    console.log(data,"::::data::::")
        if(error){
            return res.status(500).send({
                msg: 'Error while finding records',
                data: []
            })
        }else{
            return res.status(200).send({
                msg: 'recods found',
                data: data
            })
        }
})
    
})

//get users by comapnyemail:

const getUser = asyncHandler(async (req, res) => {
    let selectedUser;
    if (req.body.companyemail.includes('@')) {
        selectedUser=  await profileModal.findOne({companyemail:req.body.companyemail});
    } 
    if (!selectedUser) {
        return res.status(404).send("User Not Found");
    }
    const passwordMatched = bcrypt.compare(req.body.password, selectedUser.password);
    if (!passwordMatched) {
        return res.status(400).send("Your password is incorrect");
    }
    const token = jwt.sign({
        id: selectedUser._id,
        companyemail: selectedUser.companyemail,
    }, SECRET_KEY);

    res.status(200).json({user: selectedUser, token});
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await profileModal.findById(req.params.id);
    res.status(200).json(user);
});

//update user api::
const putUsers = asyncHandler(async (req, res) => {
    const user = await profileModal.findById(req.params.id);

    if (!user) {
        res.status(400);
        throw new Error("User Not Found")
    }

    const updatedUser = await profileModal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedUser);
});

//delete user
const deleteUsers = asyncHandler(async (req, res) => {
    const id = req.params.id;

    profileModal.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
});



module.exports = { setUser,getUser,getUserById,putUsers,deleteUsers,getAllUsers,setBankDetails};
