import { star } from "../assets/icons";

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div  className=''>
        <img src={imgURL}/>
        
        <div className="flex  justify-start gap-2.5 mt-8">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
            </p>
        </div>

        <h3 className="text-2xl mt-2 leading-normal font-semibold font-palanquin">
            {name}
        </h3>
        <p className="text-2xl mt-2 text-coral-red font-semibold font-montserrat leading-normal">
            {price}
        </p>
       
    </div>

  )
}

export default PopularProductCard