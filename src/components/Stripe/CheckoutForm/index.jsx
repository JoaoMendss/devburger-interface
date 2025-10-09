import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export default function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();
    const {
        state: { dpmCheckerLink },
    } = useLocation();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe or Elements failed, please try again!")
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            setMessage(error.message);
            toast.error(error.message);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            try {

                const products = cartProducts.map((product) => {
                    return { id: product.id, quantity: product.quantity, price: product.price };
                });
                const { status } = await api.post('/orders', { products }, {
                    validateStatus: () => true,
                });

                if (status === 200 || status === 201) {
                    setTimeout(() => {
                        navigate(
                            `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`
                        );
                        clearCart();
                    }, 3000);
                    clearCart();
                    toast.success('Pedido Realizado com Sucesso!');
                } else if (status === 409) {
                    toast.error('Falha ao realiza o seu pedido!');
                } else {
                    throw new Error();
                }
            } catch (error) {
                toast.error('😭 Falha no Sistema! Tente novamente.');
            }
        } else {
            toast.error('😭 Falha no Sistema! Tente novamente.');
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="checkout-container">
            <form id="payment-form" onSubmit={handleSubmit} className="checkout-form">

                <PaymentElement id="payment-element" options={paymentElementOptions} />

                <button disabled={isLoading || !stripe || !elements} id="submit" className="checkout-button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pagar Agora"}
                    </span>
                </button>

                {message && <div id="payment-message">{message}</div>}
            </form>

            <div id="dpm-annotation">
                <p>
                    Os métodos de pagamentos disponíveis variam conforme sua região.&nbsp;
                    <a
                        href={dpmCheckerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="dpm-integration-checker"
                    >
                        Ver métodos de pagamentos
                    </a>
                </p>
            </div>
        </div>
    );
}
