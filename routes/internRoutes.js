import { Router } from "express";
import { getUsersDashboard } from "../controller/getusersDashboard.js";


const router = Router();

router.route("/dashboard").get(getUsersDashboard);


export default router;
