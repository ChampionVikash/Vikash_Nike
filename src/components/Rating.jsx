import { star } from "../assets/icons";

const Rating = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col " >
      <img
        src={imgURL}
        alt='customer'
        className="rounded-full w-[120px] h-[120px] object-cover "
      />
      <p className="max-w-sm mt-6 text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center info-text">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating start"
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray" >({rating})</p>
      </div>
      <h3 className="text-3xl font-palanquin mt-1 text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default Rating;
