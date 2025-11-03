import Spline from '@splinetool/react-spline';
import { Check, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs text-indigo-700">
              <Sparkles className="h-4 w-4" />
              AI ecommerce voice agent
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Convert more with an AI agent that sells for you
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Auraloom uses a real-time AI voice and chat agent to answer questions, recommend products, and close sales across your store 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black">
                Start free trial
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-700">
                See how it works
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />5‑minute install</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Shopify & custom carts</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />Voice + chat + email</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />PCI & GDPR compliant</li>
            </ul>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),rgba(255,255,255,0)_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-indigo-400/10 to-orange-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
