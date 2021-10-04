//ICI, TOUTES LES REQUETES A L'API STRIPE

const stripe = require('stripe')(process.env.STRIPE_APIKEY);
const database = require('./database')

/**
 * Return all stripe customers
 */
stripeListCustomers = async function() {
    const customers = await stripe.customers.list();

    //AFFICHAGE DES CLIENTS DANS LE TERMINAL --> peu d'intérêt, c'est uniquement pour que tu visualises.
    for (let customer of customers.data) {
        console.log(`Client : ${customer.id} - adresse mail : ${customer.email}`)
    }

    database.addCustomers(customers);
}

exports.stripeListCustomers = stripeListCustomers;