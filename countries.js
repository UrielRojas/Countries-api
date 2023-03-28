window.onload = main;

function main(){
    let btnLoad = document.getElementById("btnLoad");
    btnLoad.addEventListener('click', clickBoton);
}

async function loadURL(url){
    let response = await fetch(url)
    return await response.json();

}

async function clickBoton(){
    let json =  await loadURL('https://restcountries.com/v3.1/all');
    console.log(json);

    let selecPais = document.getElementById("selecPais").value;
    //console.log(selecPais);
    /*if (json[0].name.common == selecPais){
        console.log("ola");
        console.log(json[0]);
    }*/
    
    for (let i = 0; i <json.length; i++) {
        if(json[i].name.common == selecPais){
            console.log(json[i].name);
            document.getElementById("temp1[i]_continents").innerHTML =  json[i].continents;
            document.getElementById("temp1[i]_capital").innerHTML =  json[i].capital;
            document.getElementById("temp1[i]_population").innerHTML =  json[i].population;
            document.getElementById("temp1[i]_region").innerHTML =  json[i].region;
            document.getElementById("temp1[i]_flags_png").src =  json[i].flags.png;
            break;
        }        
    }
}