import { ApiRequest, ApiResponse } from "..";

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
   favorites: Array<{
      [key: string]: unknown;
      favoriteId: number;
   }>;
}
