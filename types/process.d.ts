declare global {
  /**
   * Sends any data that’s retrieved to the Tapestry app for display.
   *
   * @param results
   * @param complete a flag that indicates that result collection is complete and can be displayed in the app timeline (default is `true`)
   */
  function processResults(
    results: Array<Item | Identity>,
    complete?: boolean
  ): void;

  /**
   * Sends any error to the Tapestry app for display
   *
   * @param error indicates what went wrong. Will be displayed in the user interface
   */
  function processError(error: Error): void;

  type Verification = {
    /**
     * Used to name the feed. For example, a RSS feed name or a Mastodon account.
     */
    displayName?: string;

    /**
     * An image URL that will be presented alongside the display name.
     */
    icon?: string;

    /**
     * Used to resolve relative URLs. Anything other than the protocol and hostname will be discarded.
     */
    baseUrl?: string;
  };

  /**
   * Sets the parameters for the site and service.
   *
   * When a `string` is provided, it will be used as a `displayName` with an empty `baseUrl` and default `icon`.
   *
   * @param verification
   */
  function processVerification(verification: Verification | string): void;
}

export {};
