import axios from "axios";
const baseURL = `https://nftmenas.lt/`;

export const KramaClient = axios.create({ baseURL });

export const PROFILE_BASE_URL = `${baseURL}/assets/profile/pic`;
export const COVER_PIC_BASE_URL = `${baseURL}/assets/profile/cover`;
