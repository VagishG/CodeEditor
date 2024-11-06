import { Router } from "express";
import verifyJwt from "../middleware/auth.middleware";
import { getRepos } from "../Controller/user/respos";
const router = Router();

router.route("/getUserData").get(verifyJwt);
router.route("/getRepos").get(verifyJwt,getRepos);


export default router;