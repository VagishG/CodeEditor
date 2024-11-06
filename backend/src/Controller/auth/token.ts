import type { Request, Response } from "express";
import axios from "axios";
import { Octokit } from "octokit";
import generateAccessToken from "../../helper/accessToken";

const login = async (req: Request, res: Response): Promise<void> => {
  const code = req.body.code;
  if (!code) {
    res.status(400).json({ error: "No code provided" });
    return; // Ensure to return after sending the response
  }
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).json({ error: "Internal server error" });
    return;
  }
  try {
    const response = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
      {},
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const access_token = response.data.access_token;
    if(!access_token) {
      res.status(400).json({ error: "Invalid code" });
      return;
    }
    const profile = await axios.get("https://api.github.com/user", {
      headers: {
          'Authorization': `Bearer ${access_token}`
      }
  })
  
    
    // res.status(200).json(response.data);
    const accessToken = generateAccessToken(profile.data,access_token);
    const cookieOptions = {
      httpOnly: true,
      secure: true, // Enable secure cookies in production
      sameSite: "none", // Required for cross-origin
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days days * hours * minutes * seconds * ms 
    };
    //@ts-ignore
    res.cookie("accessToken", accessToken, cookieOptions);
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("accessToken");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.log(error);
     res.status(500).send({ message: `Internal Server Error: ${error}` });
  }
}

export default login;
export { logout };
