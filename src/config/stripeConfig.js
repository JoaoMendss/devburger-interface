import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51SG5u99zc255fNca5UqWSSEtggHuIQuYvP2WN67ArJDWCNjzI1t5tvcV93vezjpVaRux2q97kUkkQkAK6WrsC88i007q8nWdPl'
);

export default stripePromise;