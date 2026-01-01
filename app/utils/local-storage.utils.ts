import type { SecureUserRes } from "~/types/user-auth.type";
import { AUTH_CONST } from "./app-constants";

export function setUserDataToLocalStorage(data: SecureUserRes) {
    if (typeof window !== "undefined") {
        localStorage.setItem(AUTH_CONST.storageUserDataKeyName, JSON.stringify(data));
    }
}

export function getUserDataToLocalStorage() {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(AUTH_CONST.storageUserDataKeyName);
        return data ? JSON.parse(data).data : null;
    }
}

export function cleanLocalStorage() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(AUTH_CONST.storageUserDataKeyName);
    }
}
