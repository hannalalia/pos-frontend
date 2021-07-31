import React from 'react'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {AiFillCloseCircle} from 'react-icons/ai';
function Checkout() {
    return (
        <div className="p-1">
            <h1 className="text-xl font-bold py-5 text-center">Checkout</h1>
            <div className="p-1 lg:w-2/3 m-auto align-middle overflow-x-auto custom-scroll-with-handle">          
            <table className="text-center table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th className="py-1 px-3 font-medium">Product</th>
                        <th className="py-1 px-3 font-medium">Price</th>
                        <th className="py-1 px-3 font-medium">Count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-2 border-t-2">
                        <td className="py-1 px-3">
                            <table className="text-left">
                                <tbody>
                                    <tr className=""><td>Item 1</td></tr>
                                    <tr className="text-sm text-gray-500"><td>productcode</td></tr>
                                </tbody>                   
                            </table>                          
                        </td>
                        <td className="py-1 px-3 break-all">$22,227,384.95</td>
                        <td className="py-1 px-3 ">
                            <button className="align-bottom pb-1 text-gray-500 hover:text-gray-600"><FiChevronLeft></FiChevronLeft></button>
                            450
                            <button className="align-bottom pb-1 text-gray-500 hover:text-gray-600"><FiChevronRight></FiChevronRight></button>
                            </td>
                        <td className="py-1 px-3">
                            <button className="text-primary text-2xl hover:text-red-500">
                                <AiFillCloseCircle></AiFillCloseCircle>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="border-t-2">
                        <th className="py-1 px-3 text-left text-lg font-medium">Total:</th>
                        <th className="py-1 px-3 text-left text-lg font-medium">$1000232323</th>                         
                    </tr>
                </tfoot>
            </table>
            <div className="flex flex-col lg:flex-row">
                <button>Confirm</button>
                <button>Print</button>
                <button>Cancel</button>
            </div>
        </div>
        </div>
        )
}

export default Checkout
