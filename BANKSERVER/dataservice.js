const jwt=require('jsonwebtoken')
const db=require('./db')
database = {
  1000: { acno: 1000, uname: "jish", password: 1000, Balance: 10000, Transaction:[] }
}


// const register = (acno, pswd, uname) => {
//   if (acno in database) {
//     return {
//       statusCode: 422,
//       status: false,
//       message: "User already registered"

//     }
//   } else {
//     database[acno] = {
//       acno,
//       'password': pswd,
//       uname,
//       Balance: 0
//     }
//     console.log("database", database)
//     return {
//       statusCode: 200,
//       status: true,
//       message: "Register successfully"

//     }
//   }
// }


const register = (acno, pswd, name) => {

  return db.Data.findOne({acno})
 .then(Data=>{
  if (Data){
    return {
      statusCode: 422,
      status: false,
      message: "User already registered"

    }
  } else {
    
    const newData = new db.Data( {
      acno,
      pswd,
      name,
      balance:0,
      Transaction:[]
    })
    newData.save() //for saving data into db
    return {
      statusCode: 200,
      status: true,
      message: "Register successfully"

    }
  }
})
}

// const login = (acno,password)=>{
//   if(acno in database){
//     if(password == database[acno]['password']){
//       var username = database[acno]['uname']
//       const token=jwt.sign({
//         currentaccountnumber:acno   
//       },'mysecretkey@123')
//       return{
//         statusCode:200,
//         status:true,
//         message:"Login successfull",
//         username,
//         accountnumber:acno,
//         token
//       }
//     }else{
      
//       return{
//         statusCode:422,
//         status:false,
//         message:"Incorrect password"
//       }
//     }
//   }else{
//     return{
//       statusCode:422,
//         status:false,
//         message:"User does not exist"
//     }
//   }
// }

const login = (acno,pswd)=>{
   return db.Data.findOne({"acno":acno,"pswd":pswd})
   .then (Data=>{
    if (Data){
      currentName=Data.name
        const token=jwt.sign({
          currentaccountnumber:acno   
        },'mysecretkey@123')
        return{
          statusCode:200,
          status:true,
          message:"Login successfull",
          accountnumber:acno,
          currentName,
          token
        } 
    }else{
        
        return{
          statusCode:422,
          status:false,
          message:"login failed"
        }
      }
    
      })
    }
  
  


module.exports = { register,login,database }

