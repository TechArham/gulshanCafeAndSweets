'use client'
import React, { useState, useRef } from "react";
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Check, 
  Clock, 
  Search, 
  X,
  Menu 
} from "lucide-react";

const RestaurantOrderingSystem = () => {
  const [currentScreen, setCurrentScreen] = useState("landing");
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    tableNumber: "",
    name: "",
    phone: "",
    email: "",
  });
  const [activeCategory, setActiveCategory] = useState("vegetable");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoryNavOpen, setCategoryNavOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(20);

  const categoryRefs = useRef({});

  const menuData = {
    SuperDeliciousDeal: [
      {
        id: 1,
        name: "Mix Vegetable",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fresh mixed vegetables cooked to perfection",
      },
      {
        id: 2,
        name: "Chana Daal",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional lentil curry",
      },
      {
        id: 3,
        name: "Aloo Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Spiced potato curry",
      },
      {
        id: 4,
        name: "Shak Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Green leafy vegetables",
      },
      {
        id: 5,
        name: "Cabbage Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fresh cabbage curry",
      },
      {
        id: 6,
        name: "Daal",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional lentils",
      },
      {
        id: 7,
        name: "Begun Vaja (1p)",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fried eggplant slices",
      },
      {
        id: 8,
        name: "Aloo Bhorta",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Mashed potato mix",
      },
      {
        id: 9,
        name: "Shukhi Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Dry fish mash",
      },
      {
        id: 10,
        name: "Maach Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fish mash",
      },
      {
        id: 11,
        name: "Tomato Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Tomato mash",
      },
      {
        id: 12,
        name: "Begun Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Eggplant mash",
      },
      {
        id: 13,
        name: "Shrimp Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Shrimp mash",
      },
      {
        id: 14,
        name: "Dim Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Egg mash",
      },
      {
        id: 15,
        name: "Beans Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Bean mash",
      },
    ],

    vegetable: [
      {
        id: 16,
        name: "Mix Vegetable",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fresh mixed vegetables cooked to perfection",
      },
      {
        id: 17,
        name: "Chana Daal",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional lentil curry",
      },
      {
        id: 18,
        name: "Aloo Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Spiced potato curry",
      },
      {
        id: 19,
        name: "Shak Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Green leafy vegetables",
      },
      {
        id: 20,
        name: "Cabbage Bhaji",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fresh cabbage curry",
      },
      {
        id: 21,
        name: "Daal",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional lentils",
      },
      {
        id: 22,
        name: "Begun Vaja (1p)",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fried eggplant slices",
      },
      {
        id: 23,
        name: "Aloo Bhorta",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Mashed potato mix",
      },
      {
        id: 24,
        name: "Shukhi Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Dry fish mash",
      },
      {
        id: 25,
        name: "Maach Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fish mash",
      },
      {
        id: 26,
        name: "Tomato Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Tomato mash",
      },
      {
        id: 27,
        name: "Begun Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Eggplant mash",
      },
      {
        id: 28,
        name: "Shrimp Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Shrimp mash",
      },
      {
        id: 29,
        name: "Dim Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Egg mash",
      },
      {
        id: 30,
        name: "Beans Bhorta",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Bean mash",
      },
    ],

    halalChinese: [
      {
        id: 16,
        name: "Vegetable Fried Rice",
        price: 10.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fried rice with fresh vegetables",
      },
      {
        id: 17,
        name: "Shrimp Fried Rice",
        price: 12.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fried rice with shrimp",
      },
      {
        id: 18,
        name: "Egg Fried Rice",
        price: 10.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fried rice with eggs",
      },
      {
        id: 19,
        name: "Chilli Chicken",
        price: 12.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Spicy chicken with peppers",
      },
      {
        id: 20,
        name: "Sesame Chicken",
        price: 12.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Sweet sesame glazed chicken",
      },
      {
        id: 21,
        name: "Chinese Vegetable (Chicken/Shrimp)",
        price: 12.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Chinese style vegetables with protein",
      },
      {
        id: 22,
        name: "Noodles",
        price: 10.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Chinese style noodles",
      },
      {
        id: 23,
        name: "Thai Soup",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Authentic Thai soup",
      },
      {
        id: 24,
        name: "Chicken Soup",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Hot chicken soup",
      },
      {
        id: 25,
        name: "Vegetable Corn Soup",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Vegetable and corn soup",
      },
    ],

    breadAndRice: [
      {
        id: 26,
        name: "Naan Bread",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fresh baked naan bread",
      },
      {
        id: 27,
        name: "Garlic Naan",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Naan with garlic flavor",
      },
      {
        id: 28,
        name: "Onion Kulcha",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Bread stuffed with onions",
      },
      {
        id: 29,
        name: "Keema Naan",
        price: 4.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Naan stuffed with meat",
      },
      {
        id: 30,
        name: "Porota",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Flaky layered bread",
      },
      {
        id: 31,
        name: "Roti",
        price: 1.5,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Simple flat bread",
      },
      {
        id: 32,
        name: "Chapati Roti",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Soft chapati bread",
      },
      {
        id: 33,
        name: "White Rice",
        price: 2.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Steamed white rice",
      },
      {
        id: 34,
        name: "Polao",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fragrant rice pilaf",
      },
    ],

    mishti: [
      {
        id: 35,
        name: "Rosogullah",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Sweet spongy balls",
      },
      {
        id: 36,
        name: "Balushahi",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Flaky sweet pastry",
      },
      {
        id: 37,
        name: "Kala Jamun",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Dark sweet balls",
      },
      {
        id: 38,
        name: "Gulab Jamun",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Rose flavored sweet balls",
      },
      {
        id: 39,
        name: "Panthua",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional sweet",
      },
      {
        id: 40,
        name: "Kacha Golla",
        price: 9.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Raw milk sweet",
      },
      {
        id: 41,
        name: "Borfi Sandesh",
        price: 9.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Square milk sweet",
      },
      {
        id: 42,
        name: "Gurer Sandesh",
        price: 9.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Jaggery flavored sweet",
      },
      {
        id: 43,
        name: "Chom Chom",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Oval shaped sweet",
      },
      {
        id: 44,
        name: "Jelebi",
        price: 8.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Spiral sweet pastry",
      },
      {
        id: 45,
        name: "Nimki",
        price: 7.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Savory snack",
      },
      {
        id: 46,
        name: "Murali",
        price: 9.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional sweet",
      },
    ],

    breakfastCombo: [
      {
        id: 47,
        name: "Porota/Naan/Rooti, Vaji-Daal Mix, Cup of Tea",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Complete breakfast combo",
      },
      {
        id: 48,
        name: "Porota/Rooti, Haluwa or Mishty, Cup of Tea",
        price: 6.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Sweet breakfast combo",
      },
      {
        id: 49,
        name: "Bhuna Khichuri, Fried Egg, Cup of Tea",
        price: 12.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Rice and lentil combo",
      },
    ],

    dessertsAndDrinks: [
      {
        id: 50,
        name: "Firni",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Rice pudding dessert",
      },
      {
        id: 51,
        name: "Rice Pudding",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Creamy rice pudding",
      },
      {
        id: 52,
        name: "Egg Pudding (1pc)",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Individual egg pudding",
      },
      {
        id: 53,
        name: "Custard",
        price: 4.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Creamy custard",
      },
      {
        id: 54,
        name: "Falooda",
        price: 5.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Sweet milk drink",
      },
      {
        id: 55,
        name: "Milk Semai",
        price: 4.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Vermicelli in milk",
      },
      {
        id: 56,
        name: "Mango Lassi",
        price: 5.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Mango yogurt drink",
      },
      {
        id: 57,
        name: "Semai",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Sweet vermicelli",
      },
      {
        id: 58,
        name: "Deshi Doi",
        price: 3.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Traditional yogurt",
      },
      {
        id: 59,
        name: "Ras Malai",
        price: 10.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Milk dumplings in cream",
      },
      {
        id: 60,
        name: "Borhani (1gl)",
        price: 4.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Spiced yogurt drink",
      },
      {
        id: 61,
        name: "Bottle Water",
        price: 1.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Purified water",
      },
      {
        id: 62,
        name: "Soda Can",
        price: 1.5,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Carbonated drink",
      },
      {
        id: 63,
        name: "Tea",
        price: 1.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Hot tea",
      },
    ],

    lunchDinnerCombo: [
      {
        id: 64,
        name: "Ruhi/Koi/Pangas, Any two bhorta, Daal/Mix Vegetable",
        price: 14.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Fish combo with sides",
      },
      {
        id: 65,
        name: "Shorshe Ilish/Elisher Jull, Any two bhorta, Daal/Mix Vegetable",
        price: 16.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Premium fish combo",
      },
      {
        id: 66,
        name: "Beef Bhuna/Kala Bhuna/Goat Rejala, Any two Bhorta, Daal/Mix Vegetable",
        price: 15.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Meat combo with sides",
      },
      {
        id: 67,
        name: "Chicken Roast/Khurma/Curry, Daal/Mix Vegetable",
        price: 15.0,
        image: "/Chicken-Chow-Mein-1.jpg",
        description: "Chicken combo with sides",
      },
    ],
  };

  // Category display names
  const categoryDisplayNames = {
    SuperDeliciousDeal = "Super Delicious Deal",
    vegetable: "Vegetable",
    halalChinese: "Halal Chinese",
    breadAndRice: "Bread & Rice",
    mishti: "Mishti (Sweets)",
    breakfastCombo: "Breakfast Combo",
    dessertsAndDrinks: "Desserts & Drinks",
    lunchDinnerCombo: "Lunch/Dinner Combo"
  };

  const allItems = Object.values(menuData).flat();

  const getFilteredItems = (category) => {
    const categoryItems = menuData[category] || [];
    if (!searchTerm) return categoryItems.slice(0, visibleItems);
    return categoryItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
      .slice(0, visibleItems);
  };

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    setCategoryNavOpen(false); // Close mobile nav when category is selected
    if (categoryRefs.current[category]) {
      categoryRefs.current[category].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setSidebarOpen(true);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (field, value) => {
    setOrderDetails((prev) => ({ ...prev, [field]: value }));
  };

  const submitOrder = () => {
    console.log("Order submitted:", { cart, orderDetails });
    setCurrentScreen("confirmation");
    setCartDrawerOpen(false);
    setSidebarOpen(false);
    setCategoryNavOpen(false);
  };

  if (currentScreen === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center">
          <div className="mb-6 sm:mb-8">
            <div className="bg-green-100 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Check className="text-green-600" size={32} />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">Thank you {orderDetails.name}</p>
          </div>

          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Clock className="text-orange-500 mr-2" size={18} />
              <span className="text-gray-700 text-sm sm:text-base">Estimated prep time</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600">15-25 mins</div>
          </div>

          <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 space-y-1">
            <p className="font-semibold">
              Order #12{Math.floor(Math.random() * 1000)}
            </p>
            <p>Table {orderDetails.tableNumber}</p>
            <p>
              {getTotalItems()} items • ${getTotalPrice().toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Order sent to kitchen • Receipt printed
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentScreen("landing");
              setCart([]);
              setOrderDetails({
                tableNumber: "",
                name: "",
                phone: "",
                email: "",
              });
              setCartDrawerOpen(false);
              setSidebarOpen(false);
              setCategoryNavOpen(false);
              setSearchTerm("");
              setVisibleItems(20);
              setActiveCategory("vegetable");
            }}
            className="w-full bg-gray-200 text-gray-700 font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl hover:bg-gray-300 transition-colors text-sm sm:text-base"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center p-3 sm:p-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center">
          <div className="mb-6 sm:mb-8">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🍽️</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              Gulshan cafe and sweets
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">Authentic Bangladeshy Dining</p>
          </div>

          <div className="mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
              Welcome!
            </h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              Browse our extensive menu and place your order directly from your
              table
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen("menu")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm sm:text-base"
          >
            Start Your Order
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "menu") {
    return (
      <div className="bg-white">
        <div className="min-h-screen mx-auto max-w-[1580px] flex">
          <div
            className={`flex-1 transition-all duration-300 ease-in-out pb-24 lg:pb-4 ${
              sidebarOpen ? "lg:mr-80" : ""
            }`}
          >
            <div className="sticky top-0 bg-white shadow-sm z-30">
              <div className="p-3 sm:p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => setCategoryNavOpen(true)}
                    className="lg:hidden mr-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Menu size={20} className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Search menu items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 sm:py-3 bg-gray-100 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-orange-500 focus:bg-white transition-colors outline-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Desktop Category Navigation */}
              {/* <div className="hidden lg:flex overflow-x-auto px-3 sm:px-4 pb-3 sm:pb-4 space-x-2 sm:space-x-3 scrollbar-hide">
                {Object.keys(menuData).map((category) => (
                  <button
                    key={category}
                    onClick={() => scrollToCategory(category)}
                    className={`px-4 sm:px-4 py-2 sm:py-2 rounded-full whitespace-nowrap transition-colors text-sm sm:text-sm font-medium flex-shrink-0 min-w-max ${
                      activeCategory === category
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"
                    }`}
                  >
                    {categoryDisplayNames[category]}
                  </button>
                ))}
              </div> */}

              {/* Mobile Category Navigation Sidenav */}
              {categoryNavOpen && (
                <div className="lg:hidden fixed inset-0 bg-black/50 z-50">
                  <div
                    className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
                      categoryNavOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                  >
                    <div className="p-4 border-b flex items-center justify-between bg-orange-500 text-white">
                      <h2 className="text-xl font-bold">Menu Categories</h2>
                      <button
                        onClick={() => setCategoryNavOpen(false)}
                        className="p-2 hover:bg-orange-600 rounded-full transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="p-4">
                      <div className="space-y-2">
                        {Object.keys(menuData).map((category) => (
                          <button
                            key={category}
                            onClick={() => scrollToCategory(category)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                              activeCategory === category
                                ? "bg-orange-500 text-white shadow-lg"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300"
                            }`}
                          >
                            {categoryDisplayNames[category]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>





      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative">
              <img 
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-sm text-xs font-semibold">
                {deal.discount}
              </div>
              {/* Rating Badge (only for some items) */}
              {deal.hasRating && (
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-700">{deal.rating}</span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {deal.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {deal.category}
              </p>
              
              {/* Price and Button Container */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {deal.price}
                  </span>
                  {deal.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {deal.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Button */}
                <button className="flex items-center space-x-2 bg-white border-2 border-pink-500 text-pink-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-500 hover:text-white transition-colors duration-200">
                  <ShoppingCart className="w-4 h-4" />
                  <span>
                    {deal.buttonType === 'order' ? 'Order Now' : 'View options'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>






            <div className="p-3 sm:p-4">
              {Object.keys(menuData).map((category) => (
                <div
                  key={category}
                  ref={(el) => (categoryRefs.current[category] = el)}
                >
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 mt-4 sm:mt-6 first:mt-0">
                    {categoryDisplayNames[category]}
                  </h2>
                  <div
                    className={`grid gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-6 sm:mb-8 ${
                      sidebarOpen
                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }`}
                  >
                    {getFilteredItems(category).map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-300/60 rounded-lg p-3 sm:p-4 flex flex-col text-center md:text-left md:flex-row items-center justify-start gap-3 sm:gap-4 lg:gap-6 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-cover"
                            src={item.image}
                            alt={item.name}
                          />
                          {/* <Image
                            className="rounded-xl h-28 w-28"
                            src={item.image}
                            alt="vegetable"
                            height={100}
                            width={100}
                          /> */}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-1 line-clamp-2">
                            {item.name}
                          </h3>
                          <p className="text-orange-600 font-bold text-xs sm:text-sm mb-2 sm:mb-3">
                            Price: ${item.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-transparent text-xs sm:text-sm text-orange-500 font-bold uppercase hover:bg-orange-500 hover:text-white py-1.5 sm:py-2 px-3 sm:px-4 border border-orange-500 rounded-full transition-colors w-full sm:w-auto"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div
            className={`hidden lg:block fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4 border-b flex items-center justify-between bg-orange-500 text-white">
              <h2 className="text-xl font-bold">Your Order</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 hover:bg-orange-600 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto p-4">
                {cart.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <ShoppingCart
                      size={48}
                      className="mx-auto mb-4 opacity-50"
                    />
                    <p>Your cart is empty</p>
                    <p className="text-sm">Add some delicious items!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-3 border-b last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          className="rounded-xl h-16 w-20 object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">
                            {item.name}
                          </h3>
                          <p className="text-orange-600 font-bold text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition-colors"
                        >
                          <Minus className="text-gray-800" size={14} />
                        </button>
                        <span className="font-semibold w-6 text-orange-600 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-orange-500 text-white p-1 rounded-full hover:bg-orange-600 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex justify-between text-gray-800 items-center text-lg font-bold mb-4">
                    <span>Total ({getTotalItems()} items)</span>
                    <span className="text-orange-600">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSidebarOpen(false);
                      setCurrentScreen("checkout");
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Cart Trigger */}
          {!sidebarOpen && getTotalItems() > 0 && (
            <div
              onClick={() => setSidebarOpen(true)}
              className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-l-2xl shadow-xl cursor-pointer hover:bg-orange-600 transition-all duration-300 z-30 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <ShoppingCart size={24} className="mb-2" />
                <div className="text-xs font-bold">{getTotalItems()}</div>
                <div className="text-xs font-bold">
                  ${getTotalPrice().toFixed(2)}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Cart Button */}
          {getTotalItems() > 0 && (
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 sm:p-4 z-30">
              <button
                onClick={() => setCartDrawerOpen(true)}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold flex items-center justify-between text-sm sm:text-base"
              >
                <span>View Cart ({getTotalItems()} items)</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </button>
            </div>
          )}

          {/* Mobile Cart Drawer */}
          {cartDrawerOpen && (
            <div className="lg:hidden fixed inset-0 bg-black/40 z-50">
              <div
                className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl sm:rounded-t-3xl max-h-[85vh] transform transition-transform duration-300 ease-in-out ${
                  cartDrawerOpen ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div className="p-3 sm:p-4 border-b flex items-center justify-between sticky top-0 bg-white rounded-t-2xl sm:rounded-t-3xl">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                    Your Order
                  </h2>
                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[55vh]">
                  <div className="p-3 sm:p-4">
                    {cart.length === 0 ? (
                      <div className="text-center text-gray-500 mt-8">
                        <ShoppingCart
                          size={40}
                          className="mx-auto mb-4 opacity-50"
                        />
                        <p className="text-base sm:text-lg">
                          Your cart is empty
                        </p>
                        <p className="text-sm">Add some delicious items!</p>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-3 border-b last:border-b-0 gap-3"
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <img
                              className="rounded-xl h-12 w-12 sm:h-16 sm:w-20 object-cover flex-shrink-0"
                              src={item.image}
                              alt={item.name}
                            />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-orange-600 font-bold text-xs sm:text-sm">
                                ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 flex-shrink-0">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="bg-gray-200 p-1.5 sm:p-2 rounded-full hover:bg-gray-300 transition-colors"
                            >
                              <Minus className="text-gray-800" size={12} />
                            </button>
                            <span className="font-semibold w-6 text-gray-800 text-center text-xs sm:text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="bg-orange-500 text-white p-1.5 sm:p-2 rounded-full hover:bg-orange-600 transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {cart.length > 0 && (
                  <div className="p-3 sm:p-4 border-t bg-gray-50 sticky bottom-0">
                    <div className="flex justify-between items-center text-base sm:text-lg text-gray-800 font-bold mb-3 sm:mb-4">
                      <span>Total ({getTotalItems()} items)</span>
                      <span className="text-orange-600">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setCartDrawerOpen(false);
                        setCurrentScreen("checkout");
                      }}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentScreen === "checkout") {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-3 sm:p-4 max-w-2xl mx-auto">
          <div className="flex items-center mb-4 sm:mb-6">
            <button
              onClick={() => setCurrentScreen("menu")}
              className="mr-3 sm:mr-4 text-gray-600 hover:text-gray-800 p-1"
            >
              ← Back to Menu
            </button>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Checkout</h1>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6">
            <h2 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Order Summary</h2>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm py-1">
                  <span className="flex-1 mr-2">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 flex justify-between text-gray-800 font-bold text-base sm:text-lg">
              <span>Total</span>
              <span className="text-orange-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Customer Details</h2>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Table Number *"
                value={orderDetails.tableNumber}
                onChange={(e) =>
                  handleInputChange("tableNumber", e.target.value)
                }
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                required
              />
              <input
                type="text"
                placeholder="Your Name *"
                value={orderDetails.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={orderDetails.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email (Optional - for receipt)"
                value={orderDetails.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm sm:text-base"
              />
            </div>
          </div>

          <button
            onClick={submitOrder}
            disabled={!orderDetails.tableNumber || !orderDetails.name}
            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all ${
              orderDetails.tableNumber && orderDetails.name
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Place Order - ${getTotalPrice().toFixed(2)}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default RestaurantOrderingSystem;