import type { Request } from "express";

declare module "express" {
  interface Request {
    user?: {
      access_token: string;
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      name: string | null;
      company: string | null;
      blog: string;
      location: string | null;
      email: string | null;
      hireable: boolean | null;
      bio: string | null;
      twitter_username: string | null;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      created_at: string;
      updated_at: string;
      private_gists: number;
      total_private_repos: number;
      owned_private_repos: number;
    };
  }
}