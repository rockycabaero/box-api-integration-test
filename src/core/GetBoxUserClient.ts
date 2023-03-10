import GetBoxAppAuthClient from "./GetBoxAppAuthClient";

export default function GetBoxUserClient(userId: string) {
  const client = GetBoxAppAuthClient();
  client.asUser(userId);
  return client;
}
