import { Router } from "express";
import { createHelp, getAllHelps, getByCategory, getById, putHelp } from "../controllers/help-controller";
import { authenticateToken } from "../middlewares/session-validation";
import { validateBody } from "../middlewares/auth-schema-validation";
import { createHelpSchema } from "../schemas/help-schema";
import { createDonateSchema } from "../schemas/donate-schema";

const helpRouter = Router();

helpRouter
    .post("/", validateBody(createHelpSchema), authenticateToken, createHelp)
    .put("/", validateBody(createDonateSchema), authenticateToken, putHelp)
    .get("/category/:category", getByCategory)
    .get("/id/:id", getById)
    .get("/", getAllHelps)

export { helpRouter };
