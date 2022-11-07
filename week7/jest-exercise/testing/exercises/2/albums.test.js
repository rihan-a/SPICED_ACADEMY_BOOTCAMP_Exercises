const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");
spotify.search.mockResolvedValue({
    albums: {
        items: [
            { name: "the wall" },
            { name: "pulse" },
            { name: "divison bell" },
            { name: "atom heart mother" },
        ],
    },
});

test("album names are in alphabetical order", () => {
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
