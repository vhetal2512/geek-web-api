const mongose=require('mongoose');
const UserRoleSchema=mongose.Schema({
    userrole:{
        type:String,
        unique:true
    }
},
{
    timestamps: true,
    versionKey: false,
});

module.exports=mongose.model("tbl_user_role",UserRoleSchema);