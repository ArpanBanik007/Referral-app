import { Router } from "express";
import { getUsersDashboard } from "../controller/getusersDashboard.js";


const router = Router();

router.route("/").get(getUsersDashboard);

export default router;
