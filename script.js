const dropdownBg = document.querySelector(".dropdown-bg");

Array.from(document.querySelectorAll(".nav-item")).forEach(item => {
    item.onmouseover = () => {
        dropdownBg.style.opacity = "1";
        dropdownBg.style.visibility = "visible";

        dropdownBg.style.width = getComputedStyle (item.lastElementChild).width;
        dropdownBg.style.height = getComputedStyle (item.lastElementChild).height;
    };
});

           