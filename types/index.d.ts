import "./identity";
import "./item";
import "./process";
import "./sendRequest";
import "./site";

/**
 * Loads any new data and return it to the app with {@link processResults} or {@link processError}. Variables can be used to determine what to load. For example, whether to include mentions on Mastodon or not.
 */
export type Load = () => void;

/**
 * Determines if a site is reachable and gathers properties for the feed. After {@link processVerification} is called a feed can be saved by a user.
 *
 * The properties returned can be user visible or used internally. An example of the former case is a display name will be used identify the feed. The latter case is a base URL that will be used to handle relative paths in the feed.
 *
 * This function will only be called if `needsVerification` is set to `true` in the connectors’s configuration.
 */
export type Verify = () => void;
