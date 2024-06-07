import { SelectedPageEnum } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionBtn from "@/shared/ActionBtn";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type HomeProps = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

const Home = ({ setSelectedPage }: HomeProps) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPageEnum.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] before:-left-20 md:before:content-evolvetext ">
                <img alt="homePge-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unlock Your Potential with Evogym! Join Now for Our Online Launch
              and Transform Your Fitness Journey. Experience Top-notch Training,
              Expert Guidance, and a Supportive Community. Get Fit, Stay
              Healthy!
            </p>
          </motion.div>
          {/* ACTIONS - */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{delay:0.3, duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionBtn setSelectedPage={setSelectedPage}>Join Now</ActionBtn>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
              href={`#{SelectedPageEnum.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 justify-items-end">
          <img src={HomePageGraphic} alt="homePage-Graphic" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="sponsor-red-bull" src={SponsorRedBull} />
              <img alt="sponsor-fortune" src={SponsorFortune} />
              <img alt="sponsor-forbes" src={SponsorForbes} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
