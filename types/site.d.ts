declare global {
  type Site = string;

  // The `site` variable is made available by Tapestry
  declare var site: Site;
}

export {};
