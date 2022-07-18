const dropDown = document.getElementsByClassName("dropdown");

if (dropDown) {
  for (const drop of dropDown) {
    drop.addEventListener("mouseover", function msEnter() {
      drop.classList.add("dropdown-bg");
    });
  }
}
