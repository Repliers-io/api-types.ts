import * as V1 from "../listings.js";
import { Extend } from '../index.js';

export interface Listing extends Extend<V1.Listing, {
   rooms: V1.Room[];
   bathrooms: V1.Bathroom[];
   openHouse: V1.OpenHouse[];
   numBedrooms: number;
   swimmingPool: string | null;
}> {}
