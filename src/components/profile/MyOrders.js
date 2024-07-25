import React from "react";
import product from '../../assets/images/product.svg';

export default function MyOrders() {
    const orders = [
        {
            status: 'Shipped',
            orderDate: '05 Apr, 2024',
            deliveryDate: '10 Apr, 2024',
            orderId: '#45789552477',
            trackingId: '15894578962458',
            product: {
                name: 'Premium Blue Dress',
                size: 'L',
                quantity: '01',
                amount: '$55,800.00',
                image: product,
            },
        },
        {
            status: 'Delivered',
            orderDate: '05 Apr, 2024',
            deliveryDate: '10 Apr, 2024',
            orderId: '#45789552477',
            product: {
                name: 'Premium Blue Dress',
                size: 'L',
                quantity: '01',
                amount: '$55,800.00',
                image: product,
            },
        },
    ];

    return (
        <>
            <div className="bg-white rounded-[20px] lg:p-[25px] p-[15px]">
                <div className="space-y-[25px]">
                    <h3 className="text-gray-300 font-semibold lg:text-[25px] text-xl lg:leading-[31px] leading-[26px] capitalize">All</h3>
                    <div className="space-y-[15px]">
                        {orders.map((order, index) => (
                            <div key={index} className="border-[1.5px] border-gray-300 rounded-[10px] p-[15px] space-y-3">
                                <h4 className="text-gray-300 font-semibold lg:text-[22px] text-[17px] lg:leading-[27px] leading-[21px] capitalize">{order.status}</h4>
                                <div className="border-b border-gray-300 pb-3">
                                    <div className="lg:flex lg:space-x-3 lg:space-y-0 space-y-2">
                                        <div className="lg:border-r-[1.5px] border-gray-300 pr-3 leading-[18px] gap-[5px] flex justify-between">
                                            <p className="text-gray-200 font-normal text-[13px] capitalize">Order Date:</p>
                                            <p className="text-gray-300 font-medium text-[13px]">{order.orderDate}</p>
                                        </div>
                                        <div className={`lg:border-r-[1.5px] border-gray-300 pr-3 leading-[18px] gap-[5px] flex justify-between`}>
                                            <p className="text-gray-200 font-normal text-[13px] capitalize">Expected Delivery:</p>
                                            <p className="text-gray-300 font-medium text-[13px]">{order.deliveryDate}</p>
                                        </div>
                                        <div className={`lg:border-${order.trackingId ? 'r-[1.5px]' : ''} border-gray-300 pr-3 leading-[18px] gap-[5px] flex justify-between`}>
                                            <p className="text-gray-200 font-normal text-[13px] capitalize">Order ID:</p>
                                            <p className="text-gray-300 font-medium text-[13px]">{order.orderId}</p>
                                        </div>
                                        {order.trackingId && (
                                            <div className="lg:border-gray-300 pr-3 leading-[18px] gap-[5px] flex justify-between">
                                                <p className="text-gray-200 font-normal text-[13px] capitalize">Tracking ID:</p>
                                                <p className="text-[#2E93F1] font-medium text-[13px]">{order.trackingId}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-[13px]">
                                    <div>
                                        <img
                                            src={order.product.image}
                                            alt="img"
                                            className="xl:h-[119px] xl:w-[119px] h-[50px] w-[50px] xl:rounded-[12px] rounded-[8px] object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 lg:text-xl text-[17px] font-medium lg:leading-[25px] leading-[21px] mb-[9px]">
                                            {order.product.name}
                                        </p>
                                        <div className="space-y-[5px]">
                                            <div className="flex gap-[5px]">
                                                <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                    Size:
                                                </p>
                                                <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                    {order.product.size}
                                                </p>
                                            </div>
                                            <div className="flex gap-[5px]">
                                                <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                    Qty:
                                                </p>
                                                <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                    {order.product.quantity}
                                                </p>
                                            </div>
                                            <div className="flex gap-[5px]">
                                                <p className="text-gray-200 lg:text-[15px] lg:font-normal leading-[18px] text-[15px] font-normal">
                                                    Amount:
                                                </p>
                                                <p className="text-gray-300 lg:text-[15px] text-[15px] font-semibold leading-[18px]">
                                                    {order.product.amount}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}