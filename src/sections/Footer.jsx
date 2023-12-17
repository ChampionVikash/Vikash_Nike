import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
           <a href="/">
            <img 
                src={footerLogo}
                alt="logo"
                width={150}
                height={150}
                className="m-0" />
           </a>
           <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
           Get shoes ready for the new term at your nearest Nike store. Find
           Your perfect Size In Store. Get Rewards
           </p>
           <div className='flex gap-5 mt-8 items-center'>
            {socialMedia.map((icon) => (
              <div
              className="bg-white flex justify-center items-center w-12 h-12 rounded-full"
                key={icon.src}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
            {footerLinks.map((foot) => (
             <div key={foot.title}>
               <h3 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">
                 {foot.title}
                 </h3>

               <ul>
                {foot.links.map((link) =>(
                  <li key={link.name} className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-slate-gray ">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
               </ul>
             </div>
            ))}
        </div>

      </div>

    
      <div className="text-white-400 flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
         <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
         <p>Vikash_Nike</p>
          <img 
             src={copyrightSign}
             alt="copyright sign"
             width={20}
             height={20}
             className="rounded-full m-0"
           />
          <p>Copyright. All rights reserved.</p>
         </div>
         <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>

    </footer>
  )
}

export default Footer