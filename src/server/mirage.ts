/*
import { createServer, Model, Response } from "miragejs";
import { api } from "./api";

export function server2({ environment = "development" } = {}) {
    const server2 = createServer({
        environment,
        routes() {
            this.namespace = '';
            this.get(api, (schema, request) => {
                return Math.random() > 0.6 ? (new Response(200, {}, {
                    "data": {
                        "status": true,
                        "type": "userData",
                        "id": "001",
                        "attributes": {
                            "name": "Иван",
                            "mail": "Иванов",
                            "phone": "+7(978) 123-45-67",
                            "comment": "Комментарий от Ивана."
                        },
                        "relationships": {}
                    },
                    "meta": {
                        "copyright": "Copyright 2022 Ivan",
                        "autors": [
                            "Ivan Ivanov"
                        ]
                    },
                    "links": {
                        "self": "#"
                    },
                })) : (new Response(400, {}, {
                    "errors": [
                        {
                            "id": "20001",
                            "links": {},
                            "status": "404",
                            "code": "2352345",
                            "title": "Что-то пошло не так :-(",
                            "detail": "Произошла ошибка на сервере",
                            "source": {
                                "pointer": "/data"
                            },
                            "parameter": "",
                            "meta": {}
                        }
                    ]
                }));
            });
        },
    });
    return server2;
}
*/
