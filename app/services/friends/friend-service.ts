import type { FriendRequestType, FriendsType } from "~/types/friends.type";
import { apiService } from "../custom-axios";
import { SECURITY_CONST } from "~/utils/app-constants";

export class FriendService {
  getAllFriends = async (id: string): Promise<FriendsType[]> => {
    const response = await apiService.get(`${SECURITY_CONST.FriendsEndpoint}/${id}`);
    
    return response.data.data;
  }

  getFriendRequest = async (id: string): Promise<FriendRequestType[]> => {
    const response = await apiService.get(`${SECURITY_CONST.FriendsEndpoint}/invit/${id}`);
    console.log(response);
    
    return response.data.data;
  }
}
