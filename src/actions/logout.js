import { redirect } from "react-router-dom";
import { toast } from "material-react-toastify";

 export async function logoutAction(){

    toast.success("You've deleted your account!")

    return redirect("/");
 }