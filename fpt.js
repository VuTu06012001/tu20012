var counter=1;
        setInterval(function(){
        document.getElementById('radio'+ counter).checked=true;
        counter++;
        if(counter> 7){
        counter=1;
        }
        },5000);

        var countor=1;
        setInterval(function(){
        document.getElementById('radio1'+ countor).checked=true;
        countor++;
        if(countor> 7){
        countor=1;
        }
        },5000);


