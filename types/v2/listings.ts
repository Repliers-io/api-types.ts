import * as V1 from "../listings.js";
import { Extend } from '../index.js';

export interface Map {
   latitude: number;
   longitude: number;
   point: string;
}

export interface Listing extends Extend<V1.Listing, {
   soldPrice?: number | null; // 0.00
   originalPrice?: number;
   daysOnMarket?: number;
   map?: Map;

   rooms: V1.Room[];
   bathrooms: V1.Bathroom[];
   openHouse: V1.OpenHouse[];
   numBedrooms: number;
   swimmingPool: string | null;
}> {}
