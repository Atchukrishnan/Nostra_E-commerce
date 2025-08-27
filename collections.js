import { products } from "./product.js";

//----------------- Offerbar -----------------//
const offerbar = document.querySelector(".offerbar");
const close = document.getElementById("close");
close.addEventListener("click", () => {
    offerbar.style.display = "none";
});

//----------------- Sidenavbar -----------------//
const hamburgerIcon = document.getElementById("hamburger-icon");
const sidenavbar = document.querySelector(".sideNavbar");
const closeNavbar = document.getElementById("close-sidenavbar");

hamburgerIcon.addEventListener("click", () => {
    sidenavbar.style.left = "0%";
});
closeNavbar.addEventListener("click", () => {
    sidenavbar.style.left = "-70%";
});

//----------------- Products Rendering -----------------//
const container = document.querySelector(".products");

function renderProducts(list) {
    container.innerHTML = "";
    list.forEach(product => {
        const createItem = document.createElement("div");
        createItem.classList.add("product");
        createItem.innerHTML = `
            <img style="width:20vw; border-radius:10px;" src="${product.src}">
            <h2 style="font-size:1.8vw">${product.name}</h2>
            <p style="font-size:1.3vw">₹${product.price}</p>
            <p class="tags" style="display:none;">${product.tags}</p>
        `;
        container.appendChild(createItem);
    });
}

// show all products initially
renderProducts(products);

//----------------- Filters -----------------//
let filterList = [];
const tags = document.getElementsByName("tags");
const inputBox = document.querySelector(".inputBox input");

// checkbox filter
tags.forEach(tag => {
    tag.addEventListener("change", e => {
        if (e.target.checked) {
            if (!filterList.includes(e.target.value.toLowerCase())) {
                filterList.push(e.target.value.toLowerCase());
            }
        } else {
            filterList = filterList.filter(item => item !== e.target.value.toLowerCase());
        }
        update();
    });
});

// search filter
inputBox.addEventListener("keyup", () => {
    update();
});

//----------------- Update Function -----------------//
function update() {
    const productList = document.querySelectorAll(".product");
    const searchValue = inputBox.value.toLowerCase();

    productList.forEach(product => {
        let check = false;
        const tagsText = product.querySelector(".tags").innerHTML;
        const tempFilterArray = tagsText.split(",");

        // ✅ check against selected checkboxes
        if (filterList.length === 0) {
            check = true; // no filter selected → show all
        } else {
            filterList.forEach(selectedTag => {
                tempFilterArray.forEach(tag => {
                    if (selectedTag === tag.toLowerCase().trim()) {
                        check = true;
                    }
                });
            });
        }

        // ✅ check against search
        const name = product.querySelector("h2").innerText.toLowerCase();
        const matchesSearch = name.includes(searchValue);

        // ✅ final condition
        if (check && matchesSearch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
