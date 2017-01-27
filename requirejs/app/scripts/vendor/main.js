require.config({
  paths: {
    "jquery": "vendor/jquery/dist/jquery",
    "underscore": "vendor/underscore/underscore",
    "bootstrap": "vendor/bootstrap/bootstrap-3.3.7",
    /* "templates": "../templates",
    "app": "vendor/app/app.js" */
  }
  shim: {
    "bootstrap": {
      deps: ["jquery"],
      exports: "jQuery"
    }
  }
});
