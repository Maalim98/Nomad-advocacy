import { useState } from 'react';
import { FaPaypal, FaCreditCard, FaUniversity, FaMobile, FaHeart } from 'react-icons/fa';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('KES');

  const currencies = [
    { code: 'KES', symbol: 'KSh' },
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' }
  ];

  const predefinedAmounts = {
    KES: [1000, 2000, 5000, 10000],
    USD: [10, 25, 50, 100],
    EUR: [10, 25, 50, 100]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="transform rotate-45 translate-x-1/2 translate-y-1/2">
          <div className="w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute -top-40 -right-40">
          <div className="w-80 h-80 bg-gradient-to-br from-pink-400 to-red-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <div className="inline-block p-3 rounded-full bg-white/30 backdrop-blur-sm mb-6">
          <FaHeart className="text-4xl text-pink-500 animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Make a Difference Today
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Your generosity creates ripples of change. Every contribution helps us build a better future together.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative">
        {/* Currency Selection */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Select Currency
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => setCurrency(curr.code)}
                className={`
                  py-5 rounded-2xl font-medium transition-all duration-300
                  ${currency === curr.code 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105' 
                    : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md'}
                `}
              >
                {curr.symbol} {curr.code}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Amount
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {predefinedAmounts[currency].map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value.toString())}
                className={`
                  py-5 rounded-2xl font-medium transition-all duration-300
                  ${amount === value.toString() 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105' 
                    : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md'}
                `}
              >
                {currencies.find(c => c.code === currency)?.symbol} {value.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="relative group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter custom amount"
              className="w-full px-16 py-5 text-lg rounded-2xl border-2 border-transparent 
                       bg-white/50 focus:bg-white focus:border-purple-300 focus:ring-4 
                       focus:ring-purple-100 transition-all duration-300 outline-none
                       group-hover:bg-white"
            />
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-medium text-gray-400">
              {currencies.find(c => c.code === currency)?.symbol}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Select Payment Method
          </h2>
          <div className="grid gap-4">
            {/* M-PESA */}
            {currency === 'KES' && (
              <a
                href="#mpesa"
                className="group block p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 
                         hover:from-green-600 hover:to-emerald-600 text-white shadow-lg 
                         transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <FaMobile className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-lg">M-PESA</h3>
                    <p className="text-green-50">Quick and secure mobile money transfer</p>
                  </div>
                </div>
              </a>
            )}

            {/* PayPal */}
            {(currency === 'USD' || currency === 'EUR') && (
              <a
                href="#paypal"
                className="group block p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 
                         hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg 
                         transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4">
                  <FaPaypal className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h3 className="font-semibold text-lg">PayPal</h3>
                    <p className="text-blue-50">Fast and secure international payments</p>
                  </div>
                </div>
              </a>
            )}

            {/* Credit Card */}
            <a
              href="#card"
              className="group block p-6 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 
                       hover:from-purple-600 hover:to-pink-600 text-white shadow-lg 
                       transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <FaCreditCard className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-lg">Credit/Debit Card</h3>
                  <p className="text-purple-50">Secure payment via credit or debit card</p>
                </div>
              </div>
            </a>

            {/* Bank Transfer */}
            <a
              href="#bank"
              className="group block p-6 rounded-2xl bg-gradient-to-r from-gray-600 to-gray-700 
                       hover:from-gray-700 hover:to-gray-800 text-white shadow-lg 
                       transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <FaUniversity className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-lg">Bank Transfer</h3>
                  <p className="text-gray-200">Direct bank transfer to our account</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Security Notice */}
        <div className="text-center mt-8 text-gray-600 bg-white/50 backdrop-blur-sm rounded-full py-3 px-6 inline-block mx-auto">
          <p className="flex items-center justify-center gap-2">
            🔒 All transactions are secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate; 