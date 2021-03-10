
   require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
     "esri/widgets/LayerList",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home,LayerList) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"7963a5b099724da5a3fcb0576e08a381" 
        }
      });
      
      var camera = new Camera({
         position: [
           -149.1170601,// lon
          61.0642907, // lat
          17370// elevation in meters
        ],
        tilt:30.5672,
        heading: 347.7837
      })
      
      var camera2 = new Camera({
        position: {
          x: -149.1221,
          y: 61.0857,
          z: 2000.1403
        },
        tilt: 10,
        heading: 187.2107

      })

      var camera3 = new Camera({
         position: [
           -149.0893,
          61.1350,
          2000// elevation in meters
        ],
        tilt:5,
        heading: 270
      
     
      
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "bottom-right");
    
    [cp1,cp2,cp3].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    cp2.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    cp1.addEventListener('click', function() {
      view.goTo({
        target:camera
      });
    });
     
      cp3.addEventListener('click', function() {
      view.goTo({
        target:camera3
      });
    });
view.goTo({
        target:camera
      });
    });
