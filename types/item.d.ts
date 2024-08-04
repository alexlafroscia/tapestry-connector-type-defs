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
}
