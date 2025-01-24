interface CarouselButtonProps {
  children: React.ReactNode;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ children }) => {
  return (
    <div className="p-4 rounded cursor-pointer bg-slate-100 transition-all delay-150 hover:bg-black hover:text-white">
      {children}
    </div>
  );
};

export default CarouselButton;
