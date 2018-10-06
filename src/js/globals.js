export default class Globals {
    static get sectionIDs() { 
        return {
            welcome: "welcome",
            introduction: "introduction",
            basicconcepts: "basicconcepts",
            facialrecognitionpipeline: "facialrecognitionpipeline",
            potentialissues: "potentialissues",
            technologies: "technologies",
            demo: "demo"
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

    static get defaultDeviceId() {
        return "ae751e18cbd2b423e9829b6775b8c413127c75951f5db148a139460dd9ebd726";
    }
}