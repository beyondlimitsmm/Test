import base from "./base";

export const header = async () => await base("meeting-room-header?populate=*");

export const about = async () => await base("meeting-room-about?populate=*");

export const facility = async () =>
  await base(
    "meeting-room-facility?populate[facilityNames][populate]=*&populate[button][populate]=*"
  );
