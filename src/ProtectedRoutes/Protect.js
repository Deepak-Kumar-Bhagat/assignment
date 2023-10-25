import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";

function Protect({children, ...rest}) {
  let user=JSON.parse(localStorage.getItem('user'));
  console.log(user);
    return (
        <>
       {user?<Outlet/>:<Navigate to="/"/>}
        </>
    )
}

export default Protect