const d = document,
  w = window,
  n = navigator,
  ua = n.userAgent;

export let info = {
  dispositivo: undefined,
  navegador: undefined,
  resolucion: `${screen.width} x ${screen.height}`,
  red: () => {
    if (n.onLine) {
      return "<span style='color: green;'>● Funcionando</span>";
    } else {
      return "<span style='color: red;'>● Desconectado</span>";
    }
  }
};

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id);

  const isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/windows phone/i),
    any: function () {
      return this.android() || this.ios();
    },
  };

  const isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows();
    },
  };

  const isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opera mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return this.ie() || this.edge() || this.chrome() || this.safari() || this.firefox() || this.opera();
    },
  };

  if (isMobile.any()) {
    info.dispositivo = isMobile.any().toString();
    obtenerUbicacion();
  } else if (isDesktop.any()) {
    info.dispositivo = isDesktop.any().toString();
  }
  if (isBrowser.any()) {
    info.navegador = `${isBrowser.any()}`;
  }
}
w.addEventListener("online", () => {
  info.red();
});

w.addEventListener("offline", () => {
  info.red();
});
function obtenerUbicacion() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  } else {
      alert("La geolocalización no está disponible en tu navegador.");
  }
}
function mostrarUbicacion(posicion) {
  const latitud = posicion.coords.latitude;
  const longitud = posicion.coords.longitude;

  const mapaURL = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${latitud}!2d${longitud}`;

  const iframe = document.getElementById("mapa");
  iframe.src = mapaURL;
}