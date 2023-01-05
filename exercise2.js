const MyObject = {
    name : "vishal birajdar",
    qulif : "b.tech",

    sum : function(){
        console.log("parent.....");
        // use object this
        console.log(this);


        // work as regular function so use global default window this
        function child(){
            console.log("Child ...... ");
            console.log(this);
        }

        child();
    }
}



MyObject.sum();
