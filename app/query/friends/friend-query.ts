import { useQuery } from "@tanstack/react-query";
import { FriendService } from "~/services/friends/friend-service";
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
