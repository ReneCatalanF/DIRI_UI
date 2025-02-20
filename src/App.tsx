import { useState } from 'react'
import { MenuItem } from './entites/entities';
import Foods from './components/Foods';
import React from 'react';
import './App.css'
import ModalFinal from './components/Dialog';

// eslint-disable-next-line react-refresh/only-export-components
export const foodItemsContext = React.createContext<MenuItem[]>([]);

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelect, setitemSelect] = useState<MenuItem | undefined>();


  const [menuItems] = useState<MenuItem[]>([
    {
      "id": 1,
      "name": "Hamburguesa de Pollo",
      "quantity": 40,
      "desc": "Hamburguesa de pollo frito con lechuga, tomate y mayonesa",
      "price": 24,
      "image": "Hamburg.jpg"
    },
    {
      "id": 2,
      "name": "Hamburguesa de Vacuno",
      "quantity": 50,
      "desc": "Hamburguesa de Vacuno frito con tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 3,
      "name": "Hamburguesa de Cerdo",
      "quantity": 60,
      "desc": "Hamburguesa de Cerdo frito con tocino y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
    {
      "id": 4,
      "name": "Hamburguesa de Hormiga",
      "quantity": 70,
      "desc": "Hamburguesa de Hormiga frita con tierra, tomate y mayonesa",
      "price": 26,
      "image": "Hamburg.jpg"
    },
  ]);

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <button className="toggleButton" onClick={() => {
          setIsChooseFoodPage(!isChooseFoodPage);
          setIsModalOpen(false);
        }
        }>
          {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
        </button>
        <h3 className="title">Comida Rápida Online</h3>
        {!isChooseFoodPage && (
          <>
            <h4 className="subTitle">Menús</h4>
            <ul className="ulApp">
              {menuItems.map((item) => {
                return (
                  <>
                    <li key={item.id} className="liApp">
                      <p>{item.name}</p>
                      <p>#{item.quantity}</p>
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          setitemSelect(item);
                        }}
                        className="border rounded-2xl bg-cyan-700 text-white shadow-sm p-1 px-2 m-2">
                        Ver detalle
                      </button>
                    </li>
                  </>
                );
              })}
            </ul>
          </>
        )}
        {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
      </div>
      <div>
        <ModalFinal isOpen={isModalOpen} onClose={() => {
          setIsModalOpen(false);
        }} itemM={itemSelect!} />
      </div>
    </foodItemsContext.Provider>
  )
}

export default App
