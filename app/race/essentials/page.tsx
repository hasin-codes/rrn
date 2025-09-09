
export default function EssentialsPage() {
  const essentials = [
    {
      category: "Hydration",
      items: ["Water bottle", "Electrolyte drinks", "Hydration pack"]
    },
    {
      category: "Nutrition",
      items: ["Energy gels", "Bananas", "Energy bars"]
    },
    {
      category: "Safety",
      items: ["First aid kit", "Emergency contact info", "Medical ID"]
    },
    {
      category: "Comfort",
      items: ["Proper running shoes", "Moisture-wicking clothes", "Hat/visor"]
    }
  ];

  return (
    <>
      <div className="w-full py-4 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">Race Day Essentials</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Race Day Essentials
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to know and bring for a successful race day. 
                Be prepared and make the most of your running experience.
              </p>
            </div>

            {/* Essentials Checklist */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {essentials.map((essential, index) => (
                  <div key={index} className="neumorphic-card p-6">
                    <h3 className="text-xl font-bold text-black mb-4">{essential.category}</h3>
                    <ul className="space-y-2">
                      {essential.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00D8D2] rounded-full"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
