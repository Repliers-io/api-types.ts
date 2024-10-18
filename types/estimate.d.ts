import { ApiRequest, ApiResponse, DateFormat, YesNo } from "..";

export interface AddCondominium {
   ammenities?: string[];
   exposure?: string;
   fees?: {
      cableIncl?: YesNo;
      heatIncl?: YesNo;
      hydroIncl?: YesNo;
      maintenance?: number;
      parkingIncl?: YesNo;
      taxesIncl?: YesNo;
      waterIncl?: YesNo;
   };
   parkingType?: string;
   pets?: "N" | "Restrict";
   stories?: number;
}

export interface AddOwnerHistoryRoomsAdded {
   count: number;
   year: DateFormat;
}

export interface AddOwnerHistoryImprovements {
   maintenanceSpent?: number;
   improvementSpent?: number;
   landscapingSpent?: number;
   kitchenRenovated?: boolean;
   kitchenRenewalYear?: DateFormat;
   bedroomsAdded?: AddOwnerHistoryRoomsAdded;
   bathroomsAdded?: AddOwnerHistoryRoomsAdded;
}

export interface AddOwnerHistory {
   purchasePrice?: number;
   purchaseDate?: DateFormat;
   improvements?: AddOwnerHistoryImprovements;
}

export interface Single {
   estimateId: number;
   clientId: number;
   createdOn: string;
   updatedOn: string | null;
   estimate: number;
   estimateHigh: number;
   estimateLow: number;
   confidence: number;
   payload: {
      address: {
         city: string;
         streetName: string;
         streetNumber: string;
         streetSuffix: string;
         zip: string;
      };
      details: Record<string, unknown>;
      taxes: {
         annualAmount: number;
      };
      map: {
         latitude: number;
         longitude: number;
      };
      condominium: Record<string, unknown>;
      lot: {
         acres: string;
         depth: string;
         width: string;
      };
      data?: AddOwnerHistory;
   };
   history?: {
      mth: Record<"string", { value: number }>;
   };
}

export interface AddRequest extends ApiRequest {
   clientId?: number;
   boardId?: number;
   address?: {
      city: string;
      streetName: string;
      streetNumber: string;
      streetSuffix: string;
      unitNumber?: string;
      zip: string;
   };
   condominium?: AddCondominium;
   details?: {
      basement1?: string;
      basement2?: string;
      driveway?: string;
      exteriorConstruction1?: string;
      exteriorConstruction2?: string;
      extras: string;
      garage?: string;
      heating?: string;
      numBathrooms: number;
      numBathroomsPlus?: number;
      numBedrooms: number;
      numBedroomsPlus?: number;
      numFireplaces?: YesNo;
      numGarageSpaces?: number;
      numParkingSpaces?: number;
      propertyType: string;
      sqft: number;
      style: string;
      swimmingPool?: string;
      yearBuilt?: string;
   };
   lot?: {
      acres?: string;
      depth?: number;
      width?: number;
   };
   sendEmailNow?: boolean;
   sendEmailMonthly?: boolean;
   taxes?: {
      annualAmount: number;
   };
   ownerHistory?: AddOwnerHistory;
}

export interface AddResponse extends ApiResponse {
   estimate: number;
   estimateLow: number;
   estimateHigh: number;
   confidence: number;
   // request: Record<string, unknown>;
   request: AddRequest;
   history?: {
      mth: Record<"string", { value: number }>;
   };
}

export interface GetRequest extends ApiRequest {
   clientId?: number;
   estimateId?: number;
   pageNum?: number;
   resultsPerPage?: number;
}
export interface GetResponse extends ApiRequest {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   estimates: Single[];
}

export interface DeleteRequest extends ApiRequest {
   estimateId: number;
}

export interface DeleteResponse extends ApiRequest {
   estimateId: number;
}
