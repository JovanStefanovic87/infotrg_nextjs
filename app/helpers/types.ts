export interface LinkData {
  text: string;
  url: string;
}

export interface ContentBlockItem {
  type: 'h2' | 'text' | 'image' | 'devider' | 'list' | 'paragraph1' | 'paragraph2' | 'hr';
  content?: string;
  url?: string | string[];
  image?: string[];
  listContent?: { type: 'paragraph1' | 'paragraph2'; text: string; amount: string }[];
  list?: string[];
}

export interface ContentBlocksData {
  [key: string]: ContentBlockItem[];
}

export interface Route {
  label: string;
  href: string;
  icon: string;
  subRoutes: Route[];
}
