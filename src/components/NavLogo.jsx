import HotelLogo from "../assets/Logo.png";

export const NavLogo = () => {
  return (
    <div
      className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
      //   x-bind:class="{'hidden sm:block': atTop, 'hidden': open}"
    >
      <img
        className="transition duration-300"
        src={HotelLogo}
        alt="logo"
        width="150"
      />
    </div>
  );
};
