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

export interface Single extends Record<string, unknown> {
   listDate: string;
   rooms: Record<string, unknown>[];
   timestamps: Record<string, string | null>;
   condominium: Record<string, unknown>;
   taxes: {
      annualAmount: number;
      assessmentYear: number;
   };
   office: {
      brokerageName: string;
   };
   images: string[];
   type: Type;
   nearby: Record<string, unknown>;
   photoCount: number;
   lot: Record<string, unknown>;
   mlsNumber: string;
   openHouse: Array<Record<string, unknown>>;
   permissions: {
      displayAddressOnInternet: YesNo;
      displayPublic: YesNo;
      displayInternetEntireListing: YesNo;
   };
   soldPrice: string; // 0.00
   details: Record<string, unknown>;
   class: string; // ResidentialProperty
   map: {
      latitude: string;
      point: string;
      longitude: string;
   };
   address: Record<string, unknown>;
   resource: string;
   updatedOn: string;
   daysOnMarket: number;
   agents: Array<{
      [key: string]: unknown;
      agentId: number;
   }>;
   coopCompensation: unknown | null;
   listPrice: string;
   lastStatus: string; // New
   status: Status;
   boardId: number;
   comparables: Partial<Single>[];
   history: Partial<Single>[];
}
export type RollingPeriodName = "grp-30-days" | "grp-90-days" | "grp-365-days";
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
   streetDirection?: string; // W in examples, maybe enum with N, E, W, S?
   streetName?: string;
   streetNumber?: string;
   style?: string[];
   swimmingPool?: string[];
   type?: Type[];
   unitNumber?: string;
   updatedOn?: DateFormat;
   waterSource?: string[];
   repliersUpdatedOn?: DateFormat;
   sewer?: string[];
   state?: string;
   streetSuffix?: string;
   waterfront?: YesNo;
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
   listings: Array<Single>;
   statistics: {
      soldPrice: {
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

export interface SingleRequest extends ApiRequest {
   mlsNumber?: string;
   boardId?: number;
   fields?: string;
}

export interface SingleResponse extends ApiResponse, Single {}

export interface LocationsRequest extends ApiRequest {
   area?: string;
   city?: string;
   neighborhood?: string;
   class: Class[];
   boardId?: number;
   dropCoordinates: boolean;
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
