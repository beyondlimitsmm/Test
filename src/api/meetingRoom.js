import base from "./base";

export const header = async () => await base("/meeting-room-header?populate=*");
