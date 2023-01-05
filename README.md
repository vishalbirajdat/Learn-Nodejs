# Learn-Nodejs

Hoisting :  Before execution move the code to top of scope.

Function Hoisting : Functions are move to top
Variable Hoisting : declare variable as undefine (only var is used)

Execution Context 

                -Creation Phase
                
                              -Variable Object Created 
                                                      -Point to that function
                                                      -Set variable to undefine
                                                      -Argument Objects
                              -Scope Chain Created (only function)
                                                  - Global Scope
                                                  -Function Scope
                              -'this' variable 
                              
                              
                -Execution Phase


Primitive and non primitive : 
                -Number, Symbol, Null, Undefine, String, Boolean
                -Object (Array, Function)
