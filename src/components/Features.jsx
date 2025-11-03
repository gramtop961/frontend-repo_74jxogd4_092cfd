import { Bot, Shield, Zap, BarChart3, Headphones } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Autonomous selling',
    desc: 'Answers questions, recommends products, handles upsells and completes checkout — with your tone and brand.'
  },
  {
    icon: Headphones,
    title: 'Omnichannel support',
    desc: 'Voice, chat, SMS, and email. Seamless handoff to human agents when needed.'
  },
  {
    icon: BarChart3,
    title: 'Insightful analytics',
    desc: 'Track conversion lift, AOV changes, and top intents with privacy-safe analytics.'
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade security',
    desc: 'SOC2-ready, GDPR and CCPA compliant. Role-based access and encrypted data at rest.'
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    desc: 'Sub‑300ms responses and real‑time speech synthesis for natural, human-like conversations.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-x-0 -z-0 top-0 h-40 bg-gradient-to-b from-indigo-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Built for modern ecommerce teams</h2>
          <p className="mt-4 text-gray-600">Drop-in automation that feels on-brand, protects your margins, and earns trust.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-orange-400 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
