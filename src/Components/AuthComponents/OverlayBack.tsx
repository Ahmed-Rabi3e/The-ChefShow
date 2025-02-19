const OverlayImages = ({ bgImg }: { bgImg: string }) => {
  return (
    <>
      <div className="h-[440px] w-full absolute top-0 left-0 hidden md:block">
        <img
          src={bgImg}
          alt="background"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full hidden md:block">
        <img
          src={bgImg}
          alt="background"
          loading="lazy"
          className="h-[180px] w-full object-cover"
        />
      </div>
    </>
  );
};

export default OverlayImages;
