import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/svg-i9wqfg2qs";

function Group() {
  return (
    <div className="absolute contents leading-[normal] left-[9px] text-white top-[19px] whitespace-nowrap">
      <p className="absolute font-['Roboto_Mono:Medium',sans-serif] font-medium left-[10px] text-[16px] top-[275px] tracking-[0.64px]">
        1234 1234 1234 1234
      </p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[10px] not-italic text-[12px] top-[240px] tracking-[0.6px] uppercase">
        OLIVIA RHYE
      </p>
      <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[205px] not-italic text-[12px] text-right top-[240px] tracking-[0.6px]">
        06/24
      </p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[10px] not-italic text-[16px] top-[20px]">
        Untitled.
      </p>
    </div>
  );
}

function Mastercard() {
  return (
    <div className="absolute inset-[20.96%_16.59%_23.21%_17.65%]" data-name="Mastercard">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.8106 17.8662">
        <g id="Mastercard">
          <path d={svgPaths.p318ea700} fill="var(--fill-0, white)" id="Left" opacity="0.5" />
          <path d={svgPaths.p2fc3e700} fill="var(--fill-0, white)" id="Right" opacity="0.5" />
          <path d={svgPaths.p3c8def80} fill="var(--fill-0, white)" id="Middle" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodIcon() {
  return (
    <div
      className="absolute bg-[rgba(255,255,255,0.1)] h-[32px] left-[9px] rounded-[4px] top-[195px] w-[45.333px]"
      data-name="Payment method icon"
    >
      <Mastercard />
    </div>
  );
}

function PayPassIcon() {
  return (
    <div className="absolute h-[24px] right-[10px] top-[19px] w-[20px]" data-name="PayPass icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g clipPath="url(#clip0_1_56)" id="PayPass icon">
          <path
            d={svgPaths.p2f32b940}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeWidth="2.57143"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_56">
            <rect fill="white" height="24" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Card() {
  return (
    <div
      className="backdrop-blur-[6px] border border-solid border-white h-[514px] relative rounded-[16px] shadow-[8px_10px_16px_0px_rgba(0,0,0,0.05)] w-[352px]"
      data-name="Theme=Transparent"
      style={{
        backgroundImage:
          "linear-gradient(106.141deg, rgba(255, 255, 255, 0.51) 3.5118%, rgba(255, 255, 255, 0) 111.71%)",
      }}
    >
      <Group />
      <PaymentMethodIcon />
      <PayPassIcon />
    </div>
  );
}

export default function App() {
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#111] relative size-full overflow-hidden">
      {/* Left Card */}
      <motion.div
        className="absolute"
        initial={{ x: 150, y: 350, rotate: -10.96 }}
        animate={{
          x: isSwapped ? 1050 : 150,
          y: isSwapped ? [350, 200, 250] : [250, 200, 350],
          rotate: isSwapped ? 10.51 : -10.96,
        }}
        transition={{
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
          times: [0, 0.5, 1],
        }}
      >
        <Card />
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="absolute"
        initial={{ x: 1050, y: 250, rotate: 10.51 }}
        animate={{
          x: isSwapped ? 150 : 1050,
          y: isSwapped ? [250, 200, 350] : [350, 200, 250],
          rotate: isSwapped ? -10.96 : 10.51,
        }}
        transition={{
          duration: 1.5,
          ease: [0.43, 0.13, 0.23, 0.96],
          times: [0, 0.5, 1],
        }}
      >
        <Card />
      </motion.div>

      {/* Center Text */}
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-1/2 not-italic text-[60px] text-center text-white top-[calc(50%-73.5px)] tracking-[3px] uppercase whitespace-nowrap">
        SCAMBIO
        <br aria-hidden="true" />
        ACCETTATO
      </p>
    </div>
  );
}
