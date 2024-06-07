import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPageEnum } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionBtn from "@/shared/ActionBtn";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Evogym offers state-of-the-art facilities, advanced equipment, and exceptional trainers. Elevate your fitness journey with us today!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Join Evogym for 100's of diverse classes tailored to all fitness levels. Discover your perfect workout today!",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert And Pro-Trainers",
    description:
      "Train with expert and pro-trainers, dedicated to guiding you toward your fitness goals with personalized support and motivation.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

type BenefitsProps = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

function Benefits({ setSelectedPage }: BenefitsProps) {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onClick={() => setSelectedPage(SelectedPageEnum.Benefits)}>
        <div>
          {/* HEADER */}
          <motion.div
            className="md:my-5 md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.3 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>MORE THAN JUST A GYM.</HText>
            <p className="my-5 text-sm">
              We provide world class fitness equipment, trainers and classes
              that will get you to your ultimate fitness goals with ease. We
              provide overwhelming care into each and every member.
            </p>
          </motion.div>
        </div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefitsPage-graphic"
            src={BenefitsPageGraphic}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.3 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Staying fit is crucial for maintaining overall well-being and
                enhancing the quality of life. Regular physical activity
                improves cardiovascular health, strengthens muscles and bones,
                and helps manage weight, reducing the risk of chronic diseases
                such as diabetes and heart disease. Additionally, exercise
                boosts mental health by alleviating stress, anxiety, and
                depression, while promoting better sleep and cognitive function.
                Staying active also fosters social connections and increases
                self-esteem, contributing to a positive self-image.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Integer at eros ac risus congue tempor.
                Sed non ligula sit amet risus eleifend dictum. Cras gravida
                tortor quis libero congue, sit amet ultrices ipsum molestie.
                Aliquam erat volutpat. Maecenas hendrerit velit sit amet odio
                volutpat, ac gravida odio mattis.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionBtn setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionBtn>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;
