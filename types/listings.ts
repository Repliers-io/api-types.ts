import {
   Aggregates,
   ApiRequest,
   ApiResponse,
   Class,
   DateFormat,
   LastStatus,
   Operator,
   SimilarSortBy,
   SortBy,
   Status,
   Type,
   YesNo,
} from "./index.js";

export interface Listing extends Record<string, unknown> {
   listDate: string;
   rooms: Record<string, unknown>[]; //TODO: let's add types from Response here
   timestamps: Record<string, string | null>; //TODO: let's add types from Response here

   // TODO: AddCondominium already has a chunk of fields that "condominium" fields has 
   condominium: Record<string, unknown>; //TODO: let's add types from Response here
   taxes: {
      annualAmount: number;
      assessmentYear: number;
   };
   office: {
      brokerageName: string;
   };
   images: string[];
   type: Type;
   nearby: Record<string, unknown>; //TODO: let's add types from Response here
   photoCount: number;
   lot: Record<string, unknown>; //TODO: let's add types from Response here
   mlsNumber: string;
   openHouse: Array<Record<string, unknown>>; //TODO: let's add types from Response here
   permissions: {
      displayAddressOnInternet: YesNo;
      displayPublic: YesNo;
      displayInternetEntireListing: YesNo;
   };
   soldPrice: string; // 0.00
   details: Record<string, unknown>; //TODO: add fields from Repliers Reponse
   class: string; // ResidentialProperty //TODO: let's add types here
   map: {
      latitude: string;
      point: string;
      longitude: string;
   };
   address: Record<string, unknown>; //TODO: add fields from Repliers Reponse
   resource: string;
   updatedOn: string; //TODO: Can we type the string with ISO timestamp in it? "2024-11-05T18:21:33.284Z" like we did with date?
   daysOnMarket: number;
   agents: Array<{ //TODO: add fields from Repliers Reponse
      [key: string]: unknown;
      agentId: number;
   }>;
   coopCompensation: unknown | null; //TODO: it looks like a string in the Response
   listPrice: string;
   lastStatus: LastStatus; // New
   status: Status;
   boardId: number;
   comparables: Partial<Listing>[];
   history: Partial<Listing>[];
}

//TODO: RollingPeriodName is actually grp-{x}-days. Can we somehow type it?
export type RollingPeriodName = "grp-30-days" | "grp-90-days" | "grp-365-days";

//TODO: I think RollingPeriod can have other values except 'count' and 'avg' inside depending on what stats we request
export interface RollingPeriod {
   [key: string]: {
      count: number;
      avg: number;
   };
}
export interface ImageSearchItemBase {
   type: string;
   boost: number;
}

export interface ImageSearchValue extends ImageSearchItemBase {
   type: "text";
   value: string;
}

export interface ImageSearchUrl extends ImageSearchItemBase {
   type: "image";
   url: string;
}

export type ImageSearchItem = ImageSearchValue | ImageSearchUrl;

export interface SearchRequest extends ApiRequest {
   agent?: string[];
   aggregates?: Aggregates[];
   aggregateStatistics?: boolean;
   amenities?: string[];
   area?: string;
   balcony?: string[];
   basement?: string[];
   boardId?: number[];
   brokerage?: string;
   businessSubType?: string[];
   businessType?: string[];
   city?: string[];
   class?: Class[];
   cluster?: boolean;
   clusterFields?: string;
   clusterLimit?: number;
   clusterPrecision?: number;
   clusterStatistics?: boolean;
   coverImage?: string;
   den?: string;
   displayAddressOnInternet?: YesNo;
   displayInternetEntireListing?: YesNo;
   displayPublic?: YesNo;
   district?: number[];
   driveway?: string[];
   exteriorConstruction?: string[];
   fields?: string;
   garage?: string[];
   hasAgents?: boolean;
   hasImages?: boolean;
   heating?: string[];
   lastStatus?: LastStatus[];
   lat?: string;
   listDate?: DateFormat;
   listings?: boolean;
   locker?: string[];
   long?: string;
   map?: [number, number][][];
   mapOperator?: Operator;
   maxBaths?: number;
   maxBeds?: number;
   maxBedsPlus?: number;
   maxKitchens?: number;
   maxListDate?: string;
   maxMaintenanceFee?: number;
   maxOpenHouseDate?: DateFormat;
   maxPrice?: number;
   maxRepliersUpdatedOn?: DateFormat;
   maxSoldDate?: DateFormat;
   maxSoldPrice?: number;
   maxSqft?: number;
   maxTaxes?: number;
   maxUnavailableDate?: DateFormat;
   maxUpdatedOn?: DateFormat;
   maxYearBuilt?: number;
   minBaths?: number;
   minBeds?: number;
   minBedsPlus?: number;
   minGarageSpaces?: number;
   minKitchens?: number;
   minListDate?: DateFormat;
   minOpenHouseDate?: DateFormat;
   minParkingSpaces?: number;
   minPrice?: number;
   minRepliersUpdatedOn?: DateFormat;
   minSoldDate?: DateFormat;
   minSoldPrice?: number; // string in docs
   minSqft?: number;
   minUnavailableDate?: DateFormat;
   minUpdatedOn?: DateFormat;
   minYearBuilt?: DateFormat;
   mlsNumber?: string[];
   neighborhood?: string[];
   officeId?: string;
   operator?: Operator;
   pageNum?: number;
   propertyType?: string;
   radius?: number;
   resultsPerPage?: number;
   search?: string;
   searchFields?: string;
   sortBy?: SortBy;
   sqft?: string[];
   statistics?: string;
   status?: Status[];
   //TODO: let's call aggregate and see what streetDirection can be
   streetDirection?: string; // W in examples, maybe enum with N, E, W, S?
   streetName?: string;
   streetNumber?: string;
   style?: string[];
   swimmingPool?: string[];
   type?: Type[];
   unitNumber?: string;
   updatedOn?: DateFormat;
   waterSource?: string[];
   // TODO: I can see in API response "repliersUpdatedOn": "2024-11-05T17:28:32.132Z" so not DateFormat
   // is it like that in request?
   repliersUpdatedOn?: DateFormat;
   // TODO: I don't see array in the API response. Just a string?
   // is it like that in request?
   sewer?: string[];
   state?: string;
   streetSuffix?: string;
   waterfront?: YesNo;
   // TODO: I don't see array in the API response. Just a string?
   // is it like that in request?
   yearBuilt?: string[];
   zip?: string;
   zoning?: string;
   body?: {
      imageSearchItems?: ImageSearchItem[];
   };
}
export interface SearchResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   listings: Array<Listing>;
   statistics: {
      soldPrice: {
         //TODO: it can actually be "grp-{x}-days" not only "grp-30-days"
         "grp-30-days": RollingPeriod;
         "grp-90-days": RollingPeriod;
         "grp-365-days": RollingPeriod;
         avg: number;
         med: number;
         sum: number;
         mth: Record<
            string,
            {
               avg: number;
               med: number;
               count: number;
               sum: number;
            }
         >;
      };
      daysOnMarket: {
         med: number;
         avg: number;
         mth: Record<
            string,
            {
               avg: number;
               med: number;
               count: number;
            }
         >;
      };
   };
}

export interface SimilarRequest extends ApiRequest {
   boardId?: number[];
   listPriceRange?: number;
   radius?: number;
   sortBy?: SimilarSortBy;
   propertyId: string;
   fields?: string;
}
export interface SimilarResponse extends ApiResponse {}

export interface ListingRequest extends ApiRequest {
   mlsNumber?: string;
   boardId?: number;
   fields?: string;
}

export interface ListingResponse extends ApiResponse, Listing {}

export interface LocationsRequest extends ApiRequest {
   area?: string;
   city?: string;
   neighborhood?: string;
   class: Class[];
   boardId?: number;
   // TODO: I think dropCoordinates is somethng on Portal-Backend side not on the Repliers API side
   dropCoordinates: boolean;
   // TODO: I think activeCountLimit is somethng on Portal-Backend side not on the Repliers API side
   activeCountLimit?: number;
}
export interface Location {
   lat: number;
   lng: number;
}

export type LocationCoordinates = Array<Array<[number, number]>> | null;

export interface Neighborhood {
   name: string;
   activeCount: number;
   location: Location;
   coordinates?: LocationCoordinates;
}

export interface City {
   name: string;
   activeCount: number;
   location: Location;
   coordinates?: LocationCoordinates;
   neighborhoods: Array<Neighborhood>;
}
export interface Area {
   name: string;
   cities: Array<City>;
}
export interface ClassWithAreas<Name> {
   name: Name;
   areas: Array<Area>;
}
export interface Map {
   latitude: string;
   longitude: string;
   point: string;
}
export interface LocationsResponse extends ApiResponse {
   boards: [
      {
         boardId: number;
         name: string;
         updatedOn: string;
         classes: [ClassWithAreas<"condo">, ClassWithAreas<"residential">];
      },
   ];
}

export interface NlpRequest extends ApiRequest {

}

export interface NlpResponse extends ApiResponse {
   request: {
      url?: string;
      params?: Record<string, string>;
      body: Record<string, unknown>;
      summary: string;
   };
   nlpId: string;
}
