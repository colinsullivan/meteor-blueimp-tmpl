Package.describe({
  summary: "A wrapper around the blueimp-tmpl package for meteor."
});

Package.on_use(function (api) {
  api.use(["jquery"], "client");

  api.add_files(["lib/blueimp-tmpl/js/tmpl.js"], "client");
});
