import { Router } from "express";
import { getUsersDashboard } from "../controller/getusersDashboard.js";


const router = Router();

router.route("/userDashboard").get(getUsersDashboard);

export default router;
