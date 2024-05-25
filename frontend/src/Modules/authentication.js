import Cookies from 'js-cookie'
import axios from 'axios'
import backendwebsite from "../backendwebsite.json"


export let linkauthenticate=()=>{
   
}

export function loginauthenticateuser(un,pass){ 
    authenticating(un,pass)  
}


export let setuser = (loginusername,loginpassword)=>{
    
    alert("Setting user")
    Cookies.set('login',"true" )
    Cookies.set('username',loginusername )
    Cookies.set('password', loginpassword) 
   
}

export let removeuser=()=>{

    alert("removing user")

    Cookies.set('login',"false" )
    Cookies.set('username',"" )
    Cookies.set('password', "") 

}



let authenticating=async(un,pass)=>{
    let flag=1
    axios.get(backendwebsite[0].backendwebsite+`/users/admin`)
    .then(res => {
        res.data.forEach(e=>{
            if(e.username==un && e.password==pass )
            {  
                alert("matched")
                setuser(un,pass)
                flag=0
            }

        })              
    })
    
    alert(flag)
    if(flag==1)
    {
        removeuser()
    }

}


 