'use client';

import { TrendingUp, Users, Package, Globe, ArrowUpRight, ShoppingBag, Award, Truck, CheckCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Stats = () => {
  // بيانات النمو - ملايين العملاء والمبيعات
  const growthData = [
    { year: '2019', customers: 0.2, revenue: 15, orders: 12 },
    { year: '2020', customers: 0.8, revenue: 42, orders: 38 },
    { year: '2021', customers: 2.5, revenue: 95, orders: 85 },
    { year: '2022', customers: 5.8, revenue: 156, orders: 142 },
    { year: '2023', customers: 12.3, revenue: 245, orders: 218 },
    { year: '2024', customers: 25.7, revenue: 385, orders: 342 },
  ];

  // أداء شهري بالملايين
  const monthlyPerformance = [
    { month: 'Jan', sales: 32.5, growth: 15 },
    { month: 'Feb', sales: 28.8, growth: 12 },
    { month: 'Mar', sales: 35.2, growth: 18 },
    { month: 'Apr', sales: 42.7, growth: 22 },
    { month: 'May', sales: 38.4, growth: 16 },
    { month: 'Jun', sales: 45.5, growth: 24 },
  ];

  // إحصائيات رئيسية بالملايين
  const stats = [
    { 
      icon: <Users size={16} />, 
      value: '2.5M+', 
      label: 'Happy Customers', 
      growth: '+215%',
      desc: 'Served since 2019'
    },
    { 
      icon: <ShoppingBag size={16} />, 
      value: '1.8M+', 
      label: 'Orders Completed', 
      growth: '+189%',
      desc: 'And counting'
    },
    { 
      icon: <Package size={16} />, 
      value: '150+', 
      label: 'Brands', 
      growth: '+50%',
      desc: 'World-class partners'
    },
    { 
      icon: <Award size={16} />, 
      value: '99.3%', 
      label: 'Satisfaction', 
      growth: '+2.3%',
      desc: 'Customer rating'
    },
  ];

  // إحصائيات إضافية صغيرة
  const miniStats = [
    { icon: <Truck size={12} />, value: '48h', label: 'Avg. Delivery' },
    { icon: <CheckCircle size={12} />, value: '98%', label: 'On-time' },
    { icon: <Globe size={12} />, value: '2', label: 'Countries' },
  ];

  return (
    <section id="stats" className="bg-gradient-to-t from-[#050816] to-[#0b1024] py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold text-white mb-1 pt-10">
            Our <span className="text-[#EA591D]">Growth</span> Journey
          </h2>
          <p className="text-gray-300 text-xs max-w-md mx-auto">
            Serving millions of customers with excellence since 2019
          </p>
        </div>

        {/* Main Stats Cards - Compact */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-3 rounded-xl border border-[#EA591D]/10 hover:border-[#EA591D]/25 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-1.5">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-1.5 rounded-lg">
                  {stat.icon}
                </div>
                <div className="flex items-center text-green-400 text-[10px] font-semibold">
                  <ArrowUpRight size={10} />
                  <span>{stat.growth}</span>
                </div>
              </div>
              <div className="text-lg font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-gray-300 text-xs font-medium mb-0.5">{stat.label}</div>
              <div className="text-gray-400 text-[10px]">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Mini Stats */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0d1229] to-[#1a2138] px-3 py-1.5 rounded-full border border-[#EA591D]/10">
            {miniStats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-1.5">
                <div className="text-[#EA591D]">{stat.icon}</div>
                <div className="text-right">
                  <div className="text-white text-xs font-semibold">{stat.value}</div>
                  <div className="text-gray-400 text-[10px]">{stat.label}</div>
                </div>
                {index < miniStats.length - 1 && (
                  <div className="w-px h-4 bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Growth Chart - Compact */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/15">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1.5">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-1 rounded">
                  <TrendingUp className="text-[#EA591D]" size={14} />
                </div>
                <h3 className="text-sm font-bold text-white">Yearly Growth</h3>
              </div>
              <div className="text-[#EA591D] font-semibold text-xs">+215% YoY</div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={growthData}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#374151" strokeOpacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="#9CA3AF" 
                    fontSize={10}
                    strokeWidth={0.5}
                  />
                  <YAxis 
                    stroke="#9CA3AF" 
                    fontSize={10}
                    strokeWidth={0.5}
                    tickFormatter={(value) => `${value}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0d1229', 
                      borderColor: '#EA591D',
                      borderRadius: '6px',
                      fontSize: '11px',
                      padding: '6px 8px'
                    }}
                    labelStyle={{ color: '#EBE9E9', fontSize: '10px' }}
                    formatter={(value?: number) => [`${value ?? 0}M`, '']}

                  />
                  <Line 
                    type="monotone" 
                    dataKey="customers" 
                    stroke="#EA591D" 
                    strokeWidth={1.5}
                    name="Customers (M)"
                    dot={{ stroke: '#EA591D', strokeWidth: 1, r: 2.5 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#60A5FA" 
                    strokeWidth={1.5}
                    name="Revenue (M $)"
                    dot={{ stroke: '#60A5FA', strokeWidth: 1, r: 2.5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between mt-2 text-gray-400 text-[10px]">
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-0.5 bg-[#EA591D]"></div>
                <span>Customers</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <div className="w-2 h-0.5 bg-[#60A5FA]"></div>
                <span>Revenue</span>
              </div>
            </div>
          </div>

          {/* Monthly Performance - Compact */}
          <div className="bg-gradient-to-br from-[#0d1229] to-[#1a2138] p-4 rounded-xl border border-[#EA591D]/15">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-1.5">
                <div className="bg-gradient-to-br from-[#EA591D]/15 to-[#EA591D]/5 p-1 rounded">
                  <Package className="text-[#EA591D]" size={14} />
                </div>
                <h3 className="text-sm font-bold text-white">Monthly Performance</h3>
              </div>
              <div className="text-[#EA591D] font-semibold text-xs">2024</div>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyPerformance}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#374151" strokeOpacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#9CA3AF" 
                    fontSize={10}
                    strokeWidth={0.5}
                  />
                  <YAxis 
                    stroke="#9CA3AF" 
                    fontSize={10}
                    strokeWidth={0.5}
                    tickFormatter={(value) => `$${value}M`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0d1229', 
                      borderColor: '#EA591D',
                      borderRadius: '6px',
                      fontSize: '11px',
                      padding: '6px 8px'
                    }}
                    formatter={(value?: number) => [`$${value ?? 0}M`, 'Sales']}

                  />
                  <Bar 
                    dataKey="sales" 
                    name="Sales (M $)" 
                    fill="url(#gradientBar)" 
                    radius={[2, 2, 0, 0]}
                  />
                  <defs>
                    <linearGradient id="gradientBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#EA591D" stopOpacity={0.9}/>
                      <stop offset="100%" stopColor="#f97316" stopOpacity={0.9}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between mt-2 text-gray-400 text-[10px]">
              <div>Monthly Sales Revenue</div>
              <div className="text-[#EA591D] font-medium">↑ 24% growth in Jun</div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-4 text-center pb-10">
          <div className="inline-flex items-center space-x-1 bg-gradient-to-r from-[#EA591D]/10 to-[#f97316]/5 px-3 py-1.5 rounded-full border border-[#EA591D]/15">
            <TrendingUp className="text-[#EA591D]" size={12} />
            <span className="text-white text-xs font-medium">Over 2.5 million customers served</span>
            <ArrowUpRight className="text-[#EA591D]" size={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;