// Sample data for featured cars and recently added cars
const featuredCarsData = [
    { name: "Toyota Camry", price: "$12,000", image: "toyota_camry.jpg" },
    { name: "Honda Civic", price: "$10,500", image: "honda_civic.jpg" },
    { name: "Ford Mustang", price: "$25,000", image: "ford_mustang.jpg" }
  ];
  
  const recentlyAddedCarsData = [
    { name: "BMW 3 Series", price: "$18,000", image: "bmw_3_series.jpg" },
    { name: "Audi A4", price: "$20,500", image: "audi_a4.jpg" },
    { name: "Mercedes-Benz C-Class", price: "$22,000", image: "mercedes_c_class.jpg" }
  ];
  
  // Function to generate car HTML
  function generateCarHTML(car) {
    return `
      <div class="car">
        <img src="images/${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>${car.price}</p>
      </div>
    `;
  }
  
  // Function to display featured cars
  function displayFeaturedCars() {
    const featuredCarList = document.getElementById('featuredCarList');
    featuredCarList.innerHTML = featuredCarsData.map(car => generateCarHTML(car)).join('');
  }
  
  // Function to display recently added cars
  function displayRecentlyAddedCars() {
    const recentlyAddedCarList = document.getElementById('recentlyAddedCarList');
    recentlyAddedCarList.innerHTML = recentlyAddedCarsData.map(car => generateCarHTML(car)).join('');
  }
  
  // Event listener for login button
  document.getElementById('loginBtn').addEventListener('click', () => {
    // Redirect to login/signup page
    window.location.href = 'login.html';
  });
  
  // Display featured cars and recently added cars when the page loads
  window.onload = function() {
    displayFeaturedCars();
    displayRecentlyAddedCars();
  };
  