import Logo from "@/asset/Logo.png"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img alt="logo" src={Logo}/>
        <p className="my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ab similique asperiores quidem nemo totam esse quo nisi eaque repellat et, ipsam numquam beatae
          maiores eveniet consequatur perspiciatis earum maxime?
        </p>
        <p>Evogym All Rights Reserved.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Lorem ipsum dolor sit.</p>
        <p className="my-5">Lorem ipsum dolor sit.</p>
        <p >ipsum dolor sit.</p>
      </div> 

       <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">dolor sit amet consectetur adipisicing elit. Cum, distinctio?</p>
        <p >(333)425-6825</p>
      </div>   

      <div></div>      
      </div>
    </footer>
  )
}

export default Footer