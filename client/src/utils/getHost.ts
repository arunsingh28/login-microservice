const getHost =()=>{
    const host = localStorage.getItem('fallback') 
    if(!host){
        return false
    }
    if(host === undefined || host === ''){
        return false
    }
    else return host
}

export default getHost