export const register = () => {
  import("workbox-window")
    .then(({ Workbox }) => {
      const wb = new Workbox("/sw.js");

      wb.register()
        .then(reg => {
          window.console.log("SW Registered", reg);
        })
        .catch(err => {
          window.console.warn("Failed to register SW.", err);
        });
    })
    .catch(err => {
      window.console.warn("Failed to load Workbox.", err);
    });
};
