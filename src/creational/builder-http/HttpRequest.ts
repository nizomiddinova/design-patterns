export class HttpRequest {
    url: string;
    method: string;
    headers: object;
    body: any;

    constructor(
        url: string,
        method: string,
        headers: object,
        body: any
    ) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }

    showRequest(): void {
        console.log("HTTP Request:");
        console.log("URL:", this.url);
        console.log("Method:", this.method);
        console.log("Headers:", this.headers);
        console.log("Body:", this.body);
    }
}