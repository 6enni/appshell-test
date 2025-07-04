import React, { useEffect, useMemo, useState } from "react";
interface UserContextType {
  userId: string;
  setUserId: (val: string) => void;
  username: string;
  setUsername: (val: string) => void;
  orgId: string;
  setOrgId: (val: string) => void;
  userApiCallCompleted: boolean;
  setUserApiCallCompleted: (val: boolean) => void;
}

export const UserContext = React.createContext<UserContextType>({
  userId: "",
  orgId: "",
  username: "",
  userApiCallCompleted: false,
  setUserId: () => ({}),
  setOrgId: () => ({}),
  setUsername: () => ({}),
  setUserApiCallCompleted: () => ({})
});

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userId, setUserId] = useState<string>("");
  const [orgId, setOrgId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [userApiCallCompleted, setUserApiCallCompleted] =
    useState<boolean>(false);

  useEffect(() => {
    console.log("UserContextProvider: Initializing user data...");
    setInterval(() => {
        console.log("UserContextProvider: Simulating API call completion...");
        const rand = Math.random().toString(10).substring(2, 15)
        console.log("UserContextProvider: Generated random ID:", rand);
        setUserId('user-' + rand);
        setOrgId('org-' + rand);
        setUsername("testuser");
    }, (1000*60)); // Simulate an API call delay
  }, []);

  const value = useMemo(
    () => ({
      userId,
      setUserId,
      username,
      setUsername,
      orgId,
      setOrgId,
      userApiCallCompleted,
      setUserApiCallCompleted
    }),
    [
      userId,
      setUserId,
      orgId,
      setOrgId,
      username,
      setUsername,
      userApiCallCompleted,
      setUserApiCallCompleted
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
export const useUserContext = () => React.useContext(UserContext);
