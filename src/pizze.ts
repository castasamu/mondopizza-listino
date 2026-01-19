export type Pizza = {
    _id: string
    name: string
    isSpecial: boolean
    isAvailable: boolean
    ingredients: {
        name: string
        postBake: boolean
        sort: number
    }[]
    price: {
        rectangularSlice: number | null
        mormal: number | null
        family: number | null
        regularSlice: number | null
    }
}

export const pizze: Pizza[] = [
    {
        _id: '150',
        name: 'Anna',
        isSpecial: true,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Taleggio',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini secchi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi freschi',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '151',
        name: 'Chiara',
        isSpecial: true,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Porri',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Fontina',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '152',
        name: 'Superstar',
        isSpecial: true,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz. di Bufala',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Cipolla caramellata',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pecorino',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Capperi',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 1000,
            family: 1950,
            regularSlice: 300,
        }
    },
    {
        _id: '153',
        name: 'Salmone',
        isSpecial: true,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mascarpone',
                postBake: true,
                sort: 2,
            },
            {
                name: 'Salmone affumicato',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Erba cipollina',
                postBake: true,
                sort: 4,
            },
            {
                name: 'Melassa di melograno',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 1200,
            family: 2450,
            regularSlice: 300,
        }
    },
    {
        _id: '154',
        name: 'Filòs',
        isSpecial: true,
        isAvailable: false,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Crema di grana padano DOP',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Riduzione di lambrusco mantovano',
                postBake: true,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 1000,
            family: 1950,
            regularSlice: 300,
        }
    },
    {
        _id: '155',
        name: 'Romagnola',
        isSpecial: true,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mortadella',
                postBake: true,
                sort: 2,
            },
            {
                name: 'Burrata',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Granella di pistacchio',
                postBake: true,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 1100,
            family: 2250,
            regularSlice: 300,
        }
    },
    {
        _id: '156',
        name: 'Contessa',
        isSpecial: true,
        isAvailable: false,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Panna',
                postBake: true,
                sort: 2,
            },
            {
                name: 'Bresaola',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Rucola',
                postBake: true,
                sort: 4,
            },
            {
                name: 'Aceto balsamico',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 1200,
            family: 2250,
            regularSlice: 300,
        }
    },
    {
        _id: '1',
        name: 'Stria',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Olio di oliva',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Origano',
                postBake: false,
                sort: 2,
            },
        ],
        price: {
            rectangularSlice: null,
            mormal: 450,
            family: 900,
            regularSlice: 300,
        }
    },
    {
        _id: '2',
        name: 'Marinara',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Aglio',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Origano',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 350,
            mormal: 450,
            family: 950,
            regularSlice: 300,
        }
    },
    {
        _id: '3',
        name: 'Margherita',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
        ],
        price: {
            rectangularSlice: 400,
            mormal: 600,
            family: 1150,
            regularSlice: 300,
        }
    },
    {
        _id: '3',
        name: 'Diavola',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 450,
            mormal: 700,
            family: 1450,
            regularSlice: 300,
        }
    },
    {
        _id: '4',
        name: 'Viennese',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Wurstel',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 450,
            mormal: 700,
            family: 1450,
            regularSlice: 300,
        }
    },
    {
        _id: '5',
        name: 'Mantovana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 450,
            mormal: 700,
            family: 1450,
            regularSlice: 300,
        }
    },
    {
        _id: '6',
        name: 'Fresca',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Basilico',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Olive nere',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '7',
        name: 'Prosciutto e funghi',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Prosciutto cotto',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '8',
        name: 'Tonno cipolla',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Tonno',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Cipolla',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '9',
        name: 'Trevigiana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Radicchio',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Gorgonzola',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '10',
        name: 'Contadina',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Pancetta affumicata',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '11',
        name: 'Contadina 2',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Scamorza affumicata',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 500,
            mormal: 750,
            family: 1500,
            regularSlice: 300,
        }
    },
    {
        _id: '12',
        name: 'Saporita',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Aglio',
                postBake: false,
                sort: 4,
            },
            {
                name: "Olio all'aglio",
                postBake: false,
                sort: 5,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 6,
            },
            {
                name: 'Prezzemolo',
                postBake: true,
                sort: 7,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '13',
        name: 'Leggera',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Stracchino',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Asparagi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Rucola',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '14',
        name: '4 formaggi',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Gorgonzola',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Taleggio',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Scamorza affumicata',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '15',
        name: 'Vegetariana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Melanzane grigliate',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Zucchine grigliate',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Asparagi',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '16',
        name: 'Bufalina',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz. di bufala',
                postBake: false,
                sort: 2,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '17',
        name: 'Americana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Patate fritte',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Maionese',
                postBake: true,
                sort: 4,
            },
            {
                name: 'Ketchup',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 800,
            family: 1600,
            regularSlice: 300,
        }
    },
    {
        _id: '18',
        name: 'Porri',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Porri',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Panna',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Speck',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '19',
        name: 'Messicana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Peperoni',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Cipolle',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Fagioli',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '20',
        name: 'Pesto',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pesto alla genovese',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '21',
        name: 'Campagnola',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Spinaci',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Ricotta',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '22',
        name: 'Gustosa',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Prosciutto cotto',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Zucchine grigliate',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Brie',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '23',
        name: 'Primavera',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Stracchino',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Bresaola',
                postBake: true,
                sort: 4,
            },
            {
                name: 'Rucola',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '24',
        name: 'Tirolese',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Speck',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '25',
        name: 'Inverno',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Spinaci',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Taleggio',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '26',
        name: 'Carbonara',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pancetta affumicata',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Uova',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '27',
        name: 'Sfiziosa',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Bresaola',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '28',
        name: 'Boscaiola',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Chiodini',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Porcini',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Scamorza affumicata',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '29',
        name: 'Estate',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz. di Bufala',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '30',
        name: 'Mediterranea',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Carciofi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Olive nere',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Capperi',
                postBake: false,
                sort: 6,
            },
            {
                name: 'Origano',
                postBake: false,
                sort: 7,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '31',
        name: 'Halloween',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Crema di zucca',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '32',
        name: 'Capricciosa',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Prosciutto cotto',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Carciofi',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '33',
        name: 'Campana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz. di Bufala',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini secchi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Basilico',
                postBake: true,
                sort: 4,
            },
        ],
        price: {
            rectangularSlice: 550,
            mormal: 850,
            family: 1650,
            regularSlice: 300,
        }
    },
    {
        _id: '34',
        name: 'Romana',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Acciughe',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Capperi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Olive nere',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 850,
            family: 1700,
            regularSlice: 300,
        }
    },
    {
        _id: '35',
        name: 'Linea',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Verdura di stagione',
                postBake: true,
                sort: 3,
            },
            {
                name: 'Tonno',
                postBake: true,
                sort: 4,
            },
            {
                name: "Glassa d'aceto",
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 850,
            family: 1700,
            regularSlice: 300,
        }
    },
    {
        _id: '36',
        name: '4 Stagioni',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Prosciutto cotto',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Carciofi',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Olive nere',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 850,
            family: 1700,
            regularSlice: 300,
        }
    },
    {
        _id: '37',
        name: 'Lady',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Radicchio',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '38',
        name: 'Rustica',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Patate',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Chiodini',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Fontina',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '39',
        name: 'Delizia',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Asparagi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Taleggio',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '40',
        name: 'Autunno',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Spinaci',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi freschi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Taleggio',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '41',
        name: 'Mondo Pizza',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Stracchino',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Prosciutto crudo',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '42',
        name: 'Cavour',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Pomodorini freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Scamorza affumicata',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 600,
            mormal: 900,
            family: 1750,
            regularSlice: 300,
        }
    },
    {
        _id: '43',
        name: 'Fria',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Mozz.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Friarielli',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Grana padano',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 900,
            family: 1800,
            regularSlice: 300,
        }
    },
    {
        _id: '44',
        name: 'Del Re',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Porcini',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Grana',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '45',
        name: 'Speciale',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Radicchio',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Funghi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Mascarpone',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Speck',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '46',
        name: 'Vulcano',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Peperoni',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Salamino piccante',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Gorgonzola',
                postBake: false,
                sort: 6,
            },
            {
                name: 'Cipolla',
                postBake: false,
                sort: 7,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '47',
        name: 'Del Pizzaiolo',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Radicchio',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Ricotta',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Prosciutto crudo',
                postBake: true,
                sort: 5,
            },
            {
                name: 'Rucola',
                postBake: true,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '48',
        name: 'Favolosa',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Funghi freschi',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Philadelphia',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Prosciutto crudo',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '49',
        name: 'Castei',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Porcini',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Scamorza affumicata',
                postBake: false,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '50',
        name: 'Del Conte',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Prosciutto cotto',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Salsiccia Mantovana',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Pancetta arrotolata',
                postBake: false,
                sort: 5,
            },
            {
                name: 'Gorgonzola',
                postBake: false,
                sort: 6,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '51',
        name: 'Frutti di mare',
        isSpecial: false,
        isAvailable: false,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Frutti di mare',
                postBake: false,
                sort: 3,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '52',
        name: 'Montanara',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Chiodini',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Ricotta',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Bresaola',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 950,
            family: 1850,
            regularSlice: 300,
        }
    },
    {
        _id: '53',
        name: 'Raffinata',
        isSpecial: false,
        isAvailable: true,
        ingredients: [
            {
                name: 'Pom.',
                postBake: false,
                sort: 1,
            },
            {
                name: 'Mozz.',
                postBake: false,
                sort: 2,
            },
            {
                name: 'Salsa Tartufo',
                postBake: false,
                sort: 3,
            },
            {
                name: 'Porcini',
                postBake: false,
                sort: 4,
            },
            {
                name: 'Scaglie di grana',
                postBake: true,
                sort: 5,
            },
        ],
        price: {
            rectangularSlice: 650,
            mormal: 1000,
            family: 2000,
            regularSlice: 300,
        }
    },
]