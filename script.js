const searchInput = document.getElementById("searchBar");
const results = document.getElementById("productGrid");

searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase().trim();

    if (!keyword) {
        results.innerHTML = "";
        return;
    }

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.section.toLowerCase().includes(keyword) ||
        product.page.toLowerCase().includes(keyword) ||
        product.price.toLowerCase().includes(keyword)
    );

    results.innerHTML = filtered.map(product => `
        <div class="result">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <small>${product.section}</small><br>
            <a href="${product.page}">View Product</a>
        </div>
    `).join("");
});

console.log(products.length);