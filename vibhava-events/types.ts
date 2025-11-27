export interface ServiceItem {
  icon: string;
  label: string;
}

export interface GalleryItem {
  title: string;
  subtitle?: string;
  image: string;
}

export interface EventData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  themeColor: 'red' | 'pink' | 'gold';
  font: 'epilogue' | 'jakarta';
  gallery: GalleryItem[];
  type: 'scroll' | 'grid'; // Layout type
}

export type EventId = 'wedding' | 'birthday' | 'house-warming' | 'puberty' | 'dhothi';
