import Image from "next/image";
import { font_text } from "./layout";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import group from "../../public/assests/Group.svg"

export default function Home() {
  return (
    <main className="bg-dark-background">


      {/* hero section */}
      <section className="hero__section col -mt-28 min-h-[720px] text-white">
        <div className="flex items-center flex-wrap">
          <div className="container left__col w-full md:w-1/2 md:pl-[140px] mt-[120px] md:mt-[70px] md:pr-14 py-10">
            <h1 className="capitalize text-3xl leading-[42px] md:text-5xl font-medium tracking-wider md:leading-[68px]">
              Welcome to <br />
              <span className="uppercase text-primary">cellador</span> builders
            </h1>
            <p
              className={`${font_text} tracking-wider leading-8 text-lg font-light mt-2`}
            >
              We are a residential and commercial real estate acquisition,
              development and management firm. We have over a half century of
              real estate experience.{" "}
            </p>
            <Button text="Contact Us" link={"#contact"} className={"mt-10"} />
          </div>
          <div className="right__col w-full md:w-1/2">
            <Image
              className="brightness-50 h-[300px] md:h-[720px] rounded-none md:rounded-[0px 0px 0px 100px]"
              style={{
                objectFit: "cover",
              }}
              src={"/assests/heroimg.png"}
              height={798}
              width={746}
              alt="hero__image"
            />
          </div>
        </div>
      </section>


      {/* services section */}
      <section className="service__section py-16 md:py-32">
        <div className="container flex flex-wrap">
          <div className="left__col flex-1">
            <h1 className="text-[32px] md:text-[42px] tracking-wider leading-[36px] md:leading-[60px] text-white capitalize">
              Sustainable real
              <br />
              estate <span className="text-primary"> development</span>
            </h1>
          </div>
          <div className="right__col flex-1">
            <p className="text-white leading-8 text-lg font-light tracking-wide mt-3">
              Established in 2023, our company brings forth a wealth of
              experience, with our founding members collectively boasting over
              50 years of expertise in real estate investment, management, and
              development.
            </p>
          </div>
        </div>
        <div className="container flex flex-wrap md:flex-nowrap gap-5 mt-16">
          <ServiceCard url={'/assests/building.png'} text={"Our Commitment to Sustainability"}/>
          <ServiceCard url={'/assests/city.png'} text={"Focus on Multi-Unit Residential Properties"}/>
          <ServiceCard url={'/assests/Empowering.png'} text={"Empowering Communities"}/>
          <ServiceCard url={'/assests/house.png'} text={"Continuous Innovation"}/>
          <ServiceCard url={'/assests/tansparency.png'} text={"Transparency and Integrity"}/>
        </div>
      </section>


      {/* why choose us */}
      <section id="about" className="whyChooseUs py-12 md:py-32 text-white">
        <div className="container flex flex-wrap">
          <div className="col-left md:flex-1">
            <div className="image h-[220px] md:w-[460px] md:h-[570px] relative">
              <Image 
              src={"/assests/whychooseus.png"}
              alt=""
              width={460}
              height={570}
              className="z-10 relative h-[220px] md:w-[460px] md:h-[570px]"/>
              <Image
              src={group}
              alt=""
              width={160}
              height={135}
              className="absolute hidden md:block -top-10 -left-10 z-0"
              />
              <Image
              src={group}
              alt=""
              width={160}
              height={135}
              className="absolute hidden md:block -bottom-10 -right-10 z-0"
              />
            </div>
          </div>
          <div className="right-col md:flex-1 mt-10 md:ml-10 md:mr-16">
              <h2 className="text-lg tracking-widest font-semibold text-primary">Why Choose Us</h2>
              <h1 className="text-2xl md:text-4xl leading-[48px] capitalize md:leading-[62px] tracking-widest">Empowering a Sustainable Future</h1>
              <p className={`${font_text} font-light tracking-wide leading-8 md:leading-10 mt-3`}>At Cellador Builders, we are not just constructing buildings; we are crafting legacies. Each project is a testament to our belief in a future where real estate development leads the way in environmental stewardship and community empowerment. Together, we shape spaces that inspire, innovate, and endure. we build trust through open communication, accountability, and a steadfast commitment to delivering on our promises. </p>
              <Button text={'Contact Us'} link="#contact" className={'mt-6'}/>
          </div>
        </div>
      </section>


  {/* mission statement */}
  <section id="mission" className="ourMission py-12 md:py-32 text-white">
        <div className="container flex flex-wrap items-center">
          <div className="col-left md:flex-1">
              <Image 
              src={"/assests/ourMission.png"}
              alt=""
              width={460}
              height={500}
              className="w-[460px] h-[220px] md:w-[460px] md:h-[500px]"
              />
          </div>
          <div className="right-col mt-8 md:mt-0 md:flex-1 md:ml-10 md:mr-16">
              <h1 className="text-2xl md:text-4xl leading-[48px] capitalize md:leading-[62px] tracking-widest">Mission Statement</h1>
              <p className={`${font_text} font-light tracking-wide leading-8 md:leading-10 mt-3`}>At Cellador Builders LLC, we are dedicated to redefining the landscape of real estate development, driven by a profound commitment to innovation, sustainability, and excellence. Established in 2023, our company brings forth a wealth of experience, with our founding members collectively boasting over 50 years of expertise in real estate investment, management, and development. </p>
          </div>
        </div>
      </section>


 {/* vision statement */}
 <section id="vision" className="ourMission py-12 md:py-32 text-white">
        <div className="container flex md:flex-row-reverse flex-wrap items-center">
          <div className="col-left md:flex-1">
              <Image 
              src={"/assests/ourVision.png"}
              alt="our vision"
              width={460}
              height={500}
              className="w-[460px] h-[220px] md:w-[460px] md:h-[500px]"
              />
          </div>
          <div className="right-col mt-8 md:mt-0 md:flex-1 md:mr-16">
              <h1 className="text-2xl md:text-4xl leading-[48px] capitalize md:leading-[62px] tracking-widest">Our Vision</h1>
              <p className={`${font_text} font-light tracking-wide leading-8 md:leading-10 mt-3`}>We envision a future where urban landscapes are not only functional and economically viable, but also harmoniously integrated with the natural environment. Through our endeavors, we aim to set new standards in real estate development, demonstrating that progress can coexist with environmental stewardship. </p>
          </div>
        </div>
      </section>
    </main>
  );
}