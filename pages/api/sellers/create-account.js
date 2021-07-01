import stripe from '../../../lib/stripe'

export default async (req, res) => {
  if (req.method === 'POST') {
    const account = await stripe.accounts.create({
      country: 'JP',
      type: 'custom',
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      }
    });
    res.status(200).json({ account_id: account.id })
  }
  res.status(405)
}
