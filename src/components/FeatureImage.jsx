const FeatureImage = ({ icon, title, description, detail }) => {
  return (
    <div className="p-10 w-full xl:w-[600px] h-max absolute inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-6 items-center">
        <img src={icon} alt="Articles" className="w-[60px] h-[60px]" />
        <h4 className="typo-title">{title}</h4>
        <p className="typo-body-2 text-center max-w-[450px] break-words">
          {description}
        </p>
      </div>

      <div className="mt-8 flex justify-center items-center">
        <button className="py-[14px] w-[180px] text-black bg-white opacity-100 border border-primary-100 text-primary-100">
          {detail}
        </button>
      </div>
    </div>
  );
};
export default FeatureImage;
