export interface Result {
  results: Results[];
  total: number;
  total_pages: number;
}

export interface Results {
  alt_description: string;
  id: string;
  urls: {
    regular: string;
    small: string;
  };
}

// interface Results {
//   alt_description: string;
//   alternative_slugs: alternativeSlugs;
//   asset_type: string;
//   blur_hash: string;
//   breadcrumbs: Breadcrumbs[];
//   color: string;
//   created_at: Date;
//   current_user_collections: [];
//   description: string | null;
//   height: number;
//   id: string;
//   liked_by_user: boolean;
//   likes: number;
//   links: Links;
//   promoted_at: null | Date;
//   slug: string;
//   sponsorship: null | string;
//   tags: Tags[];
//   topic_submissions: {};
//   updated_at: Date;
//   urls: Urls;
//   user: User;
//   width: number;
// }

// interface alternativeSlugs {
//   de: string;
//   en: string;
//   es: string;
//   fr: string;
//   it: string;
//   ja: string;
//   ko: string;
//   pt: string;
// }

// interface Breadcrumbs {
//   index: number;
//   slug: string;
//   title: string;
//   type: string;
// }
// interface Links {
//   download: string;
//   download_location: string;
//   html: string;
//   self: string;
// }

// interface Tags {
//   source: TagsSource;
//   title: string;
//   type: string;
// }

// interface TagsSource {
//   ancestry: Ancestry;
//   cover_photo: CoverPhoto;
//   description: string;
//   meta_description: string;
//   meta_title: string;
//   subtitle: string;
//   title: string;
// }

// interface Ancestry {
//   category: Category;
//   subcategory: Category;
//   type: Category;
// }

// interface Category {
//   pretty_slug: string;
//   slug: string;
// }

// interface CoverPhoto {
//   plus: boolean;
//   premium: boolean;
//   topic_submissions: TopicSubmissions;
//   alt_description: string;
//   alternative_slugs: alternativeSlugs;
//   asset_type: string;
//   blur_hash: string;
//   breadcrumbs: Breadcrumbs[];
//   color: string;
//   created_at: Date;
//   current_user_collections: [];
//   description: string | null;
//   height: number;
//   id: string;
//   liked_by_user: boolean;
//   likes: number;
//   links: Links;
//   promoted_at: null | Date;
//   slug: string;
//   sponsorship: null | string;
//   updated_at: Date;
//   urls: Urls;
//   user: User;
//   width: number;
// }

// interface TopicSubmissions {
//   animals: Animals;
// }

// interface Animals {
//   status: string;
// }

// interface Urls {
//   full: string;
//   raw: string;
//   regular: string;
//   small: string;
//   small_s3: string;
//   thumb: string;
// }

// interface User {
//   accepted_tos: boolean;
//   bio: string;
//   first_name: string;
//   for_hire: boolean;
//   id: string;
//   instagram_username: string;
//   last_name: string;
//   links: UserLinks;
//   location: string;
//   name: string;
//   portfolio_url: string;
//   profile_image: ProfileImage;
//   social: Social;
//   total_collections: number;
//   total_illustrations: number;
//   total_likes: number;
//   total_photos: number;
//   total_promoted_illustrations: number;
//   total_promoted_photos: number;
//   twitter_username: null | string;
//   updated_at: Date;
//   username: string;
// }

// interface UserLinks {
//   followers: string;
//   following: string;
//   html: string;
//   likes: string;
//   photos: string;
//   portfolio: string;
//   self: string;
// }

// interface ProfileImage {
//   large: string;
//   medium: string;
//   small: string;
// }

// interface Social {
//   instagram_username: string;
//   paypal_email: null | string;
//   portfolio_url: string;
//   twitter_username: null | string;
// }
