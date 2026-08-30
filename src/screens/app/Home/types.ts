export type CategoryImage = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: unknown | null;
  hash: string;
  url: string;
  ext: string;
  mime: string;
  [key: string]: unknown;
};

export type Question = {
  id: number;
  image_uri: string;
  order: number;
  subtitle: string;
  title: string;
  uri: string;
};

export type Category = {
  createdAt: string;
  id: number;
  image: CategoryImage;
  name: string;
  publishedAt: string;
  rank: number;
  title: string;
  updatedAt: string;
};

export type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type CategoryResponse = {
  data: Category[];
  meta: Meta;
};
