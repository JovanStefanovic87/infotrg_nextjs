export interface ContentBlockItem {
  type: 'text' | 'image';
  content: string | string[];
}

export interface Route {
  label: string;
  href: string;
  icon: string;
  subRoutes: Route[];
}
