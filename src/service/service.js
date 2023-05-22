const loginService = async (login, senha)=>{

    const resp = await fetch("http://localhost:4000/usuario")

    if(resp.ok){

        const us = await resp.json()
        //resp.json().then((dt)=>{ console.log(dt)})
        console.log(us)
        us.forEach((u, idx) => {
            if(u.login === login && u.senha === senha){
                return u;
            }
        }); 

        return null
    }else{
        return null
    }


}
export {loginService}
