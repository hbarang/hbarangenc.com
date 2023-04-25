export interface IGameInfo {
    id: string;
    title: string;
    description: string;
    text: string;
    image: string;
    link: string;
    linkText?: string;
    video: string;
}

const games = [
    {
        id: '1',
        text: 'Game 1',
        title: 'Game 1',
        description: 'Game 1',
        image: 'game.png',
        link: 'https://www.google.com',
        linkText: 'Google',
        video: 'https://www.youtube.com/embed/9bZkp7q19f0'
    },
    {
        id: '2',
        text: 'Game 2',
        title: 'Game 2',
        description: 'Game 2',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        link: 'https://www.google.com',
        linkText: 'Google',
        video: 'https://www.youtube.com/watch?v=OkzPAmhXYxM'
    },
    {
        id: '3',
        text: 'Game 3',
        title: 'Game 3',
        description: 'Game 2',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        link: 'https://www.google.com',
        linkText: 'Google',
        video: 'https://www.youtube.com/watch?v=QrkWB8ej0A4&ab_channel=LagotGames'
    },
    {
        id: '2',
        text: 'Game 2',
        title: 'Game 2',
        description: 'Game 2',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        link: 'https://www.google.com',
        linkText: 'Google'
    },
    {
        id: '2',
        text: 'Game 2',
        title: 'Game 2',
        description: 'Game 2',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        link: 'https://www.google.com',
        linkText: 'Google'
    },
    {
        id: '2',
        text: 'Game 2',
        title: 'Game 2',
        description: 'Game 2',
        image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        link: 'https://www.google.com',
        linkText: 'Google'
    },
] as IGameInfo[];

export default games;