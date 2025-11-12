let siteState = "not-loaded";
const startingLoaderDuration = 2600;
const endingLoaderDuration = 2000;
const closeLoaderDuration = 400;
export const totalTime = startingLoaderDuration + endingLoaderDuration + closeLoaderDuration;

export default function loadSite() {
    const loader = document.querySelector("#loader");
    loader.classList.add(siteState);

    const handleLoadStates = () => {
        document.body.style.overflow = "hidden";
        siteState = "starting-loading";
        loader.classList.remove("not-loaded");
        loader.classList.add(siteState);

        // Define a sequência correta de estados com seus respectivos tempos
        const toEndingLoading = setTimeout(() => {
            siteState = "ending-loading";
            loader.classList.remove("starting-loading");
            loader.classList.add(siteState);
        }, startingLoaderDuration);

        const toClosingLoader = setTimeout(() => {
            siteState = "closing-loader";
            loader.classList.remove("ending-loading");
            loader.classList.add(siteState);
        }, startingLoaderDuration + endingLoaderDuration);

        const toLoaded = setTimeout(() => {
            siteState = "loaded";
            loader.classList.remove("closing-loader");
            loader.classList.add(siteState);
            document.body.style.overflowY = "auto";
            document.body.style.overflowX = "hidden";
        }, startingLoaderDuration + endingLoaderDuration + closeLoaderDuration);
    };

    if (document.readyState === "complete") {
        handleLoadStates();
    } else {
        window.addEventListener("load", handleLoadStates);
    }
}
