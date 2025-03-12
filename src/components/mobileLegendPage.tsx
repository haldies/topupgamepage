import  { useState } from 'react';

function MobileLegendPage() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [email, setEmail] = useState('');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  
  
  const passes = [
    {
      id: 'weekly-pass-1',
      name: 'Weekly Diamond Pass',
      bonus: 'Event Topup +100',
      price: 'Rp27.910',
      category: 'pass'
    },
    {
      id: 'weekly-pass-2',
      name: 'Weekly Diamond Pass x2',
      bonus: 'Event Topup +100',
      price: 'Rp55.822',
      category: 'pass'
    },
    {
      id: 'twilight-pass',
      name: 'Twilight Pass',
      bonus: '',
      price: 'Rp160.151',
      category: 'pass'
    }
  ];
  
  const diamonds = [
    {
      id: 'diamonds-5',
      name: '5 Diamonds',
      bonus: '5 + 0 Bonus',
      price: 'Rp1.654',
      category: 'diamonds'
    },
    {
      id: 'diamonds-12',
      name: '12 Diamonds',
      bonus: '11 + 1 Bonus',
      price: 'Rp3.828',
      category: 'diamonds'
    },
    {
      id: 'diamonds-19',
      name: '19 Diamonds',
      bonus: '17 + 2 Bonus',
      price: 'Rp6.002',
      category: 'diamonds'
    },
    {
      id: 'diamonds-28',
      name: '28 Diamonds',
      bonus: '25 + 3 Bonus',
      price: 'Rp8.591',
      category: 'diamonds'
    },
    {
      id: 'diamonds-44',
      name: '44 Diamonds',
      bonus: '40 + 4 Bonus',
      price: 'Rp12.939',
      category: 'diamonds'
    },
    {
      id: 'diamonds-59',
      name: '59 Diamonds',
      bonus: '53 + 6 Bonus',
      price: 'Rp17.183',
      category: 'diamonds'
    },
    {
      id: 'diamonds-85',
      name: '85 Diamonds',
      bonus: '77 + 8 Bonus',
      price: 'Rp24.637',
      category: 'diamonds'
    },
    {
      id: 'diamonds-113',
      name: '113 Diamonds',
      bonus: '102 + 11 Bonus',
      price: 'Rp32.722',
      category: 'diamonds'
    },
    {
      id: 'diamonds-170',
      name: '170 Diamonds',
      bonus: '154 + 16 Bonus',
      price: 'Rp49.172',
      category: 'diamonds'
    },
    {
      id: 'diamonds-240',
      name: '240 Diamonds',
      bonus: '217 + 23 Bonus',
      price: 'Rp69.360',
      category: 'diamonds'
    },
    {
      id: 'diamonds-296',
      name: '296 Diamonds',
      bonus: '256 + 40 Bonus',
      price: 'Rp80.692',
      category: 'diamonds'
    },
    {
      id: 'diamonds-301',
      name: '301 Diamonds',
      bonus: '261 + 40 Bonus',
      price: 'Rp86.545',
      category: 'diamonds'
    },
    {
      id: 'diamonds-1672',
      name: '1672 Diamonds',
      bonus: '1484 + 188 Bonus',
      price: 'Rp474.132',
      category: 'diamonds'
    },
    {
      id: 'diamonds-2382',
      name: '2382 Diamond',
      bonus: '2033 + 349 Bonus',
      price: 'Rp644.444',
      category: 'diamonds'
    }
  ];
  
  const paymentMethods = [
    {
      id: 'gopay',
      name: 'GoPay',
      price: 'Rp6.003',
      label: '',
      icon: '💳'
    },
    {
      id: 'dana',
      name: 'DANA',
      price: 'Rp6.003',
      label: 'Termurah',
      icon: '💸'
    },
    {
      id: 'qris',
      name: 'QRIS',
      price: 'Rp6.002',
      label: '',
      icon: '📱'
    }
  ];

  // Handle package selection
  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId);
    // Reset payment selection when changing package
    setSelectedPayment(null);
  };

  // Handle payment method selection
  const handlePaymentSelect = (paymentId: string) => {
    setSelectedPayment(paymentId);
  };

  // Handle checkout
  const handleCheckout = () => {
    if (!selectedPackage) {
      alert("Silakan pilih paket terlebih dahulu");
      return;
    }
    
    if (!selectedPayment) {
      alert("Silakan pilih metode pembayaran");
      return;
    }
    
    if (!userId || !zoneId) {
      alert("Silakan isi User ID dan Zone ID");
      return;
    }
    
    // Here you would typically process the checkout
    alert(`Checkout with package: ${selectedPackage}, payment: ${selectedPayment}, User ID: ${userId}, Zone ID: ${zoneId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-3xl font-bold">Mobile Legends Top Up</h1>
              <p className="mt-2 opacity-90">Get diamonds and passes instantly</p>
            </div>
            <img 
              src="https://play-lh.googleusercontent.com/eOSTyn3tnJrezNp0pBV-grARGI8xWM0ylM0fZYoV-ZFaY52wCjyRwn0uIsWrAhQjzg" 
              alt="Mobile Legends Logo" 
              className="h-16 w-16 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Pilih Nominal Top Up</h2>
            </div>
            
            {/* Passes Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Mobile Legend Pass</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {passes.map((pass) => (
                  <div 
                    key={pass.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPackage === pass.id 
                        ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handlePackageSelect(pass.id)}
                  >
                    <h4 className="font-semibold text-gray-800">{pass.name}</h4>
                    {pass.bonus && <p className="text-xs text-green-600 mt-1">{pass.bonus}</p>}
                    <p className="text-xs text-gray-500 mt-2">Dari</p>
                    <p className="font-bold text-indigo-600">{pass.price}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Diamonds Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Diamonds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {diamonds.map((diamond) => (
                  <div 
                    key={diamond.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedPackage === diamond.id 
                        ? 'border-indigo-500 bg-indigo-50 shadow-md' 
                        : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                    }`}
                    onClick={() => handlePackageSelect(diamond.id)}
                  >
                    <h4 className="font-semibold text-gray-800">{diamond.name}</h4>
                    <p className="text-xs text-green-600 mt-1">{diamond.bonus}</p>
                    <p className="text-xs text-gray-500 mt-2">Dari</p>
                    <p className="font-bold text-indigo-600">{diamond.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Pilih Metode Bayar</h2>
            </div>
            
            <h3 className="text-md font-semibold text-gray-700 mb-4">E-Wallet dan QRIS</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id} 
                  className={`border rounded-lg p-4 cursor-pointer transition-all flex items-center justify-between ${
                    selectedPayment === method.id 
                      ? 'border-indigo-500 bg-indigo-50' 
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                  onClick={() => handlePaymentSelect(method.id)}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{method.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-800">{method.name}</h4>
                      {method.label && <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">{method.label}</span>}
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">{method.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Account Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Masukkan Detail Akun</h2>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-medium text-gray-700">User ID</label>
                <button 
                  onClick={() => setIsGuideOpen(!isGuideOpen)}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Panduan
                </button>
              </div>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan User ID"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Zone ID</label>
              <input
                type="text"
                value={zoneId}
                onChange={(e) => setZoneId(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Masukkan Zone ID"
              />
            </div>
            
            {isGuideOpen && (
              <div className="bg-indigo-50 p-4 rounded-md mb-6">
                <h4 className="text-sm font-medium text-indigo-800 mb-2">Panduan</h4>
                <p className="text-sm text-indigo-700">
                  Tap menu profile di pojok kiri atas dari menu utama game buat lihat ID. Contoh: 12345678(1234)
                  <button className="ml-2 text-indigo-800 font-medium hover:underline">Selengkapnya</button>
                </p>
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email (opsional)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Kamu bisa isi jika mau terima bukti transaksi"
              />
            </div>
          </div>
        </div>
        
        {/* Checkout Button */}
        <div className="flex justify-end">
          <button
            onClick={handleCheckout}
            className={`px-6 py-3 rounded-lg text-white font-medium ${
              selectedPackage && selectedPayment && userId && zoneId
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!selectedPackage || !selectedPayment || !userId || !zoneId}
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileLegendPage;