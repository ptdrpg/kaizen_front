
export const BASE_URL = "http://localhost:4400";

export const SECURITY_CONST = {
  loginEndpoint: "/api/v1/login",
  registerEndpoint: "/api/v1/register",
  logoutEndpoint: "/api/v1/logout",
  refreshTokenEndpoint: "/api/v1/refresh",
  FriendsEndpoint: "/api/v1/friends",
  storageUserDataKeyName: "userData",
};

export const QUERY_KEY = {
  friends: {
    all: ["friends"] as const,
    request: ["request"] as const,
    search: ["search"] as const,
    add: ["add"] as const,
  }
}
