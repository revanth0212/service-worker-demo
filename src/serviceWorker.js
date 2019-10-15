export const register = () => {
  import("workbox-window")
    .then(({ Workbox }) => {
      const wb = new Workbox("/sw.js");

      wb.register()
        .then(() => {
          window.console.log("SW Registered");
        })
        .catch(() => {
          window.console.warn("Failed to register SW.");
        });
    })
    .catch(() => {
      window.console.warn("Failed to load Workbox.");
    });
};
