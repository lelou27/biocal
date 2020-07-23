
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
          "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
          "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
          "cordova.plugins.barcodeScanner"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.geolocation",
          "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
          "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
          "navigator.geolocation"
        ]
        },
      {
          "id": "cordova-plugin-geolocation.PositionError",
          "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
          "pluginId": "cordova-plugin-geolocation",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-geolocation": "4.0.2",
      "phonegap-plugin-barcodescanner": "8.1.0"
    };
    // BOTTOM OF METADATA
    });
    