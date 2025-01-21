import { ApiRequest, ApiResponse, Class, Type } from "./index.js";
import * as Clients from "./clients.js";

/**
 * TODO: add to docs
 * 
 * minSqft
 * maxSqft
 * minYearBuilt 
 * maxYearBuilt
 * minStories
 * maxStories
 * maxCoveredSpaces
 * minCoveredSpaces
 * amenities
 * keywords
 * pets
 * 
 */

export interface CreateRequest extends ApiRequest {
   clientId: number;
   name?: string;
   streetNumbers?: string[];
   streetNames?: string[];
   minBeds?: number;
   maxBeds?: number;
   maxMaintenanceFee?: number;
   minBaths?: number;
   maxBaths?: number;
   areas?: string[];
   cities?: string[];
   neighborhoods?: string[];
   notificationFrequency?: "instant" | "daily" | "weekly" | "monthly";
   minPrice: number;
   maxPrice: number;
   propertyTypes?: string[];
   styles?: string[];
   map?: string;
   status?: boolean;
   type: Type;
   class?: Class[];
   minGarageSpaces?: number;
   minKitchens?: number;
   minParkingSpaces?: number;
   basement?: string[];
   soldNotifications?: boolean;
   priceChangeNotifications?: boolean;
   sewer?: string[];
   waterSource?: string[];
   heating?: string[];
   swimmingPool?: string[];
}
export interface CreateResponse extends ApiResponse, Omit<CreateRequest, "class">
{
   searchId: number;
   agentId: number;
   client: Pick<Clients.Client, "fname" | "lname" | "email" | "phone">;
}

//TODO: update type
export interface UpdateRequest extends ApiRequest {
   searchId: number;
}
//TODO: update type
export interface UpdateResponse extends ApiResponse {}

export interface FilterRequest extends ApiRequest {
   clientId: number;
}
export interface FilterResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   searches: CreateResponse[];
}

export interface DeleteRequest extends ApiRequest {
   searchId: number;
}
export interface DeleteResponse extends ApiResponse {}

export interface GetRequest extends ApiRequest {
   searchId: number;
}
export interface GetResponse extends ApiResponse {
   client: Record<string, unknown>;
}
