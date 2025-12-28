export type FriendsType = {
  id: string;
  username: string;
  isOnline: boolean;
  status: string;
}

export type FriendRequestType = {
  id: string;
  username: string;
}

export type SendFriendRequestType = {
  sender_id: string;
  receiver_id: string;
}

export type ConfirmFriendRequestType = {
  message: string;
  status: number;
}
