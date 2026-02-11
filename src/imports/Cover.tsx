import svgPaths from "./svg-d2vs9mct28";
import imgLandingPage1 from "figma:asset/2843483d70f5cb65dd926a88065355132321e35a.png";

export default function Cover() {
  return (
    <div className="bg-[#e3f7ff] relative size-full" data-name="Cover">
      <div className="absolute left-[-118px] size-[634px] top-[-208px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 634 634">
          <g id="Group 201">
            <circle cx="317" cy="317" fill="var(--fill-0, #D7EFF9)" id="Ellipse 27" r="300.434" />
            <circle cx="317" cy="317" id="Ellipse 29" r="316.5" stroke="var(--stroke-0, #9AD6F0)" />
          </g>
        </svg>
      </div>
      <div className="absolute contents left-[57px] top-[-274px]">
        <div className="absolute h-[1728px] left-[57px] shadow-[0px_-303px_85px_0px_rgba(63,168,233,0),0px_-194px_78px_0px_rgba(63,168,233,0),0px_-109px_66px_0px_rgba(63,168,233,0.01),0px_-49px_49px_0px_rgba(63,168,233,0.02),0px_-12px_27px_0px_rgba(63,168,233,0.02),0px_0px_0px_0px_rgba(63,168,233,0.02)] top-[91px] w-[820px]" data-name="Landing Page 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage1} />
        </div>
        <div className="absolute h-[1267px] left-[943px] shadow-[0px_869px_243px_0px_rgba(41,116,163,0),0px_556px_222px_0px_rgba(41,116,163,0.01),0px_313px_188px_0px_rgba(41,116,163,0.03),0px_139px_139px_0px_rgba(41,116,163,0.04),0px_35px_76px_0px_rgba(41,116,163,0.05),0px_0px_0px_0px_rgba(41,116,163,0.05)] top-[-274px] w-[600px]" data-name="Landing Page 3">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLandingPage1} />
        </div>
      </div>
      <p className="absolute font-['Gilroy:ExtraBold',sans-serif] leading-[80px] left-[943px] not-italic text-[80px] text-nowrap top-[1055px] tracking-[5px] uppercase">Megamart</p>
      <div className="absolute contents left-[1463px] top-[1055px]">
        <div className="absolute border border-[#008ecc] border-solid left-[1463px] rounded-[24px] size-[80px] top-[1055px]" />
        <div className="absolute inset-[88.84%_4.87%_6.39%_92.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.1539 57.2309">
            <g id="Group 109">
              <path d={svgPaths.p203ac400} fill="var(--fill-0, #1ABCFE)" id="Vector" />
              <path d={svgPaths.p18814600} fill="var(--fill-0, #0ACF83)" id="Vector_2" />
              <path d={svgPaths.p29624580} fill="var(--fill-0, #FF7262)" id="Vector_3" />
              <path d={svgPaths.p1b667700} fill="var(--fill-0, #F24E1E)" id="Vector_4" />
              <path d={svgPaths.p137c8b00} fill="var(--fill-0, #A259FF)" id="Vector_5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}