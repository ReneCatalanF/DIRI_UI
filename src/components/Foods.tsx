import { MenuItem } from '../entites/entities';
//import './Foods.css'
import FoodOrder from './FoodOrder'
import ima from '../images/Hamburg.jpg';
import { useState } from 'react';
import ErrorBoundary from '../services/ErrorBoundaries'
import logger from '../services/logging';
import { FormattedMessage, FormattedNumber } from 'react-intl';

interface FoodsProps {
    foodItems: MenuItem[];
}
function Foods(props: FoodsProps) {


    const [foodOrder, setfoodOrder] = useState(false);
    const [foodSelect, setfoodSelect] = useState<MenuItem>();
    const handleReturnToMenu = () => {
        setfoodOrder(!foodOrder);
    };

    const handleClick = (menu: MenuItem) => {
        logger.debug("El usuario quiere ordenar: " + menu.name);
        setfoodSelect(menu);
        setfoodOrder(!foodOrder);
    };

    return (
        <>
            {!foodOrder && (
                <>
                    <h4 className="foodTitle"><FormattedMessage id="app.label.chose" /></h4>
                    <br/>
                    <br/>
                    <ul className="space-y-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {props.foodItems.map((item) => {
                            return (
                                <>
                                    <div className="relative flex w-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                        <img className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border 
                                        text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
                                            src={ima}
                                            alt={item.name}
                                        />
                                        <div className="p-6">
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                {item.name}
                                            </h5>
                                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                                {item.desc}
                                            </p>
                                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                                <FormattedNumber value={item.price} style="currency" currency="EUR" />
                                            </h5>
                                        </div>
                                        <div className="p-6 pt-0">
                                            <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle 
                                            font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all 
                                            hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
                                            active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => handleClick(item)}>
                                                <FormattedMessage id="app.label.order" />
                                            </button>
                                        </div>
                                    </div>
                                </>

                            );
                        })}
                    </ul>
                </>
            )
            }
            {foodOrder &&
                <ErrorBoundary fallback={<div><FormattedMessage id="app.label.noMoreH" /></div>}><FoodOrder food={foodSelect!} onReturnToMenu={handleReturnToMenu}></FoodOrder></ErrorBoundary>


            }
        </>
    );
};
export default Foods;

