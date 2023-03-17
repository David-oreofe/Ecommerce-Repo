import {HomeModernIcon, UserGroupIcon, AcademicCapIcon,} from "@heroicons/react/24/solid"
import { BenefitType, SelectedPage } from '@/shared/types'
import {motion} from "framer-motion";
import HText from '@/shared/HText';
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/asset/BenefitsPageGraphic.png";


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6'/>,
        title: "state of the Art Facilities",
        description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet suscipit soluta aut iste cumque at"
    },

    {
        icon: <UserGroupIcon className='h-6 w-6'/>,
        title: "100s of diverse classes",
        description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet suscipit soluta aut iste cumque at"
    },

    {
        icon: <AcademicCapIcon className='h-6 w-6'/>,
        title: "Expert and pro trainers",
        description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet suscipit soluta aut iste cumque at"
    }
]

const container = { 
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}


const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20' >
       <motion.div
       onViewportEnter ={()=> setSelectedPage(SelectedPage.Benefits)}
       >
        {/* {Header} */}
        <motion.div 
        className='md:my-5 md:w-3/5'
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5 }}
        transition={{duration:0.5}}
        variants= {{
          hidden: {opacity:0, x: -50},
          visible: {opacity:1, x: 0},
        }}
        >
            <HText>MORE THAN JUST A GYM</HText>
            <p className='my-5 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione vel voluptatibus optio quidem natus temporibus aut odit magni ipsa sequi velit beatae amet, 
            laboriosam at, quam eos maiores accusantium rem.
            </p>
        </motion.div>

        {/* {benefits} */}
        <motion.div className='md:flex items-center justify-between gap-8 mt-5'
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
        {benefits.map((benefit: BenefitType) => (
            <Benefit
            key= {benefit.title}
            title={benefit.title}
            icon={benefit.icon}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
        ))}
        </motion.div>

        {/* {graphics and description} */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* {graphics} */}
                <img
                className="mx-auto"
                alt="benefits-page-graphics"
                src={BenefitsPageGraphic}
                />
                {/* {description} */}
                <div>
                    {/* {title} */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once:true, amount: 0.5 }}
                            transition={{duration:0.5}}
                            variants= {{
                              hidden: {opacity:0, x: 50},
                              visible: {opacity:1, x: 0},
                            }}
                            >
                                <HText>MILLIONS OF HAPPY MEMBERS
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* {description} */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true, amount: 0.5 }}
                    transition={{delay: 0.2, duration:0.5}}
                    variants= {{
                      hidden: {opacity:0, x: 50},
                      visible: {opacity:1, x: 0},
                    }}
                    >
                        <p className="my-5">  
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad sunt in itaque alias officia magni cupiditate doloribus laborum esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur iure, laboriosam officia unde nostrum accusantium fuga necessitatibus doloribus quod voluptatum.   
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus modi temporibus maxime nesciunt commodi.
                        </p>
                    </motion.div>
                    {/* {button} */}

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>

            </div>

       </motion.div>
    </section>
  )
}

export default Benefits