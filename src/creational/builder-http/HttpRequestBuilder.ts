import { HttpRequest } from "./HttpRequest";

export class HttpRequestBuilder {
    private url: string = "";
    private method: string = "GET";
    private headers: object = {};
    private body: any = null;

    setUrl(url: string): HttpRequestBuilder {
        this.url = url;
        return this;
    }

    setMethod(method: string): HttpRequestBuilder {
        this.method = method;
        return this;
    }

    setHeaders(headers: object): HttpRequestBuilder {
        this.headers = headers;
        return this;
    }

    setBody(body: any): HttpRequestBuilder {
        this.body = body;
        return this;
    }

    build(): HttpRequest {
        return new HttpRequest(
            this.url,
            this.method,
            this.headers,
            this.body
        );
    }
}