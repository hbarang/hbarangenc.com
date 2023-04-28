export interface IGameInfo {
    id: string;
    title: string;
    description: string;
    text: string;
    googlePlayLink?: string;
    appleStoreLink?: string;
    videoLink: string;
    gameIcon: string;
}

const games = [
    {
        id: '1',
        text: 'Guns and Bounce - Game 1',
        title: 'Guns and Bounce',
        description: "Developed this game as a sole developer and founder. Worked with 2 other game artists. Added consistent updates to the game to keep the users engaged. 1.5+ million downloads",
        appleStoreLink: 'https://apps.apple.com/us/app/guns-and-bounce/id1660964163',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.lagotgames.bulletsandballs&hl=en&gl=US',
        videoLink: 'https://www.youtube.com/watch?v=OkzPAmhXYxM',
        gameIcon: "",
    },
    {
        id: '2',
        text: 'Fashion Evolution - Game 2',
        title: 'Fashion Evolution',
        description: 'Solo developer for the project. Worked with a game artistto turn this game into a worldvide hit. Optimized thegame from low end to high end devices with quickupdates and adressables. 1.7+ million downloads',
        appleStoreLink: 'https://apps.apple.com/us/app/fashion-evolution/id1602114712',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.lagotgames.fashionevolution&hl=en&gl=US',
        videoLink: "https://www.youtube.com/shorts/bAVvYu77Cg8",
        gameIcon: "",
    },
    {
        id: '3',
        text: 'Rush Evolution - Game 3',
        title: 'Rush Evolution',
        description: 'Worked as a solo developer for this game. Worked preciselyon car physics to keep users engaged in the game.',
        appleStoreLink: 'https://apps.apple.com/us/app/rush-evolution/id1634493780',
        googlePlayLink: 'https://play.google.com/store/apps/details?id=com.lagotgames.trafficdriver&hl=en&gl=US',
        videoLink: "https://www.youtube.com/watch?v=QrkWB8ej0A4",
        gameIcon: "",
    },
    {
        id: '4',
        text: 'Merge Blocks Merge',
        title: 'Merge Blocks Merge - Game 4',
        description: 'My first proffesional game developer job. Worked with 2 other game developers to launch this game. Responsbile with gameplay, ad monetization, analytics, UI. 1+ million downloads',
        appleStoreLink: 'https://apps.apple.com/us/app/merge-blocks-merge/id1503507357',
        videoLink: "https://www.youtube.com/watch?v=Cfzf23ouvFk&t=17s",
        gameIcon: "",
    }
] as IGameInfo[];

export default games;