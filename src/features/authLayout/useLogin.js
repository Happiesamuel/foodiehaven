import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginApi } from "../authentication/userAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, status } = useMutation({
    mutationFn: (data) => LoginApi(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
      toast.success("You have logged in successfully!");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { login, status };
}
export default useLogin;
