import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        setLoading(true);

        // Call backend to create a PaymentIntent
        const response = await fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: 5000 }), // Amount in cents ($50.00)
        });

        const { clientSecret } = await response.json();

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        setLoading(false);

        if (result.error) {
            alert(result.error.message);
        } else {
            alert("Payment successful!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button
                type="submit"
                disabled={!stripe || loading}
                className="bg-blue-500 text-white p-2 mt-4 rounded"
            >
                {loading ? "Processing..." : "Pay"}
            </button>
        </form>
    );
};

export default CheckoutForm;
