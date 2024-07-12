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

export interface BasicInformation {
  id?: string;
  title?: string;
  description: string;
  coverImage?: string;
}

export interface ListOfLinks {
  id: string;
  type: 'H2BoldCenter' | 'h3' | 'H3BoldCenter' | 'h4' | 'text' | 'divider' | 'list' | 'p';
  text: string;
}

export interface ContentBlockItem {
  type:
    | 'h1'
    | 'h2'
    | 'H2BoldCenter'
    | 'h3'
    | 'H3BoldCenter'
    | 'h4'
    | 'text'
    | 'image'
    | 'imageBlockWithDescription'
    | 'divider'
    | 'list'
    | 'paragraph1'
    | 'paragraph2'
    | 'p'
    | 'hr';
  content?: string;
  url?: string | string[];
  image?: string[];
  items?: ContentBlockItem[];
  listContent?: Array<{
    type: 'paragraph1' | 'paragraph2';
    text: string;
    amount?: string;
    subitems?: Subitem[];
    listStyle?: 'number' | 'alphabet';
  }>;
  list?: string[];
  paddingLeft?: number | string;
  align?: 'left' | 'center' | 'right';
  weight?: 'normal' | 'bold' | 'semibold';
  size?: 'sm' | 'md' | 'lg';
  marginBottom?: string;
  marginY?: string;
}

export interface ContentBlocksData {
  [key: string]: ContentBlockItem[];
}

export interface Route {
  label: string;
  href: string;
  icon: string;
  subRoutes?: Route[];
}

export interface InvesticioniFondLinksData {
  id: string;
  label: string;
  listOrder: string;
  amount: string;
}

export interface PoslovnaSaradnjaData {
  [key: string]: BasicInformation[];
}

export interface FullDescriptionDataLinksData {
  id: string;
  label: string;
}
