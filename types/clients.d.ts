import { ApiRequest, ApiResponse, Operator } from "..";

export interface Client {
   clientId: number;
   agentId: number;
   fname: string;
   lname: string;
   phone: string;
   email: string;
   proxyEmail: string;
   status: boolean;
   lastActivity: null | unknown;
   tags: string;
   preferences: {
      email: boolean;
      sms: boolean;
      unsubscribe: boolean;
      whatsapp: boolean;
   };
   expiryDate: null | unknown;
   searches: unknown[];
   createdOn: string;
}

export interface CreateRequest extends ApiRequest {
   agentId: number;
   fname?: string;
   lname?: string;
   phone?: string;
   email?: string;
   status?: boolean;
   preferences?: {
      email: boolean;
      sms: boolean;
      unsubscribe: boolean;
   };
   tags?: string[];
}

export interface CreateResponse extends ApiResponse, Client {}

export interface UpdateRequest extends Omit<CreateRequest, "email">, ApiRequest {
   clientId: number;
}

export interface UpdateResponse extends ApiResponse {}

export interface DeleteResponse extends ApiResponse {}
export interface GetResponse extends ApiResponse, Client {}

export interface FilterRequest extends ApiRequest {
   agentId?: number;
   clientId?: number;
   email: string | undefined;
   fname?: string;
   keywords?: string;
   lname?: string;
   phone?: string | undefined;
   status?: boolean;
   condition?: "EXACT" | "CONTAINS";
   operator?: Operator;
   pageNum?: number;
   resultsPerPage?: number;
   tags?: string;
}

export interface FilterResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   clients: Array<Client>;
}

export interface GetTagsResponse extends ApiResponse {}

export interface RenameTagRequest extends ApiRequest {
   tag: string;
   label: string;
}

export interface RenameTagResponse extends ApiResponse {}
