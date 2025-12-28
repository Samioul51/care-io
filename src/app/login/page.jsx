import Login from "@/Components/Login/Login";
import { Suspense } from "react";

const LoginPage=()=> {
  return (
    <Suspense fallback={null}>
      <Login></Login>
    </Suspense>
  );
}

export default LoginPage;