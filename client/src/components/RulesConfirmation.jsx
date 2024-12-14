import React, { useState } from "react";

const RulesConfirmation = ({
  isVisible,
  onConfirmConfirmation,
  onConfirmCancel,
}) => {
  const [language, setLanguage] = useState("english"); // State to toggle language

  const handleClose = () => {
    onConfirmCancel();
  };

  // Rules in both English and Urdu
  const rules = {
    english: [
      "Rule 1: Ensure the accuracy of your order before confirming.",
      "Rule 2: Orders cannot be changed after confirmation.",
      "Rule 3: Please double-check the shipping address.",
      "Rule 4: Returns are only accepted under our policy.",
      "Rule 5: Delivery timelines are subject to availability.",
    ],
    urdu: [
      "قاعدہ 1: تصدیق سے پہلے اپنے آرڈر کی درستگی کو یقینی بنائیں۔",
      "قاعدہ 2: تصدیق کے بعد آرڈرز کو تبدیل نہیں کیا جا سکتا۔",
      "قاعدہ 3: براہ کرم شپنگ ایڈریس کو دوبارہ چیک کریں۔",
      "قاعدہ 4: واپسی صرف ہماری پالیسی کے تحت قبول کی جاتی ہے۔",
      "قاعدہ 5: ترسیل کے اوقات دستیابی کے تابع ہیں۔",
    ],
  };

  return isVisible ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md px-8 py-5 max-w-xs md:max-w-lg">
        {/* Language Toggle Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold ${
              language === "english"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setLanguage("english")}
          >
            English
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold ${
              language === "urdu"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setLanguage("urdu")}
          >
            اردو
          </button>
        </div>

        {/* Header */}
        <h2 className="text-sm md:text-lg font-bold tracking-wider text-start mb-4">
          Confirm?
        </h2>

        {/* Rules Section */}
        <ul className="text-sm md:text-base text-gray-700 mb-6 space-y-2">
          {rules[language].map((rule, index) => (
            <li key={index} className="list-disc ml-5">
              {rule}
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-row-reverse justify-center gap-5">
          <button
            className="px-4 py-1 md:px-6 md:py-2 text-sm md:text-base tracking-wide rounded-md bg-white hover:bg-[#f9fafb] border border-[#828282] text-black font-medium focus:outline-none"
            onClick={handleClose}
          >
            No, cancel
          </button>
          <button
            className="px-4 py-1 md:px-6 md:py-2 text-sm md:text-base rounded-md tracking-wide bg-yellow-500 hover:opacity-75 text-white font-medium focus:outline-none"
            onClick={onConfirmConfirmation}
          >
            Yes, I'm sure
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default RulesConfirmation;
