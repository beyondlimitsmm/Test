import base from "./base";

export const getRooms = async () =>
  await base(
    "/rooms/?populate[featuredImage][populate]&populate[backgroundImage][populate]=*&populate[galleryImages][populate]=*&populate[roomFeatures][populate]=*&populate[roomDetails][populate]"
  );

export const getSuites = async () =>
  await base(
    "/suites/?populate[featuredImage][populate]&populate[backgroundImage][populate]=*&populate[galleryImages][populate]=*&populate[suiteFeatures][populate]=*&populate[suiteDetails][populate]"
  );

export const getRoomTypes = async () => await base("/room-type?populate=*");

export const getContactUs = async () => await base("/contact-us?populate=*");

export const getRoomNames = async () => await base("/rooms");

export const getSuiteNames = async () => await base("/suites?fields[0]=title");
