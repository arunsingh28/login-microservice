import axios from 'axios'


const apiCall = async(url:string,payload:string)=>{
   const call = fetch('http://localhost:80'+url,{
     method: 'post',
     headers: {
       'content-type': 'application/json'
     },
     body: payload
   })
}


export default apiCall