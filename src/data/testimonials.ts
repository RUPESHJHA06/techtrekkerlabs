export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  initial: string;
  avatarColor: string;
}

export const testimonials: Testimonial[] = [];
