// Global type declarations

// jQuery type declaration
interface JQuery {
  (selector: string): JQuery;
  (element: Element): JQuery;
  (elements: Element[]): JQuery;
  length: number;
  each(callback: (index: number, element: Element) => void): JQuery;
  data(key: string): any;
  css(property: string, value?: string | number): JQuery | string;
  hasClass(className: string): boolean;
  addClass(className: string): JQuery;
  removeClass(className?: string): JQuery;
  slideUp(duration?: number | string): JQuery;
  slideDown(duration?: number | string): JQuery;
  find(selector: string): JQuery;
  on(event: string, handler: (event: Event) => void): JQuery;
  off(event: string, handler?: (event: Event) => void): JQuery;
  html(content?: string): JQuery;
  carousel(action: "cycle" | "pause" | "next" | "prev" | "dispose"): JQuery;
  carousel(action: number): JQuery;
}

interface Window {
  $?: JQuery;
}
