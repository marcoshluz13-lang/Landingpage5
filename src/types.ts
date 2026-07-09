export interface VideoItem {
  id: string;
  title: string;
  category: 'shorts' | 'reels' | 'tiktok' | 'podcast' | 'ads';
  thumbnailUrl: string;
  videoUrl: string; // Embed or simulated play URL
  views: string;
  retention: string;
  likes: string;
}

export interface ClientProfile {
  username: string;
  posts: string;
  followers: string;
  following: string;
  avatarUrl: string;
  viralVideo: {
    title: string;
    views: string;
    likes: string;
    comments: string;
    caption: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: string;
  features: string[];
  ctaText: string;
  color: 'red' | 'dark' | 'white';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TrialSubmission {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  videoLink: string;
  referenceLink?: string;
  notes?: string;
  submittedAt: string;
  status: 'pending' | 'processing' | 'done';
}
