module.exports = {
    mode: "jit",
    purge: {
        content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
        // options: {
        //     safelist: ["bg-green-500", "bg-indigo-500"],
        // },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            // permanentMarker: ["Permanent Marker", "cursive"],
            // gloria: ["Gloria Hallelujah", "cursive"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
