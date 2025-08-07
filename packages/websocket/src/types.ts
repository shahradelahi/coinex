/**
 * @interface CoinExWebSocketOptions
 * @description Options for the CoinEx WebSocket client.
 */
export interface CoinExWebSocketOptions {
  /**
   * @property {string} apiKey - The API key (access ID).
   */
  apiKey: string;
  /**
   * @property {string} secretKey - The secret key for signing requests.
   */
  secretKey: string;
  /**
   * @property {boolean} [autoConnect=true] - Whether to connect automatically on instantiation.
   */
  autoConnect?: boolean;
  /**
   * @property {boolean} [autoReconnect=true] - Whether to reconnect automatically on connection loss.
   */
  autoReconnect?: boolean;
}

/**
 * @interface WebSocketRequest
 * @description Represents a generic request sent to the WebSocket server.
 */
export interface WebSocketRequest<T> {
  /**
   * @property {number} id - The request identifier.
   */
  id: number;
  /**
   * @property {string} method - The method to be called.
   */
  method: string;
  /**
   * @property {T} params - The parameters for the method.
   */
  params: T;
}

/**
 * @interface WebSocketResponse
 * @description Represents a generic response from the WebSocket server.
 */
export interface WebSocketResponse<T> {
  /**
   * @property {number} id - The request identifier.
   */
  id: number;
  /**
   * @property {number} code - The response code. Should be 0 for success.
   */
  code: number;
  /**
   * @property {string} method - The method of the response, usually an update.
   */
  method?: string;
  /**
   * @property {T} data - The response data.
   */
  data: T;
  /**
   * @property {string} message - The response message.
   */
  message: string;
}

/**
 * @interface ServerTimeResponse
 * @description Response for server.time method.
 */
export interface ServerTimeResponse {
  timestamp: number;
}

/**
 * @interface PingResponse
 * @description Response for server.ping method.
 */
export interface PingResponse {
  result: 'pong';
}
