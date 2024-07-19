import { useMutation, useQueryClient } from "@tanstack/react-query";
import { emailRecovery as emailRecoveryApi } from "../authentication/userAuth";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export default function useEmailRecovery() {
  const queryClient = useQueryClient();
  //   const navigate = useNavigate();

  const { mutate: emailRecovery, status } = useMutation({
    mutationFn: (obj) => emailRecoveryApi(obj),
    onSuccess: (user) => {
      queryClient.setQueryData(["password"], user?.user);
      toast.success("Email confirmation sent to email...Check your email!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { emailRecovery, status };
}
