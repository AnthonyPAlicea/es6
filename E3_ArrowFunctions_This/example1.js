let me = {
    firstName: 'Tony',
    greet: function() {
        console.log(this);
        
        let logMe = function() {
            console.log(this);
        }
        logMe();
    },
    greet2: function() {
        console.log(this);
        
        let logMe = () => {
            console.log(this);
        }
        logMe();
    }
}

me.greet();
me.greet2();