let location1 = document.getElementById("location");
let error = document.getElementById("error");
let getLocation =()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        error.innerHTML= "Geolocation is not supported in this browser."
    }
}
let showPosition= (position)=>{
    location1.value = `{${position.coords.latitude},${position.coords.longitude}}`;
}