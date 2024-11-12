import { ApiRequest, ApiResponse } from "./index.js";

export interface AddRequest extends ApiRequest {
   clientId: number;
   mlsNumber: string;
   boardId?: number;
}

export interface AddResponse extends ApiResponse {}
export interface DeleteRequest extends ApiRequest {
   favoriteId: number;
}
export interface DeleteResponse extends ApiResponse {}
export interface GetRequest extends ApiRequest {
   clientId: number;
}
export interface GetResponse extends ApiResponse {
   page: number;
   numPages: number;
   pageSize: number;
   count: number;
   //TODO: we don't know what other fields are coming inside favorites except favoriteId?
   favorites: Array<{
      [key: string]: unknown;
      favoriteId: number;
   }>;
}
