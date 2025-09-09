
export default function FAQPage() {
  const faqs = [
    {
      question: "How do I join RunRise Nation?",
      answer: "You can join by registering on our website or attending one of our community runs."
    },
    {
      question: "What events do you organize?",
      answer: "We organize various running events including 5K, 10K, half marathons, and full marathons."
    },
    {
      question: "Do I need to be an experienced runner?",
      answer: "No! We welcome runners of all levels, from beginners to experienced athletes."
    },
    {
      question: "How can I get my race certificates?",
      answer: "Race certificates are available for download from your profile after completing an event."
    },
    {
      question: "What is the RunRise Nation community like?",
      answer: "Our community is supportive, inclusive, and passionate about running and personal growth."
    }
  ];

  return (
    <>
      <div className="w-full py-4 px-4 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="neumorphic-card overflow-hidden space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-[#D5FFF8] border border-[#00D8D2] rounded backdrop-blur-sm">
                <span className="text-[#00827e] font-bold">FAQ</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-black leading-tight">
                Get Answers
              </h1>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to the most commonly asked questions about RunRise Nation, 
                our events, and how to get started with your running journey.
              </p>
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="neumorphic-card p-6">
                  <h3 className="text-xl font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
