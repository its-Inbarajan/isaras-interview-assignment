// Hero section types

export type Typefeatures = {
  text: string;
  svg: React.ReactElement;
};

// eco-system types

export interface IContentList {
  icon: string;
  title: string;
  des: string;
}

export type TContent = {
  image: string;
  text: string;
  highlightText: string;
  description: string;
  list: IContentList[];
};

export interface ITabs {
  label: string;
  value: string;
  content: TContent;
}

// features section

export type Tfeatures = {
  title: string;
  des: string;
  image: string;
};

export type Testmonials = {
  name: string;
  position: string;
  image: string;
  quote: string;
};

export type Price = {
  planName: string;
  tagline: string;
  price: string;
  billingDetails: string;
  buttonText: string;
  disclaimer: string;
  description: string;
  features: string[];
};

export type Contact = {
  text: string;
  icon: string;
  type: "phone" | "mail";
};
