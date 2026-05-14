const allCategories = [
    { name: "Fresh Fruit", image: "img/categories/categories1.svg" },
    { name: "Fresh Vegetables", image: "img/categories/categories2.svg" },
    { name: "Meat & Fish", image: "img/categories/categories1.svg" },
    { name: "Snacks", image: "img/categories/categories2.svg" },
    { name: "Beverages", image: "img/categories/categories1.svg" },
    { name: "Beauty & Health", image: "img/categories/categories2.svg" },
    { name: "Bread & Bakery", image: "img/categories/categories1.svg" },
    { name: "Baking Needs", image: "img/categories/categories2.svg" },
    { name: "Cooking", image: "img/categories/categories1.svg" },
    { name: "Diabetic Food", image: "img/categories/categories2.svg" },
    { name: "Dish Detergents", image: "img/categories/categories1.svg" },
    { name: "Oil", image: "img/categories/categories2.svg" },
    // Gizli kategoriler
    { name: "Frozen Foods", image: "img/categories/categories2.svg" },
    { name: "Baby Care", image: "img/categories/categories2.svg" },
    { name: "Pet Food", image: "img/categories/categories2.svg" }
];

let isShowingAll = false;

const grid = document.querySelector('.categories-grid');
const btn = document.querySelector('.categories__btn');


const renderProducts = (category) =>{
  const categoriesHTML = allCategories[category]
        .map((allCategorie) => {
          return `
                 <div class="category-card">
                <img src="${allCategorie.image}" alt="Fresh Vegetables" class="category-image">
                <div class="category-name">${allCategorie.name}</div>
            </div>

          `;
        })
        .join("");

      grid.innerHTML = categoriesHTML; 
    }