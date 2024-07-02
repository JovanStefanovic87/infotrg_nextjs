export interface LinkData {
  text: string;
  url: string;
}

export interface Subitem {
  type: 'paragraph2';
  text: string;
  amount?: string;
  subitems?: Subitem[];
  listStyle?: 'number' | 'alphabet';
}

export interface ContentBlockItem {
  type:
    'h1' 
    | 'h2'
    | 'H2BoldCenter'
    | 'h3'
    | 'h4'
    | 'text'
    | 'image'
    | 'divider'
    | 'list'
    | 'paragraph1'
    | 'paragraph2'
    | 'hr';
  content?: string;
  url?: string | string[];
  image?: string[];
  listContent?: Array<{
    type: 'paragraph1' | 'paragraph2';
    text: string;
    amount?: string;
    subitems?: Subitem[];
    listStyle?: 'number' | 'alphabet';
  }>;
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

export interface InvesticioniFondLinksData {
  id: string;
  label: string;
  listOrder: string;
  amount: string;
}
