import React from 'react';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Star,
  Smartphone,
  Laptop,
  Headphones,
  Watch
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <RotateCcw className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold tracking-tight">ReWired Tech</span>
            </div>
            
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search laptops, phones..." 
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="text-slate-600 hover:text-blue-600 font-medium hidden md:block">Log In</button>
              <button className="relative text-slate-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="md:hidden text-slate-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold mb-6 border border-blue-500/30">
              Certified Refurbished
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Premium tech. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Fraction of the cost.
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Shop professionally inspected, rigorously tested, and fully guaranteed used electronics. Save money and reduce e-waste without compromising on quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all hover:shadow-blue-600/30">
                Shop All Devices
              </button>
              <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all border border-white/20">
                Sell Your Device
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">1-Year Warranty</h3>
              <p className="text-slate-500 text-sm">Every device comes with a comprehensive 12-month warranty for your peace of mind.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">Free 2-Day Shipping</h3>
              <p className="text-slate-500 text-sm">Get your tech fast. Free expedited shipping on all orders over $50.</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="h-12 w-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <RotateCcw className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">30-Day Returns</h3>
              <p className="text-slate-500 text-sm">Not completely satisfied? Return it within 30 days for a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Smartphones', icon: Smartphone, count: '124' },
            { name: 'Laptops', icon: Laptop, count: '86' },
            { name: 'Audio', icon: Headphones, count: '64' },
            { name: 'Wearables', icon: Watch, count: '42' },
          ].map((cat) => (
            <div key={cat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all group">
              <cat.icon className="h-8 w-8 text-slate-700 group-hover:text-blue-600 mb-4 transition-colors" />
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              <p className="text-sm text-slate-500">{cat.count} devices</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Fresh Arrivals</h2>
              <p className="text-slate-500">Recently inspected and certified devices.</p>
            </div>
            <a href="#" className="text-blue-600 font-medium hover:underline hidden sm:block">View all →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: 'iPhone 13 Pro - 128GB',
                condition: 'Excellent',
                price: 549,
                originalPrice: 999,
                image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?q=80&w=600&auto=format&fit=crop'
              },
              {
                id: 2,
                name: 'MacBook Air M1 (2020)',
                condition: 'Very Good',
                price: 699,
                originalPrice: 999,
                image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop'
              },
              {
                id: 3,
                name: 'Sony WH-1000XM4',
                condition: 'Pristine',
                price: 199,
                originalPrice: 348,
                image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop'
              },
              {
                id: 4,
                name: 'iPad Pro 11" (3rd Gen)',
                condition: 'Excellent',
                price: 589,
                originalPrice: 799,
                image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop'
              }
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow flex flex-col group">
                <div className="relative aspect-square overflow-hidden bg-slate-50 p-6">
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-slate-700 rounded-md border border-slate-200 z-10">
                    {product.condition}
                  </div>
                  {/* Note: Using standard <img> tag for plug-and-play simplicity. In Next.js, swap for <Image> */}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4 mt-auto pt-4">
                    <span className="text-xl font-bold text-slate-900">${product.price}</span>
                    <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                  </div>
                  <button className="w-full py-2.5 bg-slate-900 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <RotateCcw className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">ReWired Tech</span>
            </div>
            <p className="text-sm leading-relaxed">
              Breathing new life into premium electronics. Better for your wallet, better for the planet.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">MacBooks</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">iPhones</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">iPads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Get 10% off your first refurbished device.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-blue-500 outline-none text-white text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
