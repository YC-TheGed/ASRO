document.addEventListener("DOMContentLoaded", function () {
  // Force a reload of the CSS
  function reloadCSS() {
    const links = document.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === "stylesheet") {
        const href = links[i].href.split("?")[0];
        const newHref = href + "?id=" + new Date().getMilliseconds();
        links[i].href = newHref;
      }
    }
  }

  reloadCSS();

  function yesSelected() {
    window.location.href = "/ebt";
  }

  function noSelected() {
    window.location.href = "/location";
  }

  document.getElementById("yesButton").addEventListener("click", yesSelected);
  document.getElementById("noButton").addEventListener("click", noSelected);
});
