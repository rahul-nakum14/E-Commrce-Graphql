import { Router } from "express";
import userServices from "../services/user.services";

const userRouter: Router = Router();

userRouter.get('/:id', userServices.getUserById);

export default userRouter;
