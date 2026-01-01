import type { ConfirmFriendRequestType, FriendRequestType, FriendsType, SendFriendRequestType } from "~/types/friends.type";
import { apiService } from "../custom-axios";
import { AUTH_CONST } from "~/utils/app-constants";

export class FriendService {
  getAllFriends = async (id: string): Promise<FriendsType[]> => {
    const response = await apiService.get(`${AUTH_CONST.FriendsEndpoint}/${id}`);
    
    return response.data.data;
  }

  getFriendRequest = async (id: string): Promise<FriendRequestType[]> => {
    const response = await apiService.get(`${AUTH_CONST.FriendsEndpoint}/invit/${id}`);
    
    return response.data.data;
  }

  confirmRequest = async (id: string): Promise<ConfirmFriendRequestType> => {
    const response = await apiService.put(`${AUTH_CONST.FriendsEndpoint}/invit/${id}`);
    return response.data.data;
  }

  searchPeople = async (username: string, id: string): Promise<FriendsType[]> => {
    const response = await apiService.get(`${AUTH_CONST.FriendsEndpoint}/search/${id}?username=${username}`);
    
    return response.data.data;
  }

  sendRequest = async (data: SendFriendRequestType): Promise<ConfirmFriendRequestType> => {
    const response = await apiService.post(AUTH_CONST.FriendsEndpoint, data);

    return response.data.data;
  }

  declineRequest = async (invitId: string): Promise<ConfirmFriendRequestType> => {
    const response = await apiService.delete(`${AUTH_CONST.FriendsEndpoint}/invit/${invitId}`);

    return response.data.data;
  }
}
