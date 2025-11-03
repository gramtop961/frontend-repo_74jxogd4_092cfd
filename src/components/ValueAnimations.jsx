import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Sparkles, Headphones, ShoppingCart, LineChart } from 'lucide-react';

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
  }, [inView, target, duration, controls]);

  return { value, ref, controls };
}

export default function ValueAnimations() {
  const conv = useCountUp(28);
  const aov = useCountUp(19);
  const resp = useCountUp(300);

  return (
    <section className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-indigo-50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Animations that show real impact</h2>
          <p className="mt-4 text-gray-600">Live indicators highlight how the AI drives revenue and reduces workload.</p>
        </div>

        {/* Animation 1: KPI Counters */}
        <div ref={conv.ref} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={conv.controls} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 text-white flex items-center justify-center">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Conversion lift</p>
                <p className="text-2xl font-semibold text-gray-900">+{conv.value}%</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">Personalized recommendations and assisted checkout boost sales.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={aov.controls} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 text-white flex items-center justify-center">
                <LineChart className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Avg. order value</p>
                <p className="text-2xl font-semibold text-gray-900">+{aov.value}%</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">Smart bundles and cross‑sell prompts increase basket size.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={resp.controls} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 text-white flex items-center justify-center">
                <Headphones className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Response time</p>
                <p className="text-2xl font-semibold text-gray-900">{Math.max(1, 300 - resp.value)} ms</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600">Always‑on support that answers in real time.</p>
          </motion.div>
        </div>

        {/* Animation 2: Floating Cards with subtle parallax */}
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {[{
            title: 'Understands intent',
            desc: 'Detects purchase signals and moves shoppers toward checkout.',
            icon: Sparkles,
            grad: 'from-indigo-500 via-purple-500 to-cyan-400'
          }, {
            title: 'Closes the sale',
            desc: 'Handles objections, promo codes, and secure payments.',
            icon: ShoppingCart,
            grad: 'from-emerald-500 via-teal-500 to-sky-400'
          }, {
            title: 'Learns & improves',
            desc: 'Continuously optimizes recommendations from outcomes.',
            icon: LineChart,
            grad: 'from-orange-500 via-pink-500 to-purple-500'
          }].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-tr ${item.grad} text-white flex items-center justify-center`}>
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-2xl bg-gradient-to-tr from-indigo-400 via-purple-400 to-cyan-300"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: i * 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
