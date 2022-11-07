module.exports = function fn(str) {
    if (Array.isArray(str)) {
        str[0] = str[0].split("").reverse().join("");
        str[1] = null;
        return str;
    }
    if (typeof str === "string") {
        return str.split("").reverse().join("");
    } else {
        return null;
    }
};
