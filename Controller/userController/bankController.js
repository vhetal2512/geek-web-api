const BankModal =require('../../Model/users/bankmodal')

const setBankDetails =(async (req, res) => {
   
    if (!req.body) {
        res.status(400);
        res.send("Provide your details");
    }
    const newBankDetail = await BankModal.create({
        salary:req.body.salary,
        bankname:req.body.bankname,
        accountno:req.body.accountno,
        ifsccode:req.body.ifsccode
    });
    res.status(200).json({user: newBankDetail});
    res.send("data insert");

});



//get all designation:
const getAllDesignation= (async (req,res)=>{
    BankModal.find({},function(error,data){
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

module.exports = { setBankDetails,getAllDesignation};
