import { Auth0Client } from "@auth0/auth0-spa-js";
import { auth0Config } from "../../../config";

export default async function callback(req, res) {
  const auth0Client = new Auth0Client({
    client_id: auth0Config.clientId,
    domain: auth0Config.domain,
  });

  try {
    await auth0Client.handleRedirectCallback(req.url);
    res.writeHead(302, { Location: "/dashboard/analytics" });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).end("Authentication callback failed.");
  }
}
