const db = require('./dataservice')
// const { Data } = require('./db')
const dab = require('./db')


// const deposit = (acno, pswd, amt) => {
//     datab = db.database
//     if (acno in datab) {
//         if (pswd == datab[acno]["password"]) {
//             datab[acno]["Balance"] = Number(datab[acno]["Balance"]) + Number(amt)
//             datab[acno]['Transaction'].push({
//                 "Mode": "Online",
//                 "Type": "Deposit",
//                 "Amount": amt
//             })
//             console.log("DATABASE:", datab)
//             return {
//                 statusCode: 200,
//                 status: true,
//                 message: `Amount ${amt} added successfully,Current account balance is ${datab[acno]["Balance"]}`,
//                 "transaction":datab[acno]['Transaction']
//             }
//         } else {
//             return {
//                 statusCode: 400,
//                 status: false,
//                 message: "Check password"
//             }
//         }
//     } else {
//         return {
//             statusCode: 400,
//             status: false,
//             message: "No such account"
//         }
//     }
// }

const deposit = (acno, pswd, amt) => {
    amount = parseInt(amt) //number(amt)
    return dab.Data.findOne({ "acno": acno, "pswd": pswd })
        .then(abc => {
            if (abc) {
                console.log("abc", abc)
                abc.balance += amount
                abc.Transactions.push({
                    "amount": amount,
                    "type": "deposit",
                    "status": "success",
                    "Time":new Date()
                  
                    
                })
                abc.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: `Rupees ${amount} credited by your account ${acno},your current account balance is ${abc.balance}`
                }
            } else {
                return {
                    statusCode: 402,
                    status: false,
                    message: "your transaction failed"
                }
            }
        })
}




const withdraw = (acno, pswd, amt) => {
    amount = parseInt(amt) //
    return dab.Data.findOne({ "acno": acno, "pswd": pswd })
        .then(data => {
            if (data) {
               if( amount<data.balance){
                // console.log("abc", abc)
                data.balance= data.balance-amount
                data.Transactions.push({
                    "amount": amount,
                    "type": "withdraw",
                    "status": "success",
                   
                })
               
                data.save()
                return {
                    statusCode: 200,
                    status: true,
                    message: `Rupees ${amount} debited by your account ${acno},your current account balance is ${data.balance}`
                }
            }else {
                return {
                    statusCode: 400,
                    status: false,
                    message: "insufficient balance"
                }
            } 
            }
        })
}

const transaction = (acno) => {
    return dab.Data.findOne({ "acno": acno})
    .then(tra => {
        if(tra){
        return {
            statusCode: 200,
            status: true,
            transaction:tra.Transactions
        }
        }
      })
}

const deleteacc=(acno)=>{
    return dab.Data.deleteOne({acno})
    .then(del=>{
        if(!del){
            return{
                statusCode:400,
                status:false,
                message:"operation failed"
            }
        }else{
            return{
                statusCode:200,
                status:true,
                message:`your ${acno} deleted successfully`
            }
        }
    })
}

// const withdraw = (acno, pswd, amt) => {
//     datab = db.database
//     if (acno in datab) {
//         if (pswd == datab[acno]["password"]) {
//             if (Number(amt) < Number(datab[acno]["Balance"])) {
//                 datab[acno]["Balance"] = Number(datab[acno]["Balance"]) - Number(amt)
//                 datab[acno]['Transaction'].push({
//                     "Mode": "Online",
//                     "Type": "Withdraw",
//                     "Amount": amt
//                 })
//                 console.log("DATABASE:", datab)
//                 return {
//                     statusCode: 200,
//                     status: true,
//                     message: `Amount ${amt} withdrawed successfully,Current account balance is ${datab[acno]["Balance"]}`,
//                     "transaction": datab[acno]['Transaction']
//                 }
//             } else {
//                 return {
//                     statusCode: 400,
//                     status: false,
//                     message: "Insufficient balance"
//                 }
//             }
//         } else {
//             return {
//                 statusCode: 400,
//                 status: false,
//                 message: "Incorrect password"
//             }
//         }
//     } else {
//         return {
//             statusCode: 400,
//             status: false,
//             message: "No such account"
//         }
//     }
// }


// const transaction = (acno) => {
//     datab = db.database
//     if (acno in datab) {
//         return {
//             statusCode: 200,
//             status: true,
//             transaction: datab[acno]['Transactions']
//         }
//     }
// }






module.exports = { deposit, withdraw, transaction, deleteacc }