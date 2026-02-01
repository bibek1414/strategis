
export interface Service {
  id: string;
  title: string;
  description: string;
  fullDetails: string;
  icon: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  author: string;
  role: string;
  content: string;
  company: string;
  image?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Insights' | 'News';
  date: string;
  image: string;
}
