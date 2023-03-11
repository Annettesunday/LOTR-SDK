interface Config {
    authToken: string;
}
export declare abstract class MovieBase {
    private authToken;
    private baseUrl;
    constructor(config: Config);
    protected request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}
export {};
