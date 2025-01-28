interface SizeCardProsp {
  size: string;
}

const SizeCard = ({ size }: SizeCardProsp) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="px-2 py-2 w-10 bg-grey-light rounded justify-center items-center  text-center">
        <span className="">{size}</span>
      </div>
    </div>
  );
};

export default SizeCard;
