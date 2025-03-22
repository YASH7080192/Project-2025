import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What services does HiringEngineers provide?",
      answer:
        "HiringEngineers connects you with highly skilled engineers for home architecture, construction, and design projects.",
    },
    {
      question: "How do I hire an engineer through your platform?",
      answer:
        "You can browse profiles, check ratings, and directly hire engineers who match your project requirements.",
    },
    {
      question: "Are the engineers on your platform certified?",
      answer:
        "Yes, all engineers undergo a verification process to ensure they are qualified professionals in their field.",
    },
    {
      question: "What payment options do you offer?",
      answer:
        "We accept payments via credit/debit cards, UPI, and direct bank transfers for secure transactions.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our support team via email or phone, available 24/7 to assist you with any inquiries.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            {/* Question Section */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-indigo-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer Section */}
            {openIndex === index && (
              <div className="mt-2 p-4 bg-indigo-50 rounded-lg shadow-sm">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
