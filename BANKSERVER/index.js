const express = require('express')
const ds = require('./dataservice')
const depo=require('./depositservice')
const jwt=require('jsonwebtoken')
const cors = require('cors')
const { PromiseProvider } = require('mongoose')
var bodyParser = require('body-parser')
// const { Data } = require('./db')

//app creation
const app = express()
app.use(express.json())

//resolving http req
app.get('/',(req,res)=>{
    res.send("This is a get method")
})
const appMiddleware=(req,res,next)=>{
    console.log("Application Specific Middleware")
    next()
}
// using middleware
app.use(appMiddleware)

//Cross Origin Resource Sharing
// used to connect angular with expressjs/backend

app.use(cors({
    origin:'http://localhost:4200'
}))

app.post('/',(req,res)=>{
    res.send("This is a sample post method")
})


// app.post('/register',(req,res)=>{
//     const result = ds.register(req.body.acno,req.body.password,req.body.uname)
//     if(result){
//         res.status(result.statusCode).json(result)
//     }
// })

// register api call
app.post('/register',(req,res)=>{
   ds.register(req.body.acno,req.body.pswd,req.body.name)
   .then(Data=>{
    if(Data){
        res.status(Data.statusCode).json(Data)
    }
   })
})
app.post('/login',(req,res)=>{
    ds.login(req.body.acno,req.body.pswd)
   .then(log=>{
       if(log){
         res.status(log.statusCode).json(log)
       }
      })
})

// app.post('/login',(req,res)=>{
//     const result = ds.login(req.body.acno,req.body.password)
//     if(result){
//         res.status(result.statusCode).json(result)
//     }
// })


const jwtokenmi =((req,res,next)=>{
    try{
    const token=req.headers["my-access-token"]
    const data=jwt.verify(token,'mysecretkey@123')
    if(req.body.acno==data.currentaccountnumber){
        next()
    }else{
        
    }
    }catch{
        return{
    statusCode:400,
    status:false,
    message:"please login"
        }
    }
})


// app.post('/deposit',jwtokenmi,(req,res)=>{
//     const result = depo.deposit(req.body.acno,req.body.pswd,req.body.amt)
//     if(result){
//         res.status(result.statusCode).json(result) 
        
//     }
// })
app.post('/deposit',jwtokenmi,(req,res)=>{
    depo.deposit(req.body.acno,req.body.pswd,req.body.amt)
    .then(dp=>{
      if(dp){
        res.status(dp.statusCode).json(dp) 
        
    }  
    })
    
})

// app.post('/withdraw',jwtokenmi,(req,res)=>{
//     const result = depo.withdraw(req.body.acno,req.body.pswd,req.body.amt)
//     if(result){
//         res.status(result.statusCode).json(result) 
//     }
// })

app.post('/withdraw',jwtokenmi,(req,res)=>{
    depo.withdraw(req.body.acno,req.body.pswd,req.body.amt)
    .then(wt=>{
      if(wt){
        res.status(wt.statusCode).json(wt) 
        
    }  
    })
})

app.post('/transaction',(req,res)=>{
     depo.transaction(req.body.acno)
     .then(result=>{
        if(result){
        res.status(result.statusCode).json(result) 
          } 
     })
    
 
})

app.delete('/deleteacc/:acno',(req,res)=>{
    depo.deleteacc(req.params.acno)
    .then(del=>{
        if(del){
            res.status(del.statusCode).json(del)
        }
    })
})


app.listen(3000,()=>{
    console.log("Server listening to port number 3000")
})
