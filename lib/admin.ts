import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dp4hK6NlCABOGW6cIjtgr6WA5T"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
