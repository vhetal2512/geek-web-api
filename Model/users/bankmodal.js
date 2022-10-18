const mongoose =require('mongoose');

const BankDetail=mongoose.Schema({
    salary:{
        type:Number
    },
    bankname:{
        type:String,
        require:true
    },
    accountno:{
        type:Number,
        maxlength:12,
    },
    ifsccode:{
        type:String
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
);

// module.exports=mongoose.model("tbl_user",BankDetail)
