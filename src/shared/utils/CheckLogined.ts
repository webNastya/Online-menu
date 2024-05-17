function CheckLogined(){
    console.log("CheckLogined")
    
    if (localStorage.getItem('token'))
        return true

    return false
}

export default CheckLogined
