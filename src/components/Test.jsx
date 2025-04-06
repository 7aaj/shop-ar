"use client";
import React from "react";
import { FaBullhorn, FaGift, FaChartBar, FaHandsHelping } from "react-icons/fa";
import Header from "../components/Header";

const RegisterProject = () => {
  return (
    <>
      <section className="font-[Inter] text-white" dir="rtl">
        <section className="p-10 mx-auto my-0 bg-[#4A9200] max-w-[1920px] max-sm:p-5">
          <HeroSection />
          <FeaturesSection />
          <RegistrationForm />
        </section>
      </section>
    </>
  );
};

const HeroSection = () => {
  return (
    <header className="flex flex-col items-center text-center gap-6 mb-20 z-10">
      <h1 className="text-5xl font-bold leading-tight max-md:text-4xl max-sm:text-2xl">
        انضم إلى عالم نهضة.. وابدأ رحلتك نحو النجاح!
      </h1>
      <p className="text-xl max-w-[900px] leading-relaxed">
        نحن في نهضة نؤمن بأن المشاريع الصغيرة والمتوسطة هي أساس الاقتصاد
        المزدهر. لذلك، نقدم لكم فرصة ذهبية لتوسيع نطاق أعمالكم والوصول إلى جمهور
        أوسع من خلال خدمات التسويق الإلكتروني المجانية.
      </p>
    </header>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBullhorn size={35} className="text-green-700" />,
      title: "تسويق إلكتروني مجاني لمدة شهر",
      description:
        "سنقوم بتسويق منتجاتكم وخدماتكم عبر الإنترنت، مما يزيد من فرص نمو أعمالكم.",
    },
    {
      icon: <FaGift size={35} className="text-green-700" />,
      title: "هدية مميزة",
      description:
        "تصميم ريلز احترافي لمتجركم على صفحة نهضة الرسمية على إنستغرام، لتعزيز حضوركم الرقمي.",
    },
    {
      icon: <FaChartBar size={35} className="text-green-700" />,
      title: "فرصة للتوسع والانتشار",
      description:
        "نساعدكم على زيادة قدرتكم التنافسية في السوق والوصول إلى عملاء جدد.",
    },
    {
      icon: <FaHandsHelping size={35} className="text-green-700" />,
      title: "دعم مستمر",
      description:
        "فريق نهضة يقدم لكم الدعم والإرشاد لتحقيق أهدافكم التسويقية.",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-8 px-10 py-10">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex flex-col items-center text-center bg-white text-zinc-800 shadow-md rounded-lg max-w-xs p-10 px-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </article>
  );
};

const RegistrationForm = () => {
  return (
    <section className="bg-white text-zinc-800 p-10 mt-16 rounded-lg max-w-2xl mx-auto shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">نموذج التسجيل</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="اسم المشروع"
          className="form-input p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="نوع النشاط"
          className="form-input p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="form-input p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="tel"
          placeholder="رقم الهاتف"
          className="form-input p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="url"
          placeholder="رابط الموقع الإلكتروني (إن وجد)"
          className="form-input p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <textarea
          placeholder="وصف موجز للمشروع"
          className="form-textarea p-4 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[#4A9200] text-white py-3 rounded-md font-bold hover:bg-green-700"
        >
          تسجيل
        </button>
      </form>
    </section>
  );
};

export default RegisterProject;
