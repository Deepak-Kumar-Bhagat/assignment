import users from "./user";

export const LoginCheck=async (data)=>{

    let response= users.find((user) => user.email === data.email && user.password === data.password);
    console.log(response);
    if(response){
      return {
        data:{name:response.name,
        age:response.age,
        role:response.role},
        status:true
        }
    }else{
        return {
            status:false
        }
    }
}