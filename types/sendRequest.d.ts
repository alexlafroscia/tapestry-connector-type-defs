type Method = "GET" | "POST" | "PUT";

/**
 * Sends a request. If configured, a bearer token will be included with the request automatically.
 *
 * The parameters string can contain patterns that will be replaced with values managed by the Tapestry app:
 *
 * - `__ACCESS_TOKEN__`: The access token returned when authenticating with OAuth or JWT.
 * - `__CLIENT_ID__`: The client ID used to identify the connector with the API.
 *
 * For example, if you need to `POST` the client ID, you would use `client=__CLIENT_ID__&foo=1&bar=something`.
 *
 * @param url with the endpoint that will be retrieved.
 * @param method the HTTP method for the request (default is `GET`).
 * @param params the parameters for HTML body of `POST` or `PUT` request. For example: `foo=1&bar=something` (default is `null`)
 * @param extraHeaders will be added to the request (default is `null` for no extra headers)
 */
declare function sendRequest(
  url: string,
  method?: Method,
  params?: string | null,
  extraHeaders?: Record<string, string> | null
): Promise<string>;
