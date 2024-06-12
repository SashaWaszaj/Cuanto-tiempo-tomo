Number.prototype.isPrime = () => {
        for( let i=2; i<this; i++ ) 
            return this % i === 0   
                 ? false
                 : true;
    }
    