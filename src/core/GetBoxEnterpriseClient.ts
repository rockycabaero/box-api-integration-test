import GetBoxAppAuthClient from "./GetBoxAppAuthClient";

export default function GetBoxEnterPriseClient() {
  const appAuthClient = GetBoxAppAuthClient();
  return appAuthClient.enterprise;
}
