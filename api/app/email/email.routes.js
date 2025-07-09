import { Router } from 'express';
import emailController from './email.controller';
import requestHandler from '../../utils/request';

const emailRouter = Router();

emailRouter.post('/send', requestHandler(emailController.sendMail));

export default emailRouter;
