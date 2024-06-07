import { ClassType, SelectedPageEnum } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from './Class'

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image1,
  },
  {
    name: "Yoga Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image2,
  },
  {
    name: "Ab Core Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image3,
  },
  {
    name: "Adventure Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image4,
  },
  {
    name: "Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image5,
  },
  {
    name: "Fitness Training Classes",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis necessitatibus est velit quae numquam dolores minima aliquid error nemo!",
    img: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPageEnum) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageEnum.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.3 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              tenetur animi vitae aut veritatis incidunt voluptatum, cumque
              laborum natus, enim inventore rerum tempore sapiente dolores? Iure
              placeat quis aliquid, non fugiat corporis totam recusandae ipsum
              magnam aliquam libero aperiam dolorum eos ducimus repellat rerum
              voluptatum nesciunt saepe? Quae, veritatis sint.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, idx) => (
              <Class
                key={`${item.name}-${idx}`}
                name={item.name}
                img={item.img}
                desc={item.desc}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
