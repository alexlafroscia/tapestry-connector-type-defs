import "./attachment";

declare class Item {
  static createWithUriDate(uri: string, date: Date): Item;

  /**
   * The title.
   */
  get title(): string | undefined;
  set title(value: string);

  /**
   * Text with HTML formatting that will be displayed for the post. See the end of this document for how this content and its formatting is used.
   */
  get body(): string | undefined;
  set body(value: string);

  /**
   * Adds a content warning to the item and blurs any attachments.
   */
  get contentWarning(): string | undefined;
  set contentWarning(value: string);

  /**
   * The creator of the content.
   */
  get author(): Identity | undefined;
  set author(value: Identity);

  /**
   * Media and link attachments for the content
   *
   * Note: If the `provides_attachments` configuration parameter is not set or `false`, attachments will be generated automatically using the elements of the `body` HTML. Inline images and videos will result in media attachments, and the first link in the first paragraph will be checked as a link attachment.
   */
  get attachments(): Array<Attachment> | undefined;
  set attachments(value: Array<Attachment>);

  /**
   * This property contains a dictionary of name and URL pairs. Shortcodes are used to process any content in the {@link Item} or the author {@link Identity}. Text that uses the `:shortcode:` convention will be replaced by an image at display.
   *
   * Shortcode tokens must not contain spaces or additional colons: using `:my fancy code:` or `:what:the:hell:` is invalid and will be ignored.
   *
   * @example <caption>Configuring shortcodes used to process the body</caption>
   * item.body = "<p>THE :ONE: AND ONLY :CHOCK: WAS HEAR</p>";
   * item.shortcodes = { "ONE": "https://example.com/one.jpg", "CHOCK": "https://chocklock.com/favicon.ico" };
   */
  get shortcodes(): Record<string, string> | undefined;
  set shortcodes(value: Record<string, string>);

  get annotations(): Array<Annotation> | undefined;
  set annotations(value: Array<Annotation>);
}

/**
 * An {@link Item} can have annotations that indicates how the content arrived in the timeline. It can be used for boosts, replies, reposts, reblogs, or any other type of reference.
 *
 * @example
 * const text = "CHOCK STAR";
 * const annotation = Annotation.createWithText(text);
 * annotation.icon = "https://chocklock.com/favicon.ico";
 * annotation.uri = "https://chocklock.com";
 *
 * item.annotations = [annotation];
 */
declare class Annotation {
  static createWithText(text: string): Annotation;

  /**
   * The text for the annotation. It can be anything, but will be most useful to the user as something like `"@chockenberry Boosted"`.
   */
  get text(): string;
  set text(value: string);

  /**
   * A string containing a URL for the annotation’s icon. If no icon is specified only the text will be displayed in the timeline.
   */
  get icon(): string | undefined;
  set icon(value: string);

  /**
   * A URI with more information about the annotation. For things like boosts/reposts/reblogs that are done by an account the user follows, a link to the account listed in the annotation would be appropriate.
   */
  get uri(): string | undefined;
  set uri(value: string);
}
