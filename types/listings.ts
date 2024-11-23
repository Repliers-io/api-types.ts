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
   description: string;
   features: string | null;
   features2: string | null;
   features3: string | null;
   length: string;
   width: string;
   level: string;
}

export interface Bathroom {
   pieces: string;
   level: string;
   count: string;
}

//TODO: can we type it to ISO format "2024-11-21T00:00:00.000Z" ?
export interface Timestamp {
   idxUpdated: string | null;
   listingUpdated: string | null;
   photosUpdated: string | null;
   conditionalExpiryDate: string | null;
   terminatedDate: string | null;
   suspendedDate: string | null;
   listingEntryDate: string | null;
   closedDate: string | null;
   unavailableDate: string | null;
   expiryDate: string | null;
   extensionEntryDate: string | null;
   possessionDate: string | null;
   repliersUpdatedOn: string;
}

export interface Condominium {
   ammenities: string[];
   buildingInsurance: string | null;
   condoCorp: string | null;
   condoCorpNum: string | null;
   exposure: string | null;
   lockerNumber: string;
   locker: string | null;
   parkingType: string | null;
   pets: string | null;
   propertyMgr: string | null;
   stories: string | null;
   fees: {
      cableIncl: YesNo | string | null;
      heatIncl: YesNo | string | null;
      hydroIncl: YesNo | string | null;
      maintenance: string | null;
      parkingIncl: YesNo | string | null;
      taxesIncl: YesNo | string | null;
      waterIncl: YesNo | string | null;
   };
   lockerUnitNumber: string | null;
   ensuiteLaundry: YesNo | string | null;
   sharesPercentage: string | null;
   lockerLevel: string | null;
   unitNumber: string | null;
}

export interface OpenHouse {
   date: string;
   startTime: string;
   endTime: string;
   type: null | string;
   status: null | string;
   TZ: null | string
}

export interface Details extends Record<string, unknown> {
   numKitchens: string | null;
   numParkingSpaces: string | null;
   laundryLevel: string | null;
   zoningDescription: Record<string, unknown>;
   moreInformationLink: Record<string, unknown>;
   certificationLevel: string | null;
   den: YesNo | null;
   yearBuilt: string | null;
   alternateURLVideoLink: Record<string, unknown>;
   exteriorConstruction1: string | null;
   elevator: string | null;
   exteriorConstruction2: string | null;
   roofMaterial: Record<string, unknown>;
   zoning: string | null;
   basement1: string | null;
   basement2: string | null;
   sqft: string | null;
   handicappedEquipped: string | null;
   heating: string | null;
   numRooms: string | null;
   landscapeFeatures: Record<string, unknown>;
   virtualTourUrl: string | null;
   landSewer: Record<string, unknown>;
   energyCertification: string | null;
   numBathrooms: string | null;
   greenPropertyInformationStatement: string | null;
   liveStreamEventURL: Record<string, unknown>;
   zoningType: Record<string, unknown>;
   landAccessType: Record<string, unknown>;
   businessSubType: Record<string, unknown>;
   numKitchensPlus: string | null;
   bathrooms: Record<string, Bathroom>;
   swimmingPool: string | null;
   constructionStyleSplitLevel: Record<string, unknown>;
   leaseTerms: string | null;
   numRoomsPlus: string | null;
   flooringType: Record<string, unknown>;
   farmType: Record<string, unknown>;
   landDisposition: Record<string, unknown>;
   viewType: Record<string, unknown>;
   style: string | null;
   loadingType: Record<string, unknown>;
   numGarageSpaces: string | null;
   parkCostMonthly: string | null;
   airConditioning: string | null;
   familyRoom: YesNo;
   constructionStatus: Record<string, unknown>;
   numBedrooms: string | null;
   description: string | null;
   extras: string | null;
   livingAreaMeasurement: Record<string, unknown>;
   patio: Record<string, unknown>;
   amperage: Record<string, unknown>;
   centralAirConditioning: string | null;
   furnished: string | null;
   foundationType: Record<string, unknown>;
   sewer: string | null;
   propertyType: string | null;
   HOAFee: Record<string, unknown>;
   commonElementsIncluded: string | null;
   numDrivewaySpaces: Record<string, unknown>;
   numBathroomsPlus: string | null;
   ceilingType: Record<string, unknown>;
   waterSource: string | null;
   numBedroomsPlus: string | null;
   garage: string | null;
   centralVac: string | null;
   sqftRange: Record<string, unknown>;
   driveway: string | null;
   numFireplaces: YesNo;
   energuideRating: Record<string, unknown>;
   fireProtection: Record<string, unknown>;
   storageType: Record<string, unknown>;
   analyticsClick: Record<string, unknown>;
   businessType: Record<string, unknown>;
   numBathroomsHalf: Record<string, unknown>;
}

export type ListingClass = "ResidentialProperty";

export interface Address {
   area: string;
   city: string;
   country: string | null;
   district: string;
   majorIntersection: string;
   neighborhood: string;
   streetDirection: string;
   streetName: string;
   streetNumber: string;
   streetSuffix: string;
   unitNumber: string;
   zip: string;
   state: string;
   communityCode: string;
   streetDirectionPrefix: Record<string, unknown>;
}

export interface Listing extends Record<string, unknown> {
   mlsNumber: string;
   resource: string;
   status: Status;
   class: Class;
   type: Type;
   listPrice: string;
   listDate: string; //TODO: can we type it to ISO format "2024-11-21T00:00:00.000Z" ?
   lastStatus: LastStatus; // New
   soldPrice: string; // 0.00
   soldDate: string | null; //TODO: can we type it to ISO format "2024-11-21T00:00:00.000Z" ?
   originalPrice: string | null;
   assignment: string | null;
   address: Address;
   map: {
      latitude: string;
      longitude: string;
      point: string;
   };
   permissions: {
      displayAddressOnInternet: YesNo;
      displayPublic: YesNo;
      displayInternetEntireListing: YesNo;
   };
   images: string[];
   photoCount: number;
   details: Details;
   daysOnMarket: string;
   occupancy: string | null;
   updatedOn: string; //TODO: can we type it to ISO format "2024-11-21T00:00:00.000Z" ?
   condominium: Condominium;
   coopCompensation: string | null;
   lot: {
      acres: string | null; //V2: number
      depth: string | null; //V2: number??
      irregular: string | null;
      legalDescription: string | null;
      measurement: string | null;
      width: string | null;
      size: string | null;
      source?: string | null;
      dimensionsSource?: string | null;
      dimensions?: string | null;
      squareFeet?: string | null;
      features?: string | null;
      taxLot?: string | null;
   };
   nearby: {
      ammenities: string[];
   };
   office: {
      brokerageName: string;
   };
   openHouse: Record<string, OpenHouse>;
   rooms: Record<string, Room>;
   taxes: {
      annualAmount: string | null; // V2: number
      assessmentYear: string | null;
   };
   timestamps: Timestamp;
   agents: Array<{
      [key: string]: unknown;
      agentId: string;
      boardAgentId: string;
      officeId: string;
      updatedOn: string | null;
      name: string;
      board: string | null;
      boardOfficeId: string | null;
      position: string | null;
      email?: string | null;
      phones: string[];
      social: string[];
      website: string | null;
      photo: {
         small: string | null;
         large: string | null;
         updatedOn: string | null;
      }
      brokerage: {
         name: string;
         address: {
            address1: string | null;
            address2: string | null;
            city: string | null;
            state: string | null;
            postal: string | null;
            country: string | null;
         }
      }
   }>;
   duplicates?: string[];
   boardId: number;
   comparables: Partial<Listing>[];
   history: Partial<Listing>[];
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
   minSoldPrice?: string;
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
   // Actually it's coma-separated string of Statistics enum values, don't know how to type it
   statistics?: string;
   status?: Status[];
   streetDirection?: StreetDirection[];
   streetName?: string;
   streetNumber?: string;
   style?: string[];
   swimmingPool?: string[];
   type?: Type[];
   unitNumber?: string;
   updatedOn?: DateFormat;
   waterSource?: string[];
   repliersUpdatedOn?: string;
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
