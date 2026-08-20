(function () {
  var host = (location.hostname || "").toLowerCase();
  var meta = document.querySelector('meta[name="redirect-dest"]');
  var DEST =
    (meta && meta.getAttribute("content")) ||
    (host.indexOf("addylife") !== -1
      ? "https://addylife.netlify.app/"
      : "https://newaddy.ai/");
  var FALLBACK_MS = 10000;
  var sent = false;

  function go() {
    if (sent) return;
    sent = true;
    window.location.replace(DEST);
  }

  var video = document.querySelector("video");
  if (video) {
    video.addEventListener("ended", go);
    video.addEventListener("error", function () {
      setTimeout(go, 1200);
    });
    var play = video.play();
    if (play && typeof play.catch === "function") play.catch(function () {});
  }

  setTimeout(go, FALLBACK_MS);
})();
