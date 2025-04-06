import React from "react";
import { FiBox, FiShoppingCart, FiTag } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      dir="rtl"
      className="bg-[#4A9200] text-white py-8 px-6 relative flex flex-col gap-y-12"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className="text-center md:text-right md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            مرحبًا بك في موقعنا
          </h1>
          <p className="text-lg mb-6">نقدم لك أفضل الحلول لتحقيق النجاح</p>
          {/* <button className="bg-[#F4A700] text-black py-2 px-6 rounded-lg font-semibold">
            ابدأ الآن
          </button> */}
        </div>

        {/* Right side image or illustration */}
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img className="w-[600px]" src="/banner.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-x-28 px-10 w-full">
        <div className="rounded-lg bg-white shadow p-6 text-black text-center space-y-3 pb-20">
          <FiShoppingCart className="text-4xl mx-auto text-blue-500" />
          <h1 className="font-semibold text-xl">عدد غير محدود من المنتجات</h1>
          <p className="max-w-64">
            يمكنك إضافة عدد غير محدود من المنتجات إلى متجرك مجاناً
          </p>
        </div>
        <div className="rounded-lg bg-white shadow p-6 text-black text-center space-y-3 pb-20">
          <FiBox className="text-4xl mx-auto text-green-500" />
          <h1 className="font-semibold text-xl">سهولة إدارة المخزون</h1>
          <p className="max-w-64">
            يمكنك تنظيم وإدارة مخزونك بكل سهولة دون أي تعقيدات.
          </p>
        </div>
        <div className="rounded-lg bg-white shadow p-6 text-black text-center space-y-3 pb-20">
          <FiTag className="text-4xl mx-auto text-red-500" />
          <h1 className="font-semibold text-xl">عروض وخصومات مذهلة</h1>
          <p className="max-w-64">
            قم بإنشاء عروض وخصومات لجذب المزيد من العملاء بسهولة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
