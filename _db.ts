type InMemoryDataBaseStructure = Array<Record<string, string | string[] | number | boolean>>

let games: InMemoryDataBaseStructure = [
    {
        id: "1",
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch"],
    },
    {
        id: "2",
        title: "God of War",
        platform: ["PlayStation 4", "PlayStation 5"],
    },
    {
        id: "3",
        title: "Minecraft",
        platform: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
    },
];

let authors: InMemoryDataBaseStructure = [
    {
        id: "1",
        name: "John Doe",
        verified: true,
    },
    {
        id: "2",
        name: "Jane Smith",
        verified: false,
    },
    {
        id: "3",
        name: "Alex Johnson",
        verified: true,
    },
];

let reviews: InMemoryDataBaseStructure = [
    {
        id: "1",
        rating: 10,
        content: "An amazing open-world experience!",
    },
    {
        id: "2",
        rating: 9,
        content: "Incredible storytelling and gameplay.",
    },
    {
        id: "3",
        rating: 8,
        content: "A fun and creative game for all ages.",
    },
];

export default { games, authors, reviews }