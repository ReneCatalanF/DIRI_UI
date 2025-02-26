import { MenuItem } from './entites/entities';
import Foods from './components/Foods';
import React, { useState, useContext } from 'react';
import './App.css';
import ModalFinal from './components/Dialog';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { LanguageContext } from './components/LanguageProvider';

export const foodItemsContext = React.createContext<MenuItem[]>([]);

function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelect, setitemSelect] = useState<MenuItem | undefined>();

  const { locale, changeLanguage } = useContext(LanguageContext); // Use useContext here

  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: 'Hamburguesa de Pollo',
      quantity: 40,
      desc: 'Hamburguesa de pollo frito con lechuga, tomate y mayonesa',
      price: 24,
      image: 'Hamburg.jpg',
    },
    {
      id: 2,
      name: 'Hamburguesa de Vacuno',
      quantity: 50,
      desc: 'Hamburguesa de Vacuno frito con tomate y mayonesa',
      price: 26,
      image: 'Hamburg.jpg',
    },
    {
      id: 3,
      name: 'Hamburguesa de Cerdo',
      quantity: 60,
      desc: 'Hamburguesa de Cerdo frito con tocino y mayonesa',
      price: 26,
      image: 'Hamburg.jpg',
    },
    {
      id: 4,
      name: 'Hamburguesa de Hormiga',
      quantity: 70,
      desc: 'Hamburguesa de Hormiga frita con tierra, tomate y mayonesa',
      price: 26,
      image: 'Hamburg.jpg',
    },
  ]);

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <button
          className="toggleButton"
          onClick={() => {
            setIsChooseFoodPage(!isChooseFoodPage);
            setIsModalOpen(false);
          }}
        >
          {isChooseFoodPage ? (
            <FormattedMessage id="app.label.dispo" />
          ) : (
            <FormattedMessage id="app.label.orderFood" />
          )}
        </button>
        <h3 className="title">
          <FormattedMessage id="app.label.title" />
        </h3>
        {!isChooseFoodPage && (
          <>
            <h4 className="subTitle">
              <FormattedMessage id="app.label.menu" />
            </h4>
            <ul className="ulApp">
              {menuItems.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <li className="liApp">
                      <p>{item.name}</p>
                      <p>
                        #
                        <FormattedNumber value={item.quantity} style="decimal" />
                      </p>
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          setitemSelect(item);
                        }}
                        className="border rounded-2xl bg-cyan-700 text-white shadow-sm p-1 px-2 m-2"
                      >
                        <FormattedMessage id="app.label.details" />
                      </button>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </>
        )}
        {isChooseFoodPage && <Foods foodItems={menuItems} />}
      </div>
      <div>
        <ModalFinal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          itemM={itemSelect!}
        />
      </div>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={locale}
        className="mt-4 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </foodItemsContext.Provider>
  );
}

export default App;