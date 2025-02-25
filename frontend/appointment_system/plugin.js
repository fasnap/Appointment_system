(function () {
  var script = document.createElement("script");
  script.src = "https://unpkg.com/react@17/umd/react.production.min.js";
  script.crossOrigin = "";
  script.onload = function () {
    console.log("React loaded successfully");
    var script2 = document.createElement("script");
    script2.src =
      "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js";
    script2.crossOrigin = "";
    script2.onload = function () {
      console.log("ReactDOM loaded successfully");
      var script3 = document.createElement("script");
      script3.src = "https://unpkg.com/axios/dist/axios.min.js";
      script3.crossOrigin = "";
      script3.onload = function () {
        console.log("Axios loaded successfully");
        var script4 = document.createElement("script");
        script4.src =
          "./frontend/appointment_system/build/static/js/main.e5e0e746.js";
        script4.crossOrigin = "";
        console.log("Attempting to load main JS from: " + script4.src);

        script4.onload = function () {
          console.log("Main JS loaded successfully");
        };

        script4.onerror = function (e) {
          console.error("Failed to load main React app script", e);
        };

        document.body.appendChild(script4);
      };
      document.body.appendChild(script3);
    };
    document.body.appendChild(script2);
  };
  document.body.appendChild(script);
})();
