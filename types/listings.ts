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

export interface Room {
   description?: string;
   features?: string | null;
   features2?: string | null;
   features3?: string | null;
   length?: string;
   width?: string;
   level?: string;
}

export interface Bathroom {
   pieces?: string;
   level?: string;
   count?: string;
}

export interface Timestamp {
   idxUpdated?: string | null;
   listingUpdated?: string | null;
   photosUpdated?: string | null;
   conditionalExpiryDate?: string | null;
   terminatedDate?: string | null;
   suspendedDate?: string | null;
   listingEntryDate?: string | null;
   closedDate?: string | null;
   unavailableDate?: string | null;
   expiryDate?: string | null;
   extensionEntryDate?: string | null;
   possessionDate?: string | null;
   repliersUpdatedOn?: string;
}

export interface Condominium {
   ammenities?: string[];
   buildingInsurance?: string | null;
   condoCorp?: string | null;
   condoCorpNum?: string | null;
   exposure?: string | null;
   lockerNumber?: string;
   locker?: string | null;
   parkingType?: string | null;
   pets?: string | null;
   propertyMgr?: string | null;
   stories?: string | null;
   fees?: {
      cableIncl?: YesNo | string | null;
      heatIncl?: YesNo | string | null;
      hydroIncl?: YesNo | string | null;
      maintenance?: string | null;
      parkingIncl?: YesNo | string | null;
      taxesIncl?: YesNo | string | null;
      waterIncl?: YesNo | string | null;
   };
   lockerUnitNumber?: string | null;
   ensuiteLaundry?: YesNo | string | null;
   sharesPercentage?: string | null;
   lockerLevel?: string | null;
   unitNumber?: string | null;
}

export interface OpenHouse {
   date?: string;
   startTime?: string;
   endTime?: string;
   type?: string | null;
   status?: string | null;
   TZ?: string | null;
}

export interface Details extends Record<string, unknown> {
   airConditioning?: string | null;
   basement1?: string | null;
   basement2?: string | null;
   centralVac?: string | null;
   den?: YesNo | null;
   description?: string | null;
   elevator?: string | null;
   exteriorConstruction1?: string | null;
   exteriorConstruction2?: string | null;
   extras?: string | null;
   furnished?: string | null;
   garage?: string | null;
   heating?: string | null;
   numBathrooms?: string | null;
   numBathroomsPlus?: string | null;
   numBedrooms?: string | null;
   numBedroomsPlus?: string | null;
   numFireplaces?: YesNo | string | null;
   numGarageSpaces?: string | null;
   numParkingSpaces?: string | null;
   numRooms?: string | null;
   numRoomsPlus?: string | null;
   patio?: string | null;
   propertyType?: string | null;
   sqft?: string | null;
   style?: string | null;
   swimmingPool?: string | null;
   virtualTourUrl?: string | null;
   yearBuilt?: string | null;
   landAccessType?: string | null;
   landSewer?: string | null;
   viewType?: string | null;
   zoningDescription?: string | null;
   analyticsClick?: string | null;
   moreInformationLink?: string | null;
   alternateURLVideoLink?: string | null;
   flooringType?: string | null;
   foundationType?: string | null;
   landscapeFeatures?: string | null;
   fireProtection?: string | null;
   roofMaterial?: string | null;
   farmType?: string | null;
   zoningType?: string | null;
   businessType?: string | null;
   businessSubType?: string | null;
   landDisposition?: string | null;
   storageType?: string | null;
   constructionStyleSplitLevel?: string | null;
   constructionStatus?: string | null;
   loadingType?: string | null;
   ceilingType?: string | null;
   liveStreamEventURL?: string | null;
   energuideRating?: string | null;
   amperage?: string | null;
   sewer?: string | null;
   familyRoom?: YesNo | null;
   zoning?: string | null;
   driveway?: string | null;
   leaseTerms?: string | null;
   centralAirConditioning?: string | null;
   certificationLevel?: string | null;
   energyCertification?: string | null;
   parkCostMonthly?: string | null;
   commonElementsIncluded?: string | null;
   greenPropertyInformationStatement?: string | null;
   handicappedEquipped?: string | null;
   laundryLevel?: string | null;
   balcony?: string | null;
   numKitchens?: string | null;
   numKitchensPlus?: string | null;
   sqftRange?: string | null;
   numDrivewaySpaces?: string | null;
   HOAFee?: string | null;
   HOAFee2?: string | null;
   HOAFee3?: string | null;
   waterSource?: string | null;
   livingAreaMeasurement?: string | null;
   waterfront?: string | null;
   bathrooms?: Record<string, Bathroom>;
   numBathroomsHalf?: string | null;
}

export type ListingClass = "ResidentialProperty";

export interface Address {
   area?: string | null;
   city?: string | null;
   country?: string | null;
   district?: string | null;
   majorIntersection?: string | null;
   neighborhood?: string | null;
   streetDirection?: StreetDirection | null;
   streetName?: string | null;
   streetNumber?: string | null;
   streetSuffix?: string | null;
   unitNumber?: string | null;
   zip?: string | null;
   state?: string | null;
   communityCode?: string | null;
   streetDirectionPrefix?: string | null;
}

/**
 * All fields of the Listing interface are optional.
 * All the fields inside objects nested inside Listing object are optional too.
 * 
 * This is due to the fact that SearchRequest contains a feild called "feilds"
 * that can and should be used to specify a subset of Listing fields which must be 
 * returned by the endpoint.
 * 
 * Also it's worth noting that some fields maybe missing inside
 * some MLS boards by default.
 */
export interface Listing extends Record<string, unknown> {
   mlsNumber?: string;
   resource?: string;
   status?: Status;
   class?: Class;
   type?: Type;
   listPrice?: string;
   listDate?: string; 
   lastStatus?: LastStatus;
   soldPrice?: string; // 0.00
   soldDate?: string | null;
   originalPrice?: string | null;
   assignment?: string | null;
   address?: Address;
   map?: {
      latitude?: string;
      longitude?: string;
      point?: string;
   };
   permissions?: {
      displayAddressOnInternet?: YesNo;
      displayPublic?: YesNo;
      displayInternetEntireListing?: YesNo;
   };
   images?: string[];
   photoCount?: number;
   details?: Details;
   daysOnMarket?: string;
   occupancy?: string | null;
   updatedOn?: string;
   condominium?: Condominium;
   coopCompensation?: string | null;
   lot?: {
      acres?: string | null; //V2: number
      depth?: string | null; //V2: number??
      irregular?: string | null;
      legalDescription?: string | null;
      measurement?: string | null;
      width?: string | null;
      size?: string | null;
      source?: string | null;
      dimensionsSource?: string | null;
      dimensions?: string | null;
      squareFeet?: string | null;
      features?: string | null;
      taxLot?: string | null;
   };
   nearby?: {
      ammenities?: string[];
   };
   office?: {
      brokerageName?: string;
   };
   openHouse?: Record<string, OpenHouse>;
   rooms?: Record<string, Room>;
   taxes?: {
      annualAmount?: string | null; // V2: number
      assessmentYear?: string | null;
   };
   timestamps?: Timestamp;
   agents?: Array<{
      [key: string]: unknown;
      agentId?: string;
      boardAgentId?: string;
      officeId?: string;
      updatedOn?: string | null;
      name?: string;
      board?: string | null;
      boardOfficeId?: string | null;
      position?: string | null;
      email?: string | null;
      phones?: string[];
      social?: string[];
      website?: string | null;
      photo?: {
         small?: string | null;
         large?: string | null;
         updatedOn?: string | null;
      }
      brokerage?: {
         name?: string;
         address?: {
            address1?: string | null;
            address2?: string | null;
            city?: string | null;
            state?: string | null;
            postal?: string | null;
            country?: string | null;
         }
      }
   }>;
   duplicates?: string[];
   boardId?: number;
   comparables?: Partial<Listing>[];
   history?: Partial<Listing>[];
}

export type RollingPeriodName<Days extends `${number}` = "30" | "90" | "365"> =
   | `grp-${Days}-days`
   | "grp-day"
   | "grp-mth"
   | "grp-yr";

export interface RollingPeriod {
   [key: string]: {
      count: number;
      avg?: number;
      sum?: number;
      med?: number;
      min?: number;
      max?: number;
      sd?: number;
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

export enum StreetDirection {
   N = "n",
   E = "e",
   W = "w",
   S = "s",
   Empty = "",
}

export enum CoverImage {
   kitchen = "kitchen",
   "powder room" = "powder room",
   ensuite = "ensuite",
   "family room" = "family room",
   "exterior front" = "exterior front",
   backyard = "backyard",
   staircase = "staircase",
   "primary bedroom" = "primary bedroom",
   "laundry room" = "laundry room",
   office = "office",
   garage = "garage",
}

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
   coverImage?: CoverImage;
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
   /** @deprecated use maxBedrooms field instead */
   maxBeds?: number;
   maxBedrooms?: number;
   /** @deprecated use maxBedroomsPlus field instead */
   maxBedsPlus?: number;
   maxBedroomsPlus?: number;
   maxBedroomsTotal?: number;
   maxKitchens?: number;
   maxListDate?: DateFormat;
   maxMaintenanceFee?: number;
   maxOpenHouseDate?: DateFormat;
   maxPrice?: number;
   maxRepliersUpdatedOn?: DateFormat;
   maxSoldDate?: DateFormat;
   maxSoldPrice?: number;
   maxStreetNumber?: number; 
   maxSqft?: number;
   maxTaxes?: number;
   maxUnavailableDate?: DateFormat;
   maxUpdatedOn?: DateFormat;
   maxYearBuilt?: number;
   minBaths?: number;
   /** @deprecated use minBedrooms field instead */
   minBeds?: number;
   minBedrooms?: number;
   /** @deprecated use minBedroomsPlus field instead */
   minBedsPlus?: number;
   minBedroomsPlus?: number;
   minBedroomsTotal?: number;
   minGarageSpaces?: number;
   minKitchens?: number;
   minListDate?: DateFormat;
   minOpenHouseDate?: DateFormat;
   minParkingSpaces?: number;
   minPrice?: number;
   minRepliersUpdatedOn?: DateFormat;
   minSoldDate?: DateFormat;
   minSoldPrice?: string;
   minSqft?: number;
   minStreetNumber?: number;
   minUnavailableDate?: DateFormat;
   minUpdatedOn?: DateFormat;
   minYearBuilt?: DateFormat;
   mlsNumber?: string[];
   neighborhood?: string[];
   officeId?: string;
   operator?: Operator;
   pageNum?: number;
   propertyType?: string[];
   radius?: number;
   resultsPerPage?: number;
   search?: string;
   searchFields?: string;
   sortBy?: SortBy;
   sqft?: string[];
   /** it's coma-separated string of Statistics enum values but we cannot type it properly in TS now */
   statistics?: string;
   status?: Status[];
   streetDirection?: StreetDirection[];
   streetName?: string;
   streetNumber?: string;
   streetSuffix?: string;
   style?: string[];
   swimmingPool?: string[];
   type?: Type[];
   unitNumber?: string[];
   updatedOn?: DateFormat;
   waterSource?: string[];
   repliersUpdatedOn?: string;
   sewer?: string[];
   state?: string;
   waterfront?: YesNo;
   yearBuilt?: string[];
   zip?: string;
   zoning?: string;
   body?: {
      imageSearchItems?: ImageSearchItem[];
   };
}

export type RangeStat = Omit<BaseStat & { count: number }, "mth" | "yr">

export interface BaseStat {
   avg?: number;
   min?: number;
   max?: number;
   med?: number;
   sd?: number;
   sum?: number;
   mth?: Record<string, RangeStat>
   yr?:  Record<string, RangeStat>
}

export interface SearchResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   listings: Array<Listing>;
   statistics: {
      available?: {
         count: number;
         mth: Record<string, { count: number }>;
         yr: Record<string, { count: number }>;
      }
      new?: {
         count: number;
         mth: Record<string, { count: number }>;
         yr: Record<string, { count: number }>;
      };
      closed?: {
         count: number;
         mth: Record<string, { count: number }>;
         yr: Record<string, { count: number }>;
      };
      soldPrice?: Record<RollingPeriodName, RollingPeriod> & BaseStat;
      listPrice?: Record<RollingPeriodName, RollingPeriod> & BaseStat;
      daysOnMarket?: Record<RollingPeriodName, RollingPeriod> & BaseStat;
      sqft?: {
         avgPriceLow: number;
         avgPriceHigh: number;
         mth?: Record<string, {
            avgPriceLow: number;
            avgPriceHigh: number;
         }>
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
   search?: string;
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
   coordinates: LocationCoordinates | null;
}

export interface City {
   name: string;
   activeCount: number;
   location: Location;
   coordinates: LocationCoordinates | null;
   state: string;
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


// TODO: in fact classes will have 3 class - as correspond to Class enum.
// but we can limit the classes we request at the request level
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

export interface NlpRequest extends ApiRequest {}

export interface NlpResponse extends ApiResponse {
   request: {
      url?: string;
      params?: Record<string, string>;
      body: Record<string, unknown>;
      summary: string;
   };
   nlpId: string;
}
