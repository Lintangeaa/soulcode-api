import { Router } from 'express';
import emailController from './email.controller.js';
import requestHandler from '../../utils/request.js';

const emailRouter = Router();

emailRouter.post('/send', requestHandler(emailController.sendMail));

export default emailRouter;
