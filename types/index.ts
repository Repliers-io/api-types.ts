export * as Clients from "./clients.js";
export * as Estimate from './estimate.js';
export * as Favorites from './favorites.js';
export * as Listings from './listings.js';
export * as Messages from './messages.js';
export * as Searches from './searches.js';

export interface ApiRequest extends Record<string, unknown> {}
export interface ApiResponse extends Record<string, unknown> {}
export interface ApiRequestBody extends Record<string, unknown> {}

export enum Aggregates {
   class = "class",
   status = "status",
   lastStatus = "lastStatus",
   type = "type",
   "address.area" = "address.area",
   "address.city" = "address.city",
   "address.neighborhood" = "address.neighborhood",
   "details.propertyType" = "details.propertyType",
   "details.style" = "details.style",
   "detail.numBedrooms" = "detail.numBedrooms",
   "details.numBathrooms" = "details.numBathrooms",
   "permissions.displayPublic" = "permissions.displayPublic",
   "details.businessType" = "details.businessType",
   "details.businessSubType" = "details.businessSubType",
   "details.basement1" = "details.basement1",
   "details.basement2" = "details.basement2",
   "details.garage" = "details.garage",
   "details.den" = "details.den",
   "details.sewer" = "details.sewer",
   "details.waterSource" = "details.waterSource",
   "details.heating" = "details.heating",
   "details.swimmingPool" = "details.swimmingPool",
   "details.yearBuilt" = "details.yearBuilt",
   "details.exteriorConstruction" = "details.exteriorConstruction",
   "details.sqft" = "details.sqft",
   "details.balcony" = "details.balcony",
   "condominium.locker" = "condominium.locker",
   "details.driveway" = "details.driveway",
   map = "map",
   "address.zip" = "address.zip",
}

export type DateFormat = `${number}-${number}-${number}`; // YYYY-MM-DD

export enum YesNo {
   Y = "Y",
   N = "N",
}

export enum Class {
   condo = "condo",
   residential = "residential",
   commercial = "commercial"
}

export enum LastStatus {
   Sus = "Sus",
   Exp = "Exp",
   Sld = "Sld",
   Ter = "Ter",
   Dft = "Dft",
   Lsd = "Lsd",
   Sc = "Sc",
   Sce = "Sce",
   Lc = "Lc",
   Pc = "Pc",
   Ext = "Ext",
   New = "New",
}

export enum Operator {
   AND = "AND",
   OR = "OR",
}

export enum SimilarSortBy {
   "updatedOnDesc" = "updatedOnDesc",
   "updatedOnAsc" = "updatedOnAsc",
   "createdOnAsc" = "createdOnAsc",
   "createdOnDesc" = "createdOnDesc",
}

export enum SortBy {
   "createdOnDesc" = "createdOnDesc",
   "updatedOnDesc" = "updatedOnDesc",
   "createdOnAsc" = "createdOnAsc",
   "distanceAsc" = "distanceAsc",
   "distanceDesc" = "distanceDesc",
   "updatedOnAsc" = "updatedOnAsc",
   "soldDateAsc" = "soldDateAsc",
   "soldDateDesc" = "soldDateDesc",
   "soldPriceAsc" = "soldPriceAsc",
   "soldPriceDesc" = "soldPriceDesc",
   "sqftAsc" = "sqftAsc",
   "sqftDesc" = "sqftDesc",
   "listPriceAsc" = "listPriceAsc",
   "listPriceDesc" = "listPriceDesc",
   "bedsAsc" = "bedsAsc",
   "bedsDesc" = "bedsDesc",
   "bathsDesc" = "bathsDesc",
   "bathsAsc" = "bathsAsc",
   "yearBuiltDesc" = "yearBuiltDesc",
   "yearBuiltAsc" = "yearBuiltAsc",
   "random" = "random",
}

export enum Statistics {
   "avg-daysOnMarket" = "avg-daysOnMarket",
   "sum-daysOnMarket" = "sum-daysOnMarket",
   "min-daysOnMarket" = "min-daysOnMarket",
   "max-daysOnMarket" = "max-daysOnMarket",
   "avg-listPrice" = "avg-listPrice",
   "sum-listPrice" = "sum-listPrice",
   "min-listPrice" = "min-listPrice",
   "max-listPrice" = "max-listPrice",
   "avg-soldPrice" = "avg-soldPrice",
   "sum-soldPrice" = "sum-soldPrice",
   "min-soldPrice" = "min-soldPrice",
   "max-soldPrice" = "max-soldPrice",
   "cnt-new" = "cnt-new",
   "cnt-closed" = "cnt-closed",
   "med-listPrice" = "med-listPrice",
   "med-soldPrice" = "med-soldPrice",
   "med-daysOnMarket" = "med-daysOnMarket",
   "sd-listPrice" = "sd-listPrice",
   "sd-soldPrice" = "sd-soldPrice",
   "sd-daysOnMarket" = "sd-daysOnMarket",
   "avg-priceSqft" = "avg-priceSqft",
   "grp-mth" = "grp-mth",
   "grp-yr" = "grp-yr",
}

export enum Status {
   A = "A",
   U = "U",
}

export enum Type {
   Sale = "sale",
   Lease = "lease",
}
