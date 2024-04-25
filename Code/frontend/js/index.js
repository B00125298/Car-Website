// frontend/js/index.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch featured cars
    fetch('/cars')
      .then(response => response.json())
      .then(cars => {
        // Display featured cars on the homepage
        const featuredCarsSection = document.getElementById('featured-cars');
        cars.forEach(car => {
          featuredCarsSection.innerHTML += `
            <div>
              <h3>${car.make} ${car.model}</h3>
              <p>Year: ${car.year}</p>
              <p>Price: $${car.price}</p>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error fetching featured cars:', error));
    
    // Fetch newly added cars
    fetch('/cars')
      .then(response => response.json())
      .then(cars => {
        // Display newly added cars on the homepage
        const newlyAddedCarsSection = document.getElementById('newly-added-cars');
        cars.forEach(car => {
          newlyAddedCarsSection.innerHTML += `
            <div>
              <h3>${car.make} ${car.model}</h3>
              <p>Year: ${car.year}</p>
              <p>Price: $${car.price}</p>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error fetching newly added cars:', error));
  });
  