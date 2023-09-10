import Rectangle10 from "../../assets/images/Rectangle10.png";
import RestaurantColor from "../../assets/images/restaurant-color.svg";
import { OutlineButton } from "../../components/OutlineButton";

export const FeaturesSection = () => {
  return (
    <section id="features" className="container mx-auto overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800"
        className="flex xl:py-20 py-10 justify-center flex-col xl:flex-row"
      >
        <div className="relative xl:mr-[250px] mb-[80px] xl:mb-0 mx-4 xl:mx-0">
          <img
            src={Rectangle10}
            alt=""
            className="h-[300px] w-full xl:h-[650px] xl:w-auto object-cover"
          />

          <div
            data-aos="fade-down"
            data-aos-offset="100"
            data-aos-duration="500"
            className="h-44 w-[300px] absolute xl:h-64 xl:w-[440px] -bottom-12 right-0 xl:-right-48 xl:top-1/2 xl:-translate-y-1/3"
          >
            <img
              src={Rectangle10}
              alt=""
              className="h-full w-full object-cover border-[12px] border-white shadow-lg rotate-[-3deg]"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            />
          </div>
        </div>

        <div className="z-20 w-full xl:w-[400px] bg-white px-10 pb-10 flex flex-col justify-center items-center transition-opacity duration-200">
          <img src={RestaurantColor} alt="" className="w-24 h-24" />
          <h6 className="typo-title capitalize typo-text-black font-modesfa">
            Pool
          </h6>
          <p className="py-6 typo-body-2 text-center typo-text-black">
            Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum
            urna non suscipit convallis. A vulputate nunc commodo urna
          </p>
          <OutlineButton routeTo="/pool" text="Let's Explore"></OutlineButton>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-duration="800"
        className="flex xl:py-20 py-10 justify-center flex-col xl:flex-row-reverse"
      >
        <div className="relative xl:ml-[250px] mb-[60px] xl:mb-0 mx-4 xl:mx-0">
          <img
            src={Rectangle10}
            alt=""
            className="h-[300px] w-full xl:h-[650px] xl:w-auto object-cover"
          />

          <img
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="550"
            src={Rectangle10}
            alt=""
            className="h-44 w-[300px] absolute xl:h-64 xl:w-[440px] left-4 -bottom-12 object-cover border-[12px] border-white xl:-left-48 xl:top-1/2 xl:-translate-y-1/3"
            style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
          />
        </div>

        <div className="z-20 w-full xl:w-[400px] bg-white px-10 pb-10 flex flex-col justify-center items-center transition-opacity duration-200">
          <img src={RestaurantColor} alt="" className="w-24 h-24" />
          <h6 className="typo-title capitalize typo-text-black font-modesfa">
            Meeting Room
          </h6>
          <p className="py-6 typo-body-2 text-center typo-text-black">
            Lorem ipsum dolor sit amet consectetur. Congue felis nunc dictum
            urna non suscipit convallis. A vulputate nunc commodo urna
          </p>
          <OutlineButton
            routeTo="/meeting-room"
            text="Let's Explore"
          ></OutlineButton>
        </div>
      </div>
    </section>
  );
};
