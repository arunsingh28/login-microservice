import express, { Express } from "express";
import path from 'path'

export function http(app: Express) {

    // HTML template
    app.use(express.static(__dirname + '../src/template/public'));
    console.log(path.join(__dirname + '/../src/template/public/js'));
    // body parser for json data
    app.use(express.json());
    // body parser for text data
    app.use(express.text());
    app.use(express.urlencoded({ extended: true }));

    const port = process.env.PORT || 80;
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })

}