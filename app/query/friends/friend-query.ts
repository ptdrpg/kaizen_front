import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { FriendService } from "~/services/friends/friend-service";
import type { ConfirmFriendRequestType } from "~/types/friends.type";
import { QUERY_KEY } from "~/utils/app-constants";

const friendService = new FriendService();

export const useGetAllFriend = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY.friends.all, id],
    queryFn: () => friendService.getAllFriends(id),
  })
}

export const useGetFriendRequest = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY.friends.request, id],
    queryFn: () => friendService.getFriendRequest(id),
  })
}

export const useConfirmFriendRequest = (id: string, usrId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => friendService.confirmRequest(id),
    onSuccess: (data: ConfirmFriendRequestType)=> {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.friends.request, usrId] });
      queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.friends.all, usrId] });

    },
    onError: (error)=> {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(
          (axiosError.response?.data.message ?? "Erreur inconnue")
      );
    }
  })
}
