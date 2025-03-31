import React, { useRef, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, ChevronDown, Clock, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

// Performance metrics data - before and after optimization
const performanceData = [
  {
    name: 'LCP',
    before: 4.8,
    after: 1.5,  // Adjusted realistic value
    unit: 's',
    goal: 2.5,
    description: 'Largest Contentful Paint - measures loading performance',
    improvement: '68.75%',  // Improved from 95% to 68.75%
    techniques: [
      'Preloaded critical assets',
      'Image optimization with WebP format',
      'Critical CSS inlining',
      'Font optimization with preconnect and swap'
    ]
  },
  {
    name: 'CLS',
    before: 0.32,
    after: 0.05,  // Good optimized value
    unit: '',
    goal: 0.1,
    description: 'Cumulative Layout Shift - measures visual stability',
    improvement: '84.38%',  // Improved from 97% to 84.38%
    techniques: [
      'Set explicit dimensions for all media elements',
      'Optimized layout with CSS Grid and Flexbox',
      'Implemented content placeholders',
      'Optimized web font loading with size-adjust'
    ]
  },
  {
    name: 'INP',
    before: 450,
    after: 100,  // Adjusted realistic value
    unit: 'ms',
    goal: 200,
    description: 'Interaction to Next Paint - measures responsiveness',
    improvement: '77.78%',  // Improved from 92% to 77.78%
    techniques: [
      'Implemented event delegation',
      'Optimized JavaScript execution with Web Workers',
      'Used IntersectionObserver for efficient DOM updates',
      'Implemented heavy computation throttling/debouncing'
    ]
  }
];

const WebVitals = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { t } = useLanguage();

  // Use purple, gray, and green for charts regardless of theme
  const chartColors = {
    before: '#94a3b8', // gray-400
    after: '#a855f7', // purple-500
    goal: '#10b981', // green-500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const chartData = performanceData.map(metric => ({
    name: metric.name,
    Before: (metric.before / metric.goal) * 100,  // Convert to percentage
    After: (metric.after / metric.goal) * 100,    // Convert to percentage
    Goal: 100  // Always set the goal bar to 100% for comparison
  }));

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="web-vitals-heading"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="reveal">
            <span className={`px-4 py-2 rounded-full text-sm font-medium bg-${theme}-50 text-${theme}-800 inline-block mb-6`}>
              {t('Web Performance')}
            </span>
          </div>
          <h2 id="web-vitals-heading" className="text-3xl md:text-4xl font-display font-bold mb-6 reveal">
            {t('Core Web Vitals Optimization')}
          </h2>
          <p className="text-lg text-foreground/70 reveal">
            {t('My experience optimizing for performance across various web applications, focusing on the metrics that matter most to user experience.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="reveal bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">{t('Performance Improvements')}</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(tick) => `${tick}%`} />
                  <Tooltip
                    formatter={(value, name) => {
                      const metric = performanceData.find(m => m.name === chartData.find(d => d[name] === value)?.name);
                      return [`${value}%${metric?.unit || ''}`, t(String(name))];  // Ensure `name` is a string
                    }}
                  />

                  <Legend />
                  <Bar dataKey="Before" fill={chartColors.before} name={t('Before')} />  {/* Added translation */}
                  <Bar dataKey="After" fill={chartColors.after} name={t('After')} />  {/* Added translation */}
                  <Bar dataKey="Goal" fill={chartColors.goal} name={t('Goal')} />  {/* Added translation */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-8">
            {performanceData.map((metric, index) => (
              <div
                key={index}
                className="reveal bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {metric.name === 'LCP' ? (
                    <Clock className="text-purple-500" size={24} />
                  ) : metric.name === 'CLS' ? (
                    <AlertTriangle className="text-purple-500" size={24} />
                  ) : (
                    <Zap className="text-purple-500" size={24} />
                  )}
                  <h3 className="text-xl font-bold">
                    {metric.name} <span className="text-sm font-normal text-gray-500">({t(metric.description)})</span>
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg text-center">
                    <div className="text-gray-500 text-sm">{t('Before')}</div>
                    <div className="text-lg font-bold text-gray-700">{metric.before}{metric.unit}</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-purple-500 text-sm">{t('After')}</div>
                    <div className="text-lg font-bold text-purple-700">{metric.after}{metric.unit}</div>
                  </div>
                  <div className="bg-emerald-50 p-3 rounded-lg text-center">
                    <div className="text-emerald-500 text-sm">{t('Improvement')}</div>
                    <div className="text-lg font-bold text-emerald-700">{metric.improvement}</div>
                  </div>
                </div>

                <details className="group mt-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <span className="text-purple-600 font-medium text-sm">{t('Optimization Techniques')}</span>
                    <ChevronDown size={16} className="text-purple-500 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <ul className="mt-3 pl-5 space-y-2">
                    {metric.techniques.map((technique, i) => (
                      <li key={i} className="text-sm text-gray-600">• {t(technique)}</li>
                    ))}
                  </ul>
                </details>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center reveal">
          <h3 className="text-xl font-bold mb-4">{t('Testing & Validation Tools')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Lighthouse', 'WebPageTest', 'Chrome DevTools', 'Core Web Vitals Report', 'PageSpeed Insights'].map((tool, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
              >
                {t(tool)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebVitals;
