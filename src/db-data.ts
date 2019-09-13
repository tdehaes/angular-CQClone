
export const USERS: any = [
    {
        id: 1,
        name: "Thorsten",
        surname: "Dehaes",
        email: "dehaesthorsten@gmail.com",
        experience: 548665,
        login: "loki",
        password: "loki",
    },
    {
        id: 2,
        name: "Ramses",
        surname: "Degryse",
        email: "degryse.ramses@gmail.com",
        experience: 6588,
        login: "gratchski",
        password: "gratchski",
    },
    {
        id: 3,
        name: "Bernard",
        surname: "Douwe",
        email: "douwe_bernard@gmail.com",
        experience: 6889965,
        login: "newt",
        password: "newt",
    }
];

export function getUser(login:string){
    return USERS.find(user => user.login === login);
}

export const CREATURETYPES: any = [
    {
        id: 1,
        description: "Bat",
        AD: 100,
        DD: 50,
        FD: 0,
        BaseHP: 50,
        BaseDmg: 30,
    },
    {
        id: 2,
        description: "Skeleton",
        AD: 0,
        DD: 100,
        FD: 50,
        BaseHP: 50,
        BaseDmg: 30,
    },
    {
        id: 3,
        description: "Hound",
        AD: 50,
        DD: 0,
        FD: 100,
        BaseHP: 50,
        BaseDmg: 30,
    },
    {
        id: 4,
        description: "Spirit",
        AD: 110,
        DD: 30,
        FD: 0,
        BaseHP: 70,
        BaseDmg: 80,
    },
    {
        id: 5,
        description: "Lich",
        AD: 0,
        DD: 110,
        FD: 30,
        BaseHP: 70,
        BaseDmg: 80,
    },
    {
        id: 6,
        description: "Priest",
        AD: 30,
        DD: 0,
        FD: 110,
        BaseHP: 70,
        BaseDmg: 80,
    },

]

export function getCreature(id:number){
    return CREATURETYPES(crit => crit.id === id);
}

