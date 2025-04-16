// Toggle search bar visibility
document.getElementById("searchIcon").addEventListener("click", function (e) {
    e.preventDefault();
    const searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("active");
    document.getElementById("searchInput").focus();
  });
  
  // Sample products (simulate real-time product search)
  const products = [
    "iPhone 14",
    "Samsung Galaxy S23",
    "MacBook Air",
    "Dell XPS 13",
    "Sony Headphones",
    "Nike Sneakers",
    "Adidas Running Shoes",
    "Canon DSLR Camera",
  ];
  
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  
  // Real-time product search
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    searchResults.innerHTML = "";
  
    if (query.trim() !== "") {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(query)
      );
  
      if (filtered.length > 0) {
        filtered.forEach((item) => {
          const div = document.createElement("div");
          div.textContent = item;
          searchResults.appendChild(div);
        });
      } else {
        searchResults.innerHTML = "<div>No results found.</div>";
      }
    }
  });
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
