function main(){
    var km = document.getElementById('km').value;
    var wtime = document.getElementById('time').value;
    var ubertype;
    var total = 0;
    km=+km;
    wtime=+wtime;

    var uX = document.getElementById('uberX');
    var uSUV = document.getElementById('uberSUV');
    var uBlack = document.getElementById('uberBlack');

    if(uX.checked === true){
        ubertype = 'X';

    }
    else if(uSUV.checked === true){
        ubertype = 'SUV';

    }
    else if(uBlack.checked === true){
        ubertype = 'Black';

    }
    else{
        alert('Choose type car');
        return;
    }

    switch(ubertype){
        case 'X':{
            if(km<1){
                total = 8000+wtime*2000;
            }else if(km<=20){
                total = 8000+(km-1)*12000+wtime*2000;
            }else{
                total = 8000+12000*19+wtime*2000+(km-1)*10000;
            }
            break;
        }

        case 'SUV':{
            if(km<1){
                total = 9000+wtime*3000;
            }else if(km<=20){
                total = 9000+(km-1)*14000+wtime*3000;
            }else{
                total = 9000+14000*19+wtime*3000+(km-1)*12000;
            }
            break;
        }

        case 'Black':{
            if(km<1){
                total = 10000+wtime*4000;
            }else if(km<=20){
                total = 10000+(km-1)*16000+wtime*4000;
            }else{
                total = 10000+16000*19+wtime*4000+(km-1)*14000;
            }
            break;
        }


    }

    // document.getElementById().classList.add
    

    document.getElementById('divThanhTien').style.display = 'block';
    document.getElementById('xuatTien').innerHTML = total.toLocaleString() + " VND";






}