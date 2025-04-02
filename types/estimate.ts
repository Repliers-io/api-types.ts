import { ApiRequest, ApiResponse, YesNo } from "./index.js";

export interface Estimate {
   estimateId: number;
   clientId?: number;
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
      //TODO: this must be extended
      details: Record<string, unknown>;
      taxes: {
         annualAmount: number;
      };
      map: {
         latitude: number;
         longitude: number;
      };
      //TODO: this must be extended
      condominium: Record<string, unknown>;
      lot: {
         acres: string;
         depth: string;
         width: string;
      };
      [key: string]: unknown;
   };
   history?: {
      mth: Record<string, { value: number }>;
   };
   sendEmailMonthly?: boolean;
}

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
   parkingType?: string; // add | array
   //TODO: pets depend on the board so must be string OR ARRAY
   pets?: "N" | "Restrict";
   stories?: number;
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
      basement1?: string; // TODO: add | array
      basement2?: string;
      driveway?: string;
      exteriorConstruction1?: string; // TODO: add | array
      exteriorConstruction2?: string;
      extras: string;
      garage?: string;
      heating?: string; // TODO: add | array
      numBathrooms: number;
      numBathroomsPlus?: number;
      numBedrooms: number;
      numBedroomsPlus?: number;
      numFireplaces?: YesNo; // TODO: add | number
      numGarageSpaces?: number;
      numParkingSpaces?: number;
      propertyType: string;
      sqft: number;
      style: string;
      swimmingPool?: string; //TODO: add | array
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
}

export interface AddResponse extends ApiResponse {
   estimate: number;
   estimateLow: number;
   estimateHigh: number;
   confidence: number;
   request?: AddRequest;
   payload?: AddRequest;
   history?: {
      mth: Record<string, { value: number }>;
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
   estimates: Estimate[];
}

export interface DeleteRequest extends ApiRequest {
   estimateId: number;
}

export interface DeleteResponse extends ApiRequest {
   estimateId: number;
}

export interface PatchRequest extends Omit<AddRequest, "boardId"> {
   estimateId: number;
}
export interface PatchResponse extends GetResponse { }
