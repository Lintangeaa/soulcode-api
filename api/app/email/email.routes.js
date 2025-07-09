import { Router } from 'express';
import emailController from './email.controller';

const emailRouter = Router();

emailRouter.post('/send', requestHandler(emailController.sendMail));

export default emailRouter;
