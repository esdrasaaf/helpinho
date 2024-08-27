import { Router } from "express";
import { validateBody } from "../middlewares/auth-schema-validation";
import { createUserSchema } from "../schemas/new-user-schema";
import { loginSchema } from "../schemas/auth-schema";
import { signInPost, signUpPost } from "../controllers/auth-controller";


const authenticationRouter = Router();

authenticationRouter
.post("/signup", validateBody(createUserSchema), signUpPost)
.post("/signin", validateBody(loginSchema), signInPost);

export { authenticationRouter };
