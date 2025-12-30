import { useMutation, useQuery, useQueryClient, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { FriendService } from "~/services/friends/friend-service";
import type { ConfirmFriendRequestType, FriendRequestType, FriendsType, SendFriendRequestType } from "~/types/friends.type";
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
      queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.friends.request] });
      queryClient.invalidateQueries({ queryKey: [...QUERY_KEY.friends.all] });
    },
    onError: (error)=> {
      const axiosError = error as AxiosError<{ message: string }>;
      toast.error(
          (axiosError.response?.data.message ?? "Erreur inconnue")
      );
    }
  })
}

export const useSearchPeople = (username: string,id: string, options?: Partial<UseQueryOptions<FriendsType[], Error>>) => {
  return useQuery<FriendsType[]>({
    queryKey: [...QUERY_KEY.friends.search, username],
    queryFn: () => friendService.searchPeople(username, id),
    enabled: !!username?.trim(),
    ...options,
  })
}

export const useSendFriendRequest = () => {
  return useMutation({
    mutationFn: (data: SendFriendRequestType)=> friendService.sendRequest(data),
    onSuccess: () => {
      toast.success("Friends Request succefuly send");
    },
    onError() {
      toast.error("error sending friend Request");
    },
  })
} 
