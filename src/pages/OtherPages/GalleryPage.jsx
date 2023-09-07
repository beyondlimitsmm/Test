export const GalleryPage = () => {
  return (
    <>
      <section className="my-20">
        <nav className="flex justify-between md:px-20 w-full relative border-b border-stellarLightGrey mb-18">
          <div className="flex justify-start items-center">
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3A1E13"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>  */}
          </div>
          <ul className="navSlider inline-block py-4 md:py-7 xl:py-9 whitespace-nowrap overflow-x-auto font-walbaum">
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
              <button type="button" className="menu-items text-hoverPale">
                <h6 className="break-words text-2xl xl:text-3xl">Exterior</h6>
              </button>
            </li>
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
              <button type="button" className="menu-items">
                <h6 className="break-words text-2xl xl:text-3xl">
                  Rooms &amp; Suites
                </h6>
              </button>
            </li>
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4 js-active">
              <button type="button" className="menu-items">
                <h6 className="break-words text-2xl xl:text-3xl">
                  Restaurants
                </h6>
              </button>
            </li>
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
              <button type="button" className="menu-items">
                <h6 className="break-words text-2xl xl:text-3xl">Spa</h6>
              </button>
            </li>
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
              <button type="button" className="menu-items">
                <h6 className="break-words text-2xl xl:text-3xl">
                  Meetings &amp; Events
                </h6>
              </button>
            </li>
            <li className="relative inline-block text-center mx-4 md:mx-7 xl:mx-9 first:ml-4 last:mr-4">
              <button type="button" className="menu-items">
                <h6 className="break-words text-2xl xl:text-3xl">Videos</h6>
              </button>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3A1E13"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-arrow-right"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>  */}
          </div>
        </nav>
      </section>
    </>
  );
};
