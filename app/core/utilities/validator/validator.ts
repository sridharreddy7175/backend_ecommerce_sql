// import * as Joi from 'joi'
import { responseInterceptor } from "../response.interceptor";
const Joi = require('joi');

export class Validator {
  responseInterceptor: responseInterceptor;

  constructor(){
    this.responseInterceptor = new responseInterceptor();

  }

  
  validateBodyPayload(schema, req, res, next) {

    Joi.validate(req.body, schema).then((payload) => {
        // logger.info("Payload Validation is Successfull")
        console.log("Payload Validation is Successfull");
        next();
    }).catch((error) => {
        // this.sendBadRequest(res, "Payload Validation Failed")
        return this.responseInterceptor.errorResponse(res, 400, 'Payload Validation Failed', error);

    })
    
}
}

