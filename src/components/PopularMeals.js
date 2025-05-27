
import MealCard from "./MealCard";
import "./PopularMeals.css";
import burger from "../assets/images/CheeseBurger.png";
import pasta from "../assets/images/Pasta-salad.png";
import soup from "../assets/images/SaladSoup.png";
import tacos from "../assets/images/Tacos.png";

// const imageMap = {
//   "CheeseBurger.png": burger,
//   "Pasta-salad.png": pasta,
//   "SaladSoup.png": soup
// };

// export default function PopularMeals() {
// //   const meals = mealData.map(meal => ({
// //     ...meal,
// //     image: imageMap[meal.image]
// //   }));

//   return (
//     <section className="meals-section">
//       <div className="meals-header">
//         <h2>Popular Meals</h2>
//         <a href="#">Explore more combos →</a>
//       </div>

//       <div className="card-grid">
//         {/* {meals.map((meal, index) => (
//           <MealCard key={index} {...meal} />
//         ))} */}
//       </div>
//     </section>
//   );
// }

const meals = [
  {
    image: burger,
    status: "Open",
    rating: "4.4",
    type: "Dining & Delivery",
    name: "Cheese Burger & Fries",
    location: "MAX - Svågertorp 234 54, Malmö",
    time: "45 mins",
    price: 119
  },
  {
    image: pasta,
    status: "Closing Soon",
    rating: "4.0",
    type: "Dining & Delivery",
    name: "Pasta & Salad",
    location: "Pasta Paradise - Gustav Adolfsgatan",
    time: "30 mins",
    price: 99
  },
  {
    image: soup,
    status: "Closed For Today",
    rating: "3.9",
    type: "Dining & Delivery",
    name: "Salad & Soup",
    location: "Noodle Master - Elm Avenue",
    time: "25 mins",
    price: 139
  },
  {
    image: tacos,
    status: "Open",
    rating: "4.5",
    type: "Dining & Delivery",
    name: "Tacos & Nachos",
    location: "Taco Fiesta - Central Park",
    time: "20 mins",
    price: 129
  }
];

export default function PopularMeals(){
    return(
        <section className="meals-section">
            <div className="meals-header">
                <h2>Popular Meals</h2>
                <a href="#">Explore more combos →</a>
            </div>
            <div className="card-grid">
                {meals.map((meal, index) => (
                    <MealCard key={index} {...meal} />
                ))}
            </div>

        </section>
    );
}
