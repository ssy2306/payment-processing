require('dotenv').config()
const express= require('express')
const app = express();
const stripe = require('stripe')('process.env.API_KEY');


// Handle subscription creation
app.post('/subscription', async (req, res) => {
  try {
    const session = await stripe.subscriptions.create({
      customer: 'cus_Na6dX7aXxi11N4',
      items: [
        {
          price: 'price_1MowQULkdIwHu7ixraBm864M',
        },
      ],
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


const subscription = await s
