import express, { Express } from "express";

export function http(app: Express) {

    // body parser for incoming data
    app.use(express.static(__dirname + '/../../public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const port = process.env.PORT || 80;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })

}