/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.skcalc;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;

/**
 *
 * @author Saket
 */
@WebService(serviceName = "MyServer")
public class MyServer {

    /**
     * Web service operation
     */
    @WebMethod(operationName = "addition")
    public String addition(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        //TODO write your implementation code here:
        int res;
        res = a + b;
        return Integer.toString(res);
        
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "substraction")
    public String substraction(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        int res;
        res = a - b;
        return Integer.toString(res);
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "multiplication")
    public String multiplication(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        int res;
        res = a * b;
        return Integer.toString(res);
    }

    /**
     * Web service operation
     */
    @WebMethod(operationName = "division")
    public String division(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        int res;
        res = a / b;
        return Integer.toString(res);
    }

    /**
     * This is a sample web service operation
     */
    
}
