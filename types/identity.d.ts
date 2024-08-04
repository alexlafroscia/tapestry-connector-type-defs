declare class Identity {
  static createWithName(name: string): Identity;

  /**
   * The name of the creator. Can be an account’s full name, a bot name, or anything to identify the data and source.
   */
  get name(): string;
  set name(value: string);

  /**
   * The name of the creator. Can be an account’s full name, a bot name, or anything to identify the data and source.
   */
  get username(): string | undefined;
  set username(value: string);

  /**
   * A unique URI for the creator on the Internet. Can be an individual’s account page, bot, or other type of creator. Will be used to show details for the creator if the URI can be converted to a browsable URL.
   */
  get uri(): string | undefined;
  set uri(value: string);

  /**
   * A string containing the URL for the creator’s avatar on the Internet. If no avatar is specified a generic image will be displayed in the timeline.
   */
  get avatar(): string | undefined;
  set avatar(value: string);
}
