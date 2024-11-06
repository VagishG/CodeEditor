import e, { Router } from "express";
import login,{logout} from "../Controller/auth/token";
import verifyJwt from "../middleware/auth.middleware";

const router = Router();

router.route("/login").post(login);
router.route("/logout").post(verifyJwt,logout)
export default router;