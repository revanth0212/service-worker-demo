export const registerSW = () => {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
      window.console.log("SW Registered", reg);
    })
    .catch(err => {
      window.console.warn("Failed to register SW.", err);
    });
};
