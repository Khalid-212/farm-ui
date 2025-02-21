import Image from "next/image";
import dashboard from "../../public/dashboard.png";
import bgback from "../../public/bg-back.png";
import { ContainerScroll } from "components/DashboardSlider";
import { BorderBeam } from "components/ui/BorderBeam";

const DashboardDemo = () => {
  return (
    <div className="top-0 z-50 ">
      <ContainerScroll key={12}>
        <div className="flex relative mx-auto  w-[calc(100%-300px)] justify-center items-center mt-20 ">
          <Image
            src={dashboard}
            width={1000}
            height={1000}
            className="w-full object-contain shadow-lg"
            alt="Dashboard showcase"
          />
         <BorderBeam size={250} duration={12} delay={9} />
        <Image src={bgback} width={1000} height={1000} alt="Shadow image" className="absolute  bottom-0 z-10 opacity-45" />
        <Image src={bgback} width={1000} height={1000} alt="Shadow image" className="absolute left-0  bottom-0 z-10 opacity-35" />

        </div>
      </ContainerScroll>
    </div>
  );
};

export default DashboardDemo;
