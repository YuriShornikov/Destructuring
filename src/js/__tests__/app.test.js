import getSpecialAttacks from "../app";

describe('getSpecialAttacks function', () => {
    test('return special attacks', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };

        const result = getSpecialAttacks(character);

        expect(result).toEqual([
            {
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://...'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Описание недоступно',
                icon: 'http://...'
            }
        ]);
    });

    test('return an empty special attacks', () => {
        const character = {
            name: 'Воин',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
            special: []
        };

        const result = getSpecialAttacks(character);

        expect(result).toEqual([]);
    });
});