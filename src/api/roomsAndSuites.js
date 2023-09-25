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
