const DesignationModal = require("../../Model/designationModal/designation");

const setDesignation =(async (req, res) => {
   
    if (!req.body) {
        res.status(400);
        res.send("Provide your details");
    }
    const newDesignation = await DesignationModal.create({
        designationname:req.body.designationname
    });
    res.status(200).json({user: newDesignation});

});



//get all designation:
const getAllDesignation= (async (req,res)=>{
    DesignationModal.find({},function(error,data){
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

module.exports = { setDesignation,getAllDesignation};
