import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../authentication/userAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const {
    mutate: updateUser,
    isLoading: isUpdating,
    status,
  } = useMutation({
    mutationFn: (userObj) => updateUserApi(userObj),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("Provide a valid email and password");
    },
  });
  return { updateUser, isUpdating, status };
}
