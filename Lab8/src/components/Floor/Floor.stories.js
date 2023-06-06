import Floor from './Floor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
    title: 'Labyrinth/Floor',
    component: Floor,
    tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Cave = {
    args: {
        type: 'cave',
    },
}
export const Beach = {
    args: {
        type: 'beach',
    },
}
export const Jungle = {
    args: {
        type: 'jungle',
    },
}
export const Campfire = {
    args: {
        type: 'campfire',
    },
}
