import { ApiRequest, ApiResponse, Class, Type } from "..";

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
   neighborhoods?: string;
   notificationFrequency?: "instant" | "daily" | "weekly" | "monthly";
   minPrice: number;
   maxPrice: number;
   propertyTypes?: string[];
   styles?: string[];
   map?: string;
   status?: boolean;
   type: Type;
   class: Class;
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
export interface CreateResponse extends ApiResponse {}

export interface UpdateRequest extends ApiRequest {
   searchId: number;
}
export interface UpdateResponse extends ApiResponse {}

export interface FilterRequest extends ApiRequest {
   clientId: number;
}
export interface FilterResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   searches: [
      {
         [key: string]: unknown;
         searchId: number;
      },
   ];
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
