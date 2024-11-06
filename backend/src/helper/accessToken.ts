/** @format */
import jwt from "jsonwebtoken";
import type { User } from "../Interface/User";


export default function generateAccessToken(user: User,access_token:String) {
  return jwt.sign(
    {
      access_token: access_token,
      login: user.login,
      id: user.id,
      node_id: user.node_id,
      avatar_url: user.avatar_url,
      url: user.url,
      html_url: user.html_url,
      followers_url: user.followers_url,
      following_url: user.following_url,
      gists_url: user.gists_url,
      starred_url: user.starred_url,
      subscriptions_url: user.subscriptions_url,
      organizations_url: user.organizations_url,
      repos_url: user.repos_url,
      events_url: user.events_url,
      received_events_url: user.received_events_url,
      name: user.name,
      company: user.company,
      blog: user.blog,
      location: user.location,
      email: user.email,
      hireable: user.hireable,
      bio: user.bio,
      twitter_username: user.twitter_username,
      public_repos: user.public_repos,
      public_gists: user.public_gists,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at,
      updated_at: user.updated_at,
      private_gists: user.private_gists,
      total_private_repos: user.total_private_repos,
      owned_private_repos: user.owned_private_repos,
    },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: '7d'
    }
  );
}
