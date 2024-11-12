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
   [key: string]: unknown;
   features: string,
   level: string,
   length: string,
   width: string,
   description: string,
}

export interface Timestamp {
   repliersUpdatedOn: string;
   terminatedDate: string | null;
   conditionalExpiryDate: string | null;
   listingUpdated: string;
   extensionEntryDate: string | null;
   unavailableDate: string | null;
   expiryDate: string;
   listingEntryDate: string;
   closedDate: string | null;
   possessionDate: string;
   idxUpdated: string | null;
   photosUpdated: string;
   suspendedDate: string | null;
}

export interface Condominium {
   pets: Record<string, unknown>;
   condoCorpNum: Record<string, unknown>;
   parkingType: Record<string, unknown>;
   fees: {
      cableIncl: string;
      waterIncl: string;
      heatIncl: string;
      taxesIncl: Record<string, unknown>;
      parkingIncl: string;
      maintenance: Record<string, unknown>;
      hydroIncl: string;
   },
   stories: Record<string, unknown>;
   propertyMgr: Record<string, unknown>;
   lockerLevel: Record<string, unknown>;
   unitNumber: Record<string, unknown>;
   locker: Record<string, unknown>;
   condoCorp: Record<string, unknown>;
   sharesPercentage: Record<string, unknown>;
   ensuiteLaundry: Record<string, unknown>;exposure: Record<string, unknown>;
   lockerNumber: string;
   lockerUnitNumber: Record<string, unknown>;
   ammenities: Record<string, unknown>[];
}

export interface OpenHouse {
   date: string;
   startTime: string;
   endTime: string;
   type: null | string;
   status: null | string;
}

// I bet this is not full list, and feilds can be added dynamically
// So maybe extends it from Record<string, unknown>
export interface Details {
   numKitchens: string;
   numParkingSpaces: string;
   laundryLevel: string;
   zoningDescription: Record<string, unknown>;
   moreInformationLink: Record<string, unknown>;
   certificationLevel: string;
   den: YesNo;
   yearBuilt: string;
   alternateURLVideoLink: Record<string, unknown>;
   exteriorConstruction1: string;
   elevator: string;
   exteriorConstruction2: string;
   roofMaterial: Record<string, unknown>;
   zoning: string;
   basement1: string;
   basement2: string;
   sqft: string;
   handicappedEquipped: string;
   heating: string;
   numRooms: string;
   landscapeFeatures: Record<string, unknown>;
   virtualTourUrl: string;
   landSewer: Record<string, unknown>;
   energyCertification: string;
   numBathrooms: string;
   greenPropertyInformationStatement: string;
   liveStreamEventURL: Record<string, unknown>;
   zoningType: Record<string, unknown>;
   landAccessType: Record<string, unknown>;
   businessSubType: Record<string, unknown>;
   numKitchensPlus: string;
   bathrooms: Record<string, {
      pieces: string;
      level: string;
      count: string;
   }>;
   swimmingPool: string;
   constructionStyleSplitLevel: Record<string, unknown>;
   leaseTerms: string;
   numRoomsPlus: string;
   flooringType: Record<string, unknown>;
   farmType: Record<string, unknown>;
   landDisposition: Record<string, unknown>;
   viewType: Record<string, unknown>;
   style: string;
   loadingType: Record<string, unknown>;
   numGarageSpaces: string;
   parkCostMonthly: string;
   airConditioning: string;
   familyRoom: YesNo;
   constructionStatus: Record<string, unknown>;
   numBedrooms: string;
   description: string;
   extras: string;
   livingAreaMeasurement: Record<string, unknown>;
   patio: Record<string, unknown>;
   amperage: Record<string, unknown>;
   centralAirConditioning: string;
   furnished: string;
   foundationType: Record<string, unknown>;
   sewer: string;
   propertyType: string;
   HOAFee: Record<string, unknown>;
   commonElementsIncluded: string;
   numDrivewaySpaces: Record<string, unknown>;
   numBathroomsPlus: string | null;
   ceilingType: Record<string, unknown>;
   waterSource: string;
   numBedroomsPlus: string;
   garage: string;
   centralVac: string;
   sqftRange: Record<string, unknown>;
   driveway: string;
   numFireplaces: YesNo;
   energuideRating: Record<string, unknown>;
   fireProtection: Record<string, unknown>;
   storageType: Record<string, unknown>;
   analyticsClick: Record<string, unknown>;
   businessType: Record<string, unknown>;
   numBathroomsHalf: Record<string, unknown>;
}

export type ListingClass = "ResidentialProperty"

export interface Address {
   area: string;
   zip: string;
   country: string | null;
   city:  string;
   streetNumber: string;
   unitNumber: string;
   streetDirection: string;
   streetName: string;
   streetDirectionPrefix: Record<string, unknown>;
   district: string;
   streetSuffix: string;
   neighborhood: string;
   state: string;
   majorIntersection: string;
   communityCode: string;
}

export interface Listing extends Record<string, unknown> {
   listDate: string;
   rooms: Record<string, Room>;
   timestamps: Record<string, Timestamp>;
   condominium: Record<string, Condominium>;
   taxes: {
      annualAmount: number;
      assessmentYear: number;
   };
   office: {
      brokerageName: string;
   };
   images: string[];
   type: Type;
   nearby: {
      ammenities: string[];
   }
   photoCount: number;
   lot: {
      depth: string;
      size: Record<string, unknown>;
      width: string;
      irregular: string;
      acres: string;
      legalDescription: string;
      measurement: string;
   }
   mlsNumber: string;
   openHouse: Array<Record<string, OpenHouse>>;
   permissions: {
      displayAddressOnInternet: YesNo;
      displayPublic: YesNo;
      displayInternetEntireListing: YesNo;
   };
   soldPrice: string; // 0.00
   details: Details;
   class: Class;
   map: {
      latitude: string;
      point: string;
      longitude: string;
   };
   address: Address;
   resource: string;
   updatedOn: string;
   daysOnMarket: number;
   agents: Array<{
      [key: string]: unknown;
      agentId: number;
   }>;
   coopCompensation: string | null;
   listPrice: string;
   lastStatus: LastStatus; // New
   status: Status;
   boardId: number;
   comparables: Partial<Listing>[];
   history: Partial<Listing>[];
}

export type RollingPeriodName<Days extends `${number}` = "30" | "90" | "365"> = `grp-${Days}-days` | 'grp-day' | 'grp-mth' | 'grp-yr';

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
   Empty = ""
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

export interface SearchResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   listings: Array<Listing>;
   statistics: {
      //TODO: soldPrice, listPrice, daysOnMarket, sqft should be optional as they depend on the statistics requested
      // FULL list of statistics that can be requested without grouping
      // statistics=avg-daysOnMarket,sum-daysOnMarket,min-daysOnMarket,max-daysOnMarket,avg-listPrice,sum-listPrice,min-listPrice,max-listPrice,avg-soldPrice,sum-soldPrice,min-soldPrice,max-soldPrice,cnt-new,cnt-closed,med-listPrice,med-soldPrice,med-daysOnMarket,sd-listPrice,sd-soldPrice,sd-daysOnMarket,avg-priceSqft,cnt-available
      // TODO: Add 'available', 'new' and 'closed' objects to 'statistics'
      // TODO: further adding 'grp-day', 'grp-mth', 'grp-yr' changes how statistics looks
      //TODO: existence of 'sd', 'min', 'max' and others depend on the exact request
      // Should we make the optional?
      soldPrice: Record<RollingPeriodName, RollingPeriod> & {
         avg: number;
         min: number;
         max: number;
         med: number;
         sd: number;
         sum: number;
         //TODO: mth should be optional depending on request to grp by month
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
      //TODO: existence of 'sd', 'min', 'max' and others depend on the exact request
      // Should we make the optional?
      listPrice: Record<RollingPeriodName, RollingPeriod> & {
         avg: number;
         min: number;
         max: number;
         med: number;
         sd: number;
         sum: number;
         //TODO: mth should be optional depending on request to grp by month
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
         avg: number;
         min: number;
         max: number;
         med: number;
         sd: number;
         sum: number;
         //TODO: mth should be optional depending on request to grp by month
         mth: Record<
            string,
            {
               avg: number;
               med: number;
               count: number;
            }
         >;
      };
      sqft: {
         avgPriceLow: number;
         avgPriceHigh: number;
      }
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
