import { HttpRequestBuilder } from "./HttpRequestBuilder";

const request = new HttpRequestBuilder()
    .setUrl("https://api.example.com/users")
    .setMethod("POST")
    .setHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer token"
    })
    .setBody({
        name: "Dilafruz",
        age: 19
    })
    .build();

request.showRequest();