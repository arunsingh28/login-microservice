import axios from 'axios'


const apiCall = async(url:string,email:string)=>{
  await (await axios.post(url)).data
}


export default apiCall