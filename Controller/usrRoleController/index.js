const userRoleModal = require('../../Model/userRoleModal/index');

// save user role
const addUserRole=(async(req,res)=>{
  if(!req.body){
    res.status(400);
    res.send("Provide your details");
  }      
  const newUserRole =await userRoleModal.create({
    userrole:req.body.userrole
  })
  res.status(200).json({user:newUserRole});
});

const getUserRoles= (async (req,res)=>{
    userRoleModal.find({},function(error,data){
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

module.exports={addUserRole,getUserRoles}
