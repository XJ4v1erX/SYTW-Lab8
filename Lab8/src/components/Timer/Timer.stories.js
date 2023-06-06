import Timer from "./Timer"

export default {
    title: "Labyrinth/Timer",
    component: Timer,
    tags: ["autodocs"],
}

export const Cave = {
    args: {
        theme: "Cave",
        time: 300,
    }
}

export const Beach = {
    args: {
        theme: "Beach",
        time: 10,
    }
}

export const Jungle = {
    args: {
        theme: "Jungle",
        time: 60,
    }
}
