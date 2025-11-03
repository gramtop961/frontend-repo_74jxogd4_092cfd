import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'Everything to try the product',
    features: [
      'Up to 500 conversations/mo',
      '1 channel (chat)',
      'Basic insights',
      'Email support'
    ],
    cta: 'Start free'
  },
  {
    name: 'Growth',
    price: '$149',
    cadence: 'per month',
    highlight: 'Best for scaling brands',
    features: [
      'Up to 10k conversations/mo',
      'Voice + chat + SMS',
      'A/B testing & analytics',
      'Priority support'
    ],
    featured: true,
    cta: 'Start 14‑day trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    highlight: 'Advanced controls & SLAs',
    features: [
      'Unlimited conversations',
      'SSO & RBAC',
      'Dedicated success manager',
      'Custom integrations'
    ],
    cta: 'Contact sales'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Start free. Upgrade when you see value.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border ${tier.featured ? 'border-indigo-300 bg-indigo-50' : 'border-gray-200 bg-white'} p-6 shadow-sm`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                {tier.featured && (
                  <span className="text-xs rounded-full bg-indigo-600 text-white px-2 py-1">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                {tier.cadence && <span className="text-gray-500">{tier.cadence}</span>}
              </div>
              <p className="mt-2 text-sm text-gray-600">{tier.highlight}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-6 inline-flex w-full justify-center items-center px-4 py-2 rounded-lg border ${tier.featured ? 'bg-gray-900 text-white hover:bg-black border-gray-900' : 'border-gray-200 hover:border-gray-300 text-gray-900'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          All plans include secure checkout, multilingual support, and easy cancellation.
        </p>
      </div>
    </section>
  );
}
