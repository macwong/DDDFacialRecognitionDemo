export default class Globals {
    static get sectionIDs() { 
        return {
            welcome: "welcome",
            about: "about",
            contact: "contact",
            stuff: "stuff",
        }; 
    }

    static get pngSource() {
        return "data:image/png;base64,"; 
    }

    static get endpoint() {
        return "http://127.0.0.1:5000/daveface/";
    }

    static get defaultWidth() {
        return 640;
    }

    static get defaultHeight() {
        return 480;
    }
}