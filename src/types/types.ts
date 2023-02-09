export interface Product {
  id: number;
  name: string;
  attributes: Attribute[];
}

export interface Attribute {
  code: string;
  name: string;
  color?: string;
  size?: {
    width: number;
    height: number;
  };
  weight?: number;
}

export interface Nav extends Omit<Product, 'attributes'> {}
