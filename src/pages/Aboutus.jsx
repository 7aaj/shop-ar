"use client";
import React from "react";
import Header from "../components/Header";

const Aboutus = () => {
  return (
    <>
      <Header />
      <section className="font-[Inter] text-white" dir="rtl">
        <section className="p-10 mx-auto my-0 bg-[#4A9200] max-w-[1920px] max-sm:p-5">
          <HeroTextSection />
          {/* <DecorativeElements /> */}
          <FeatureCards />
        </section>
      </section>
    </>
  );
};

//test

const HeroTextSection = () => {
  return (
    <header className="flex relative gap-10 mb-20 max-md:flex-col max-md:gap-8 z-10 ">
      <h1 className="text-5xl font-bold leading-tight max-w-[1100px] max-md:text-4xl max-sm:text-2xl">
        نحن نهضة، موقع متخصص في دعم وتمكين روّاد الأعمال وأصحاب المشاريع من خلال
        تقديم الدعم والترويج والتسويق لأصحاب المشاريع في سبيل تحقيق النجاح
        والنمو المستدام. نؤمن بأن كل فكرة عظيمة وريادية تستحق الانتشار والتوسع.
      </h1>

      <h2 className="pr-10 text-5xl font-bold leading-tight left-[text] max-md:text-4xl max-sm:text-2xl">
        هدفنا هو بناء مجتمع أعمال مزدهر، وتحفيز الابتكار، وتعزيز بيئة ريادية
        تدعم التنمية الاقتصادية.
      </h2>
    </header>
  );
};

const DecorativeElements = () => {
  return (
    <div className="relative max-md:hidden z-0">
      <div className="absolute rounded-2xl bg-indigo-400 bg-opacity-30 h-[38px] right-[18px] top-[-100px] w-[305px]" />
      <div className="absolute left-64 h-7 rounded-2xl bg-[#FCEB4F] bg-opacity-30 top-[21px] w-[118px]" />
      <div className="absolute rounded-full bg-[#F4A700] bg-opacity-30 h-[39px] left-[363px] top-[195px] w-[39px]" />
      <div className="absolute rounded-full bg-red-600 bg-opacity-30 h-[39px] left-[34px] top-[94px] w-[39px]" />
      <div className="absolute rounded-full bg-[#4A9200] bg-opacity-30 h-[39px] left-[132px] top-[404px] w-[39px]" />
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: "/icons/handShake.svg",
      title: "دعم وتمكين روّاد الأعمال",
      description:
        "نحن نوفر بيئة داعمة لروّاد الأعمال وأصحاب المشاريع، عبر تقديم استشارات ودورات تدريبية تساهم في تحقيق النجاح والنمو المستدام.",
    },
    {
      icon: "/icons/rocket.svg",
      title: "الترويج والتسويق",
      description:
        "نسعى للترويج للمشاريع الناشئة والشركات الصغيرة والمتوسطة عبر منصاتنا المختلفة، مما يساعدها على الوصول إلى جمهور أوسع.",
    },
    {
      icon: "/icons/light.svg",
      title: "تحفيز الابتكار والتنمية",
      description:
        "نهدف إلى تعزيز بيئة ريادية مزدهرة، تشجع على الإبداع والابتكار وتدعم التنمية الاقتصادية والاستدامة.",
    },
  ];

  return (
    <section className="flex gap-8 justify-between px-24 py-0 mt-52 max-md:flex-col max-md:items-center max-md:px-5 max-md:py-0 max-md:mt-16 max-sm:mt-10">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <>
      <article className="flex text-zinc-800 flex-col items-center text-center max-w-[350px] max-md:mb-10 max-sm:max-w-full z-10 shadow p-10 rounded-lg bg-white">
        <div className="mb-5 text-2xl text-amber-400">
          <img src={icon} alt="" className="w-30" />
        </div>
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
        <p className="text-base leading-normal ">{description}</p>
      </article>
    </>
  );
};

export default Aboutus;
