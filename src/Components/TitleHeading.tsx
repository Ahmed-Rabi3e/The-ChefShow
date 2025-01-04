import { LiaSquareFullSolid } from "react-icons/lia";

interface titleProps {
  label: string;
  showIcons?: boolean;
  img: string;
}

const TitleHeading = ({ label, showIcons = true, img }: titleProps) => {
  return (
    <div className="flex flex-col justify-center items-center mb-6">
      <img src={img} alt="icon" loading="lazy" className="w-12 h-12 mb-4" />
      <div className="flex items-center gap-3">
        {showIcons && (
          <LiaSquareFullSolid size={10} className="rotate-45 fill-gold-500" />
        )}
        <h1 className="text-base text-gold-500 uppercase">{label}</h1>
        {showIcons && (
          <LiaSquareFullSolid size={10} className="rotate-45 fill-gold-500" />
        )}
      </div>
    </div>
  );
};

export default TitleHeading;
