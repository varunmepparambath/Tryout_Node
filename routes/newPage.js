var express=require('express');
var router=express.Router();



router.post('/',function(req,res){
    let fname=req.body.fname;
    let sname=req.body.sname;
    console.log(fname+sname);
    res.render('newPage',{text:(fname+' '+sname)});
})



module.exports=router;



