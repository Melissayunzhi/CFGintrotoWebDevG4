// Get the search form and search input element
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[name="search-query"]');

// Add an event listener to the form submission
searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the search query from the input field
  const query = searchInput.value;

  // Redirect to the search results page with the query as a URL parameter
  window.location.href = `search-results.html?search-query=${query}`;
});
