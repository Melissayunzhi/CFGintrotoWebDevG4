document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('search-query');
  
    // Retrieve the search query from the URL parameter
    var searchQuery = decodeURIComponent(getParameterByName('search-query'));
  
    // Display the search query
    var searchQueryElement = document.createElement('p');
    searchQueryElement.textContent = 'Search Query: ' + searchQuery;
    document.getElementById('searchResults').appendChild(searchQueryElement);
  
    // Filter and display the matching products
    var products = document.querySelectorAll('.card');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const query = searchInput.value.toLowerCase();
      window.location.href = `search-results.html?search-query=${encodeURIComponent(query)}`;
  
      products.forEach(function(product) {
        var productName = product.querySelector('.card-title').textContent.toLowerCase();
        if (productName.includes(query)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  
    // Helper function to retrieve URL parameters
    function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  });
  