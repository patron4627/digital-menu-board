import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const menuData = {
  1: [
    { name: "Burger", price: "8.99", image: "https://via.placeholder.com/150" },
    { name: "Pommes", price: "3.49", image: "https://via.placeholder.com/150" },
  ],
  2: [
    { name: "Pizza Margherita", price: "10.99", image: "https://via.placeholder.com/150" },
    { name: "Pasta Carbonara", price: "9.49", image: "https://via.placeholder.com/150" },
  ],
  3: [
    { name: "Sushi Mix", price: "12.99", image: "https://via.placeholder.com/150" },
    { name: "Miso Suppe", price: "4.99", image: "https://via.placeholder.com/150" },
  ],
  4: [
    { name: "Salat Bowl", price: "7.99", image: "https://via.placeholder.com/150" },
    { name: "Smoothie", price: "5.99", image: "https://via.placeholder.com/150" },
  ],
};

export default function MenuScreen() {
  const [searchParams] = useSearchParams();
  const screenId = searchParams.get("screen"); // Liest den screen-Parameter aus der URL
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Wenn der screen-Parameter nicht vorhanden oder ungültig ist, setze auf "1"
    const validScreenId = menuData[screenId] ? screenId : "1";
    setMenu(menuData[validScreenId]);
  }, [screenId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">Menü - Bildschirm {screenId || "1"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl shadow-lg text-center">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-xl">{item.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuScreen from "./MenuScreen";  // Importiere die MenuScreen-Komponente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menu" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
