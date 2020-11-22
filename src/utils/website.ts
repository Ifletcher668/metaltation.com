type Social = {
    instagram: string;
    facebook: string;
};
type Route = {
    path: string;
    name: string;
    external?: boolean;
};

type Config = {
    routes: {[key: string]: Route};
    socials: Social;
};

const config: Config = {
    routes: {
        home: {
            path: '/',
            name: 'home',
        },
        about: {
            path: '/about',
            name: 'about',
        },
        pastEvents: {
            path: '/past-events',
            name: 'past events',
        },
        nextSession: {
            path: '/next-session',
            name: 'next session',
        },
        workWithMe: {
            path: 'https://colleen-fletcher.com/',
            name: 'work with me',
            external: true,
        },
    },
    socials: {
        instagram: 'https://www.instagram.com/metaltation/',
        facebook: 'https://www.facebook.com/metaltations',
    },
};

export default config;
