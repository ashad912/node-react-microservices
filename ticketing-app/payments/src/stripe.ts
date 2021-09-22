import Stripe from 'stripe'

process.env.STRIPE_KEY = process.env.STRIPE_KEY || 'sk_test_51JcXpcH1BGxjLA0K4KoH91SP7bFEakn3QNGLf5R49pQBTYE8ohuSSaAc9bSkHznOEW5JXEG78U99dIIogUxcKvBE008ZyFyV4B'

export const stripe = new Stripe(process.env.STRIPE_KEY!, {
    apiVersion: '2020-08-27'
})