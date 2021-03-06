module.exports = {
    ready: {
        index: require("./ready/index.js"),
    },
    guild: {
        member: {
            add: require("./guild/member/add.js"),
        },
    },
    connect: {
        disconnect: require("./connect/disconnect.js"),
        reconnecting: require("./connect/reconnecting.js"),
    },
    debug: {
        index: require("./debug/index.js"),
    },
    error: {
        index: require("./error/index.js"),
    },
    warn: {
        index: require("./warn/index.js"),
    },
};
