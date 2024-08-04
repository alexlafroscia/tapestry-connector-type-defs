import "./identity";

declare interface AspectSize {
  height: number;
  width: number;
}

declare interface FocalPoint {
  x: number;
  y: number;
}

/**
 * {@link Item}s can also have media attachments. Photos, videos, and audio are commonly available from APIs and other data sources, and this is how you get them into the timeline. They will be displayed under the HTML content.
 *
 * @example
 * const attachment = MediaAttachment.createWithUrl(url);
 * attachment.mimeType = "image/gif";
 * attachment.text = "Yet another cat on the Internet.";
 * attachment.aspectSize = {width: 300, height: 400};
 * attachment.focalPoint = {x: 0, y: 0};
 *
 * item.attachments = [attachment];
 */
declare class MediaAttachment {
  static createWithUrl(url: string): MediaAttachment;

  /**
   * A string containing the URL for the media on the Internet.
   */
  get url(): string;
  set url(value: string);

  /**
   * A string containing the URL for a lower resolution copy of the media. This is assumed to be an image file.
   */
  get thumbnail(): string | undefined;
  set thumbnail(value: string);

  /**
   * A string that lets Tapestry know what kind of media is being attached. Currently supported types are "image", "video", and "audio". A subtype, such as "jpeg", "png", or "gif" can be supplied, but does not affect how the media is displayed.

If this value isn't provided, the file name extension for {@link MediaAttachment#url} will be used. If there is no file extension, "image" will be assumed.
   */
  get mimeType(): string | undefined;
  set mimeType(value: string);

  /**
   * A string that provides a placeholder image.
   */
  get blurhash(): string | undefined;
  set blurhash(value: string);

  /**
   * A string that describes the media (for accessibility)
   */
  get text(): string | undefined;
  set text(value: string);

  /**
   * An object with `width` and `height` properties. The values are used to optimize the media placement in the timeline.
   */
  get aspectSize(): AspectSize | undefined;
  set aspectSize(value: AspectSize);

  /**
   * An object with `x` and `x` properties. The values are used to center media in the timeline. If no values are specified, the center at `(0, 0)` is assumed.
   */
  get focalPoint(): FocalPoint | undefined;
  set focalPoint(value: FocalPoint);
}

declare class LinkAttachment {
  static createWithUrl(url: string): LinkAttachment;

  /**
   * A string containing the URL for the link on the Internet.
   */
  get url(): string;
  set url(value: string);

  /**
   * The type of link, typically an Open Graph [`og:type`](https://ogp.me/#types).
   */
  get type(): string | undefined;
  set type(value: string);

  /**
   * The title for the link, typically an Open Graph [`og:title`](https://ogp.me/#metadata).
   */
  get title(): string | undefined;
  set title(value: string);

  /**
   * The subtitle for the link, typically an Open Graph [`og:description`](https://ogp.me/#optional).
   */
  get subtitle(): string | undefined;
  set subtitle(value: string);

  /**
   * The site name for the link, typically an Open Graph [`og:site_name`](https://ogp.me/#optional).
   */
  get siteName(): string | undefined;
  set siteName(value: string);

  /**
   * The author's name, typically as [HTML author metadata](https://www.w3.org/TR/2011/WD-html5-author-20110809/the-meta-element.html#meta-author).
   */
  get authorName(): string | undefined;
  set authorName(value: string);

  /**
   * An image for the link, typically the Open Graph [`og:image`](https://ogp.me/#metadata).
   */
  get image(): string | undefined;
  set image(value: string);

  /**
   * A URL for the author, typically from [`fediverse:creator`](https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/).
   */
  get authorProfile(): string | undefined;
  set authorProfile(value: string);

  /**
   * A string that provides a placeholder image.
   */
  get blurhash(): string | undefined;
  set blurhash(value: string);

  /**
   An object with `width` and `height` properties, typically from Open Graph [`og:image:width`](https://ogp.me/#structured) and [`og:image:height`](https://ogp.me/#structured).
   */
  get aspectSize(): AspectSize | undefined;
  set aspectSize(value: AspectSize);
}

declare type Attachment = MediaAttachment | LinkAttachment;

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
