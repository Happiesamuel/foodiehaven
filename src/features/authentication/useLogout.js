import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut as logOutApi } from "./userAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, status } = useMutation({
    mutationFn: () => logOutApi(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("You have logged out successfully!");
      navigate("/", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { logout, status };
}
