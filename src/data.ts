import { VideoItem, ClientProfile, PricingPlan, FAQItem } from './types';

export const CLIENT_PROFILE: ClientProfile = {
  username: 'clarkbartram',
  posts: '3,260',
  followers: '182K',
  following: '1,877',
  avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  viralVideo: {
    title: 'The Secret of Consistency',
    views: '1.4M',
    likes: '124K',
    comments: '1,834',
    caption: 'If you want to change your body, first you must change your mind. Consistency beats talent 100% of the time. Agree? 👇 #fitness #motivation #mindset'
  }
};

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'vid-1',
    title: 'Absolute Focus (Fitness/Motivation)',
    category: 'shorts',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=400&h=600&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761',
    views: '450K',
    retention: '89.2%',
    likes: '42K'
  },
  {
    id: 'vid-2',
    title: 'Podcast Highlights (Clipping Style)',
    category: 'podcast',
    thumbnailUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=600&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/403842180.sd.mp4?s=01cd203b60f1e14917f8a7e040f9f38fdf22728f&profile_id=165&oauth2_token_id=57447761',
    views: '1.2M',
    retention: '91.5%',
    likes: '115K'
  },
  {
    id: 'vid-3',
    title: 'Minimalist Desk Setup (Review/Tech)',
    category: 'reels',
    thumbnailUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=600&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/510850877.sd.mp4?s=d31da9046c3b6528882b7bdf08f5195e2d6342b5&profile_id=165&oauth2_token_id=57447761',
    views: '890K',
    retention: '87.4%',
    likes: '78K'
  },
  {
    id: 'vid-4',
    title: 'Express Recipes (Cooking/Fast-paced)',
    category: 'tiktok',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=600&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c054273b1e2e2ecb50080f08149f1db1&profile_id=165&oauth2_token_id=57447761',
    views: '2.1M',
    retention: '94.1%',
    likes: '230K'
  },
  {
    id: 'vid-5',
    title: 'High-Converting Ad (E-commerce)',
    category: 'ads',
    thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
    videoUrl: 'https://player.vimeo.com/external/435674703.sd.mp4?s=7f607d23a1005ca6526960cb4e25a1e263d91cf5&profile_id=165&oauth2_token_id=57447761',
    views: '350K (Clicks)',
    retention: '82.8%',
    likes: '15K'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'on-demand',
    name: 'On-Demand',
    price: '180',
    period: 'video',
    description: 'Perfect for creators who need custom one-off edits with professional quality.',
    badge: 'Quick Delivery!',
    features: [
      'Elite editors at your disposal',
      'Extremely affordable pricing',
      'Validated video styles',
      'Everything in one centralized place',
      'Easy to request and revise',
      'Dynamic captions and visual effects'
    ],
    ctaText: 'Order Now',
    color: 'dark'
  },
  {
    id: 'monthly',
    name: 'Monthly Premium',
    price: '3,490',
    period: 'month',
    description: 'Complete package of 30 videos with a massive discount. Perfect for daily consistency.',
    badge: '24/7 WhatsApp Support',
    features: [
      'Dedicated Elite Editors',
      'Personal 24/7 WhatsApp Support',
      'Request whenever you want',
      'Easy payment via Pix/Card/PayPal',
      'Up to 30 videos per month',
      'Script analysis and viral feedback'
    ],
    ctaText: 'Subscribe Now',
    color: 'white'
  },
  {
    id: 'professional',
    name: 'Dedicated Professional',
    price: '8,990',
    period: 'month',
    description: 'Have an ultra-trained editor exclusively available to you full-time.',
    badge: 'Whitelabel Service Available',
    features: [
      'Dedicated Editing Team',
      'High-speed efficient systems',
      'Custom styles and branding',
      'Your own support team on Slack/WhatsApp',
      'Help with ideas, hooks, and scripts',
      'Pause or cancel anytime',
      'Top priority and revisions in minutes'
    ],
    ctaText: 'Contact Us',
    color: 'red'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What if I do not like the final video output?',
    answer: 'I offer revisions according to your plan, with a minimum of 2 for each video. My goal is to ensure you are 100% satisfied with the final video. Just leave a comment indicating the exact timestamps and what you want to change, and I will adjust it.'
  },
  {
    question: 'What is the standard turnaround time?',
    answer: 'For the On-Demand plan, we deliver videos within 36 hours. In the Weekly plan, the average turnaround is 72 hours for the 7 videos. In the Professional plan, the average turnaround is 5 business days for the 15 videos.'
  },
  {
    question: 'What types of videos do you edit?',
    answer: "I'm specialize in high-retention vertical formats: YouTube Shorts, Instagram Reels, TikToks, Podcast Highlights."
  },
  {
    question: 'How do I send the content?',
    answer: 'You can send the raw footage or a link to your files (Google Drive, Dropbox, OneDrive, etc.).'
  },
  {
    question: 'What is the final duration of the videos?',
    answer: 'The final duration typically ranges from 30 seconds to 90 seconds, which is optimized for maximum retention and reach on short-form video platforms.'
  }
];
