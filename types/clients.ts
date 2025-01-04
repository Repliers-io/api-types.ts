import { Estimate } from "./estimate.js";
import { ApiRequest, ApiResponse, Operator } from "./index.js";

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
   // TODO: Searches.CreateResponse or similar should go here
   searches: unknown[]; 
   createdOn: string;
   estimates: Estimate[];
}

export interface CreateRequest extends ApiRequest {
   agentId?: number;
   clientId?: number;
   email?: string;
   fname?: string;
   lname?: string;
   /**
    * One or more keywords may be specified to filter the results by. Useful for searching clients. If specified all other params are ignored.  
    * */
   keywords?: string;
   phone?: number;
   status?: boolean;
   /**
    * Determines the search condition applied to the filters. If EXACT, requires that the given value for one or more params is an exact match of the stored value. If CONTAINS, requires that the given value for one or more params is contained within the stored value.
    */
   conditions?: "EXACT" | "CONTAINS";
   /**
    * Determines the search logic applied to the filters. If OR, requires that one or more params contain/equal the given value. If AND, requires that all params contain/equal the given value.
    */
   operator?: "AND" | "OR";
   pageNum?: number;
   resultsPerPage?: number;
   /**
    * One or more comma separated strings that can be used to filter clients. For example GET /clients?tags=buyer,toronto. The response contains clients that have any of the tags specified.
    */
   tags?: string[];
   /**
    * Enables automatic retrieval of Saved Searches for each client in the response. For best performance it's recommended to disable this setting if Saved Searches are not required.
    * @defaultValue `true`
    */
   showSavedSearches?: boolean;
}

export interface CreateResponse extends ApiResponse, Client {}

export interface UpdateRequest extends Omit<CreateRequest, "email">, ApiRequest {
   clientId: number;
}

//TODO: add response details
export interface UpdateResponse extends ApiResponse {}

//TODO: add response details
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
