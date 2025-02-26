import { JSX } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from
    "@headlessui/react";
import { MenuItem } from "../entites/entities";
import { FormattedMessage, FormattedNumber } from "react-intl";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    itemM: MenuItem | undefined;
}
function ModalFinal(props: ModalProps): JSX.Element {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onClose}
            className="bg-gray-900 bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center"
        >
            <DialogPanel className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                <DialogTitle className="text-lg font-semibold text-gray-900">{props.itemM?.name}</DialogTitle>
                <Description className="mt-2 text-gray-600">
                    {props.itemM?.desc}
                </Description>
                <p className="mt-4 text-sm text-gray-700">
                <FormattedMessage id="app.label.priceperH" />: <FormattedNumber value={props.itemM?.price ? props.itemM.price: 0} style="currency" currency="EUR" />
                </p>
                <p className="mt-4 text-sm text-gray-700">
                <FormattedMessage id="app.label.totalquantity" />: {props.itemM?.quantity}
                </p>
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={props.onClose}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                    >
                        <FormattedMessage id="app.label.close" />
                    </button>
                </div>
            </DialogPanel>
        </Dialog>
    );
}
export default ModalFinal;