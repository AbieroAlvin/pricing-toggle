const Card1 = ({ toggle }) => {
  return (
    <div className="bg-[#fff] rounded-lg shadow-md text-[var(--Grayish-Blue)] px-8 min-w-[300px] py-12 md:max-h-[470px] self-center mb-1.2">
      <div className="flex flex-col gap-3  items-center">
        <p className="text-[18px] ">Basic</p>
        <p className="text-4xl font-semibold flex items-center text-[var(--D-Grayish-Blue)]">
          <span>$</span>
          {toggle ? "199.99" : "19.99"}
        </p>
        <ul className="border-t border-[var(--L-Grayish-Blue)] flex flex-col self-stretch items-center">
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            500 GB Storage
          </li>
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            2 Users Allowed
          </li>
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            Sends up to 3 GB
          </li>
        </ul>
        <button className="uppercase bg-gradient-to-r from-[var(--L-purple)] to-[var(--D-purple)] text-[var(--V-L-Grayish-Blue)] w-full p-1.5 hover:border-[1px] hover:border-[var(--D-purple)] hover:to-[var(--V-L-Grayish-Blue)] hover:from-[var(--V-L-Grayish-Blue)] hover:text-[var(--L-purple)] self-stretch rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card1;
