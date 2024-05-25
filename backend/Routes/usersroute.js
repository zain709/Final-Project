let express=require("express")
let router=express.Router()
let usermodel=require("../Models/users")
var nodemailer = require('nodemailer');

// Forget password

router.get("/generate",async(req,res)=>{

    try {

        let email = req.query.email;
        let username = "Generated_username"
        let password = "Generated_password"+Math.floor(Math.random() * 1000) + 1
        let Email_subject = 'Foret Password ZEDAR_ERP'
        let Email_body = ` Hey!
        Your autogenerated Passoword for ZEDAR-ERP is

                                Username: ${username}
                                Password: ${password}

        `

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'alirazaakhtar9@gmail.com',
            pass: 'yawkvujsmksngubp'
           }
           });
   
           var mailOptions = {
            from: 'alirazaakhtar9@gmail.com',
            to: email,
            subject: Email_subject,
            text: Email_body
           };
   
           transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                 console.log(error);
            } else {
                 console.log('Email sent:' + info.response);
            }
           });


           let autouser=new usermodel({
            username:username,
            password:password,
        })

        let a1=await autouser.save()
        res.send("Created!")
        
        console.log(email)


    } catch (error) {
        res.send(error)
    }

})

// validate user

router.get("/validate", async(req,res) =>{
    

    try {   
        let users = await usermodel.find({ username:req.query.username , password :req.query.password }).exec()
        if(users.length!=0)
        {
         res.send("Validated")
        }
        else
        {
         res.send("Not valid")
        }
    } catch (error) {
        res.send(error)
    }

} )

// get user detials
router.get("/",async(req,res)=>{

    try {
        
        let users = await usermodel.find()
        let arr=[]
        users.forEach((element)=>{
            let item={
                name:element.username,
                description:element.password,
                code:element._id
            }
            arr.push(item)
        })
        res.send(arr)

    } catch (error) {
        res.send(error)
    }

})

//post user
router.post("/",async(req,res)=>{

    try {
            
        let savedb=new usermodel({
            username:req.body.username,
            password:req.body.password,
        })

        let a1=await savedb.save()
        res.send(a1)
     
    } catch (error) {
        res.send(error)
    }

})

// Delete user
router.delete("/:id",async(req,res)=>{

    try {
        
        let admins = await usermodel.findOneAndDelete({_id:req.params.id})
        res.send(admins)

    } catch (error) {
        res.send(error)
    }

})


module.exports=router