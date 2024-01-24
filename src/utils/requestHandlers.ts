import { Response } from "express";

export function sendSuccess(res:Response, data:any){
    res.status(200).json({
        success: true,
        data: data,
        error: null
    })
}

export function sendError(res:Response, message:string = 'Internal Server Error', statusCode:number = 500){
    res.status(statusCode).json({
        success: false,
        data: null,
        error: {
            message: message
        }
    })
}