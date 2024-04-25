// frontend/js/search.js
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
  
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(searchForm);
      const make = formData.get('make');
      const model = formData.get('model');
      const minYear = formData.get('minYear');
      const maxYear = formData.get('maxYear');
      const minPrice = formData.get('minPrice');
      const maxPrice = formData.get('maxPrice');
  
      const searchParams = new URLSearchParams({
        make,
        model,
        minYear,
        maxYear,
        minPrice,
        maxPrice
      });
  
      fetch('/cars/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          make,
          model,
          minYear,
          maxYear,
          minPrice,
          maxPrice
        })
      })
      .then(response => response.json())
      .then(cars => {
        searchResults.innerHTML = ''; // Clear previous search results
        cars.forEach(car => {
          searchResults.innerHTML += `
            <div>
              <h3>${car.make} ${car.model}</h3>
              <p>Year: ${car.year}</p>
              <p>Price: $${car.price}</p>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error searching cars:', error));
    });
  });
  