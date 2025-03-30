document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("filterInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const products = document.querySelectorAll(".product");

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            const productCategory = product.getAttribute("data-category");

            if (
                (productName.includes(searchTerm) || searchTerm === "") &&
                (selectedCategory === "all" || productCategory === selectedCategory)
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);

    // Scroll Indicator
    window.addEventListener("scroll", function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercentage = (scrollTop / scrollHeight) * 100;
        document.getElementById("scroll-indicator").style.width = scrollPercentage + "%";
    });
});
