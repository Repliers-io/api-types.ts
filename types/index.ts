export * as Clients from "./clients.js";
export * as Estimate from './estimate.js';
export * as Favorites from './favorites.js';
export * as Listings from './listings.js';
export * as Messages from './messages.js';
export * as Searches from './searches.js';

export type Extend<T, R> = Omit<T, keyof R> & R;

export interface ApiRequest extends Record<string, unknown> {}
export interface ApiResponse extends Record<string, unknown> {}
export interface ApiRequestBody extends Record<string, unknown> {}

export const AggregatesValues = [
   "class",
   "status",
   "lastStatus",
   "type",
   "listPrice",
   "map",
   "address.area",
   "address.city",
   "address.neighborhood",
   "address.district",
   "address.streetName",
   "address.majorIntersection",
   "address.zip",
   "address.state",
   "address.communityCode",
   "address.streetDirection",
   "permissions.displayPublic",
   "permissions.displayInternetEntireListing",
   "permissions.displayAddressOnInternet",
   "details.propertyType",
   "details.style",
   "detail.numBedrooms",
   "details.numBathrooms",
   "details.businessType",
   "details.businessSubType",
   "details.basement1",
   "details.basement2",
   "details.garage",
   "details.den",
   "details.sewer",
   "details.waterSource",
   "details.heating",
   "details.swimmingPool",
   "details.yearBuilt",
   "details.exteriorConstruction",
   "details.exteriorConstruction2",
   "details.sqft",
   "details.balcony",
   "details.driveway",
   "condominium.locker",
   "condominium.exposure",
   "condominium.ammenities",
   "condominium.pets",
   "condominium.parkingType",
   "condominium.stories",
   "condominium.propertyMgr",
   "condominium.condoCorp",
   "condominium.ensuiteLaundry",
   "nearby.ammenities",
   "office.brokerageName",
   "photoCount"
] as const;
export type Aggregates = typeof AggregatesValues[number];

export type DateFormat = `${number}-${number}-${number}`; // YYYY-MM-DD

export const YesNoValues = [
   "Y", 
   "N"
] as const;
export type YesNo = typeof YesNoValues[number];

export const ClassValues = [
   "condo", 
   "residential", 
   "commercial"
] as const;
export type Class = typeof ClassValues[number];

export const LastStatusValues = [
   "Sus",
   "Exp",
   "Sld",
   "Ter",
   "Dft",
   "Lsd",
   "Sc",
   "Sce",
   "Lc",
   "Pc",
   "Ext",
   "New"
] as const;
export type LastStatus = typeof LastStatusValues[number];

export const OperatorValues = [
   "AND",
   "OR"
] as const;
export type Operator = typeof OperatorValues[number];

export const SimilarSortByValues = [
   "updatedOnDesc",
   "updatedOnAsc",
   "createdOnAsc",
   "createdOnDesc"
] as const;
export type SimilarSortBy = typeof SimilarSortByValues[number];

export const SortByValues = [
   "createdOnDesc",
   "updatedOnDesc",
   "createdOnAsc",
   "distanceAsc",
   "distanceDesc",
   "updatedOnAsc",
   "soldDateAsc",
   "soldDateDesc",
   "soldPriceAsc",
   "soldPriceDesc",
   "sqftAsc",
   "sqftDesc",
   "listPriceAsc",
   "listPriceDesc",
   "bedsAsc",
   "bedsDesc",
   "bathsDesc",
   "bathsAsc",
   "yearBuiltDesc",
   "yearBuiltAsc",
   "random",
   "statusAscListDateAsc",
   "statusAscListDateDesc",
   "statusAscListPriceAsc",
   "statusAscListPriceDesc",
   "repliersUpdatedOnAsc",
   "repliersUpdatedOnDesc"
] as const;
export type SortBy = typeof SortByValues[number];

// TODO: how do we add grp-{x}-days here??
export const StatisticsValues = [
   "avg-daysOnMarket",
   "sum-daysOnMarket",
   "min-daysOnMarket",
   "max-daysOnMarket",
   "avg-listPrice",
   "sum-listPrice",
   "min-listPrice",
   "max-listPrice",
   "avg-soldPrice",
   "sum-soldPrice",
   "min-soldPrice",
   "max-soldPrice",
   "cnt-new",
   "cnt-closed",
   "cnt-available",
   "med-listPrice",
   "med-soldPrice",
   "med-daysOnMarket",
   "sd-listPrice",
   "sd-soldPrice",
   "sd-daysOnMarket",
   "avg-priceSqft",
   "grp-mth",
   "grp-yr",
   "grp-day",
   "avg-tax",
   "med-tax"
] as const;
export type Statistics = typeof StatisticsValues[number];

export const StatusValues = [
   "A",
   "U"
] as const;
export type Status = typeof StatusValues[number];

export const TypeValues = [
   "sale",
   "lease"
] as const;
export type Type = typeof TypeValues[number];
