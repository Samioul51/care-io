import Signup from "@/Components/Signup/Signup";
import { Suspense } from "react";

const SignupPage=()=> {
  return (
    <Suspense fallback={null}>
      <Signup></Signup>
    </Suspense>
  );
}

export default SignupPage;