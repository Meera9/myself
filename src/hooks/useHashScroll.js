import {useEffect} from "react";
import {scroller} from "react-scroll";
import {SCROLL_PROPS} from "../utils/scroll.js";

export default function useHashScroll() {
    useEffect(() => {
        const scrollToHash = () => {
            const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
            if (!id || !document.getElementById(id)) return;
            scroller.scrollTo(id, SCROLL_PROPS);
        };

        scrollToHash();
        window.addEventListener("hashchange", scrollToHash);

        return () => window.removeEventListener("hashchange", scrollToHash);
    }, []);
}
