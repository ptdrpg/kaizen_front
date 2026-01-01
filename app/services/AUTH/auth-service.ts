import type { dynamiqueLoginType, logoutType, SecureUserRes } from "~/types/user-auth.type";
import { AUTH_CONST } from "~/utils/app-constants";
import { apiService } from "../custom-axios";
import { setUserDataToLocalStorage } from "~/utils/local-storage.utils";
import { toast } from "sonner";

export class AuthService {
  login = async (username: string, password: string): Promise<SecureUserRes> => {
    const response = await apiService.post(AUTH_CONST.loginEndpoint, {
      username,
      password,
    });

    if (response.status === 200) {
      setUserDataToLocalStorage(response.data)
    }

    return response.data;
  };

  register = async (data: dynamiqueLoginType): Promise<SecureUserRes> => {
    const response = await apiService.post(AUTH_CONST.registerEndpoint, data);

    if (response.status === 201) {
      setUserDataToLocalStorage(response.data)
    }

    return response.data;
  };

  logout = async (id: string): Promise<logoutType> => {
    const response = await apiService.put(`${AUTH_CONST.logoutEndpoint}/${id}`);
    toast.success(response.data.message);
    return response.data;
  };
}