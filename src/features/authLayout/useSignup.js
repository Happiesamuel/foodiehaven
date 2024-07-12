import { useMutation } from "@tanstack/react-query";
import { SignupApi } from "../authentication/userAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, status } = useMutation({
    mutationFn: (data) => SignupApi(data),
    onSuccess: () => {
      toast.success("You have successfully created an account");
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("Failed to signup");
    },
  });
  return { signup, status };
}
export default useSignup;
