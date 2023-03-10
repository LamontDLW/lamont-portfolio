import img1 from "../../resources/portfolio.png";
import img2 from "../../resources/weatherflow.png";
import img3 from "../../resources/rnbreplay.png";

export default [
    {
        id: 1,
        title: "lamontdlw.com",
        description: "lamontdlw.com is a minimal yet elegant display of what I have to offer as a developer.",
        links: {
            liveApp: "https://www.lamontdlw.com",
            repo: "https://github.com/LamontDLW/lamont-portfolio",
        },
        builtWith: "REACT + JS + HTML",
        img: img1,
    },
    {
        id: 2,
        title: "WeatherFlow",
        description: "WeatherFlow displays the current weather conditions in any available city and neighborhood.",
        links: {
            liveApp: "https://weather-flow.netlify.app/",
            repo: "https://github.com/LamontDLW/weather-flow",
        },
        builtWith: "HTML + CSS + JS + API",
        img: img2,
    },
    {
        id: 3,
        title: "RNB REFRESH",
        description: "Discover the staples in r&b music along with the artists that are evolving the genre today.",
        links: {
            liveApp: "",
            repo: "",
        },
        builtWith: "REACT + JS + API",
        img: img3,
    },
]