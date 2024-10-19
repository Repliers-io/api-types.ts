import { ApiRequest, ApiResponse } from "./index.js";

export interface SendRequest extends ApiRequest {
   sender: "agent" | "client";
   agentId: number;
   clientId: number;
   content: Partial<{
      listings: string[];
      searches: number[];
      message: string;
      links: string[];
      pictures: string[];
   }>;
}
export interface SendResponse extends ApiResponse {}
