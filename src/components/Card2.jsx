const Card2 = ({ toggle }) => {
  return (
    <div className="gradient rounded-lg shadow-md text-[var(--V-L-Grayish-Blue)] px-8 py-12 md:scale-y-110 md:max-h-[530px] self-center mb-1.2">
      <div className="flex flex-col gap-3  items-center">
        <p className="text-[18px] text-[var(--V-L-Grayish-Blue)]">
          Professional
        </p>
        <p className="text-4xl font-semibold flex items-center text-[var(--V-L-Grayish-Blue)]">
          <span>$</span>
          {toggle ? "249.99" : "24.99"}
        </p>
        <ul className="border-t border-[var(--L-Grayish-Blue)] flex flex-col self-stretch items-center">
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            2 TB Storage
          </li>
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            5 Users Allowed
          </li>
          <li className="border-b py-2 self-stretch text-center border-[var(--L-Grayish-Blue)]">
            Sends up to 10 GB
          </li>
        </ul>
        <button className="uppercase bg-gradient-to-r hover:from-[var(--L-purple)] hover:to-[var(--D-purple)] hover:text-[var(--V-L-Grayish-Blue)] w-full p-1.5 border-[1px] border-[var(--D-purple)] to-[var(--V-L-Grayish-Blue)] from-[var(--V-L-Grayish-Blue)] text-[var(--L-purple)] self-stretch rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card2;
