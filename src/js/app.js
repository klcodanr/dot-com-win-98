document.querySelectorAll(".window").forEach((win) => {
  new Draggable(win, {
    grid: 10,
    handle: win.querySelector(".title-bar"),
  });
  win.style.height="50vh";
  win.style.width="50vw";
  win.style.margin="5em";
});


document.querySelector("main").classList.remove("is-hidden");

new MutationObserver(function (mutations) {
  mutations.some(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "src") {
      console.log(mutation);
      console.log("Old src: ", mutation.oldValue);
      console.log("New src: ", mutation.target.src);
      return true;
    }

    return false;
  });
}).observe(document.querySelector(".web-frame"), {
  attributes: true,
  attributeFilter: ["src"],
  attributeOldValue: true,
  characterData: false,
  characterDataOldValue: false,
  childList: false,
  subtree: true,
});
