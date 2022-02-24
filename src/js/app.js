const shareButton = document.querySelector(".article__share-btn");
const shareMenu = document.querySelector(".article__share-menu");

let shareMenuToggled = false;

shareButton.addEventListener("click", () => {
  if (shareMenuToggled == null || shareMenu == null) return;
  if (shareMenuToggled) {
    shareButton.dataset.enabled = "false";
    shareMenu.dataset.enabled = "false";
  } else {
    shareButton.dataset.enabled = "true";
    shareMenu.dataset.enabled = "true";
  }
  return (shareMenuToggled = !shareMenuToggled);
});
