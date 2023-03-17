import { SelectedPage} from '@/shared/types';
import {motion} from "framer-motion";
import HText from '@/shared/HText';
import Class from "./Class";
import image1 from "@/asset/image1.png";
import image2 from "@/asset/image2.png";
import image3 from "@/asset/image5.jpg";               
import image4 from "@/asset/image4.jpg";
import image5 from "@/asset/image5.jpg";
import image6 from "@/asset/image6.jpg";



const classes  = [ 
  {
    name: "Adventure Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image1,
  },
  {
    name: "Ab Core Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image2,
  },
  {
    name: "Fitness Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image3,
  },
  {
    name: "Training Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image4,
  },
  {
    name: "weight Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image5,
  },
  {
    name: "Yoga Classes",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, animi maxime! Hic nemo pariatur excepturi",
    image: image6,
  }
]


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return  <section id="ourclasses" className="w-full bg-primary-100 py-40 "> 
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>


    <motion.div
    className='mx-auto w-5/6'
    initial="hidden"
    whileInView="visible"
    viewport={{once:true, amount: 0.5 }}
    transition={{delay:0.2, duration:0.5}}
    variants= {{
      hidden: {opacity:0, x: -50},
      visible: {opacity:1, x: 0},
    }}
    >
      <div className='md:w-3/5'>
        <HText>OUR CLASSES</HText>
        <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptas ipsum veritatis obcaecati explicabo minus vero omnis corporis ea magni.</p>
      </div>
    </motion.div>
    <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
      <ul className='w-[2800px] whitespace-nowrap'>
        {classes.map((item, index)=> (
          <Class
          key={`${item.name}-${index}`}
          name={item.name}
          description={item.description}
          image={item.image} 
          />
        ))}
      </ul>
    </div>
    </motion.div>
    </section>
  
}

export default OurClasses