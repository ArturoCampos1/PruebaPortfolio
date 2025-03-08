function sobreMi(){
    window.location.href = "sobre-mi.html";
}

function educacion(){
    window.location.href = "educacion.html";
}

function experience(){
    window.location.href = "experience.html";
}

function titulaciones(){
    window.location.href = "titulaciones.html";
}

navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log("Latitud:", position.coords.latitude);
      console.log("Longitud:", position.coords.longitude);
    },
    function (error) {
      console.error("Error al obtener ubicación:", error.message);
    }
  );
  