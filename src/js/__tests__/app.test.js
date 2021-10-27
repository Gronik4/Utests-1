import healthLevel from '../app';
test.each([
    [{name: 'Маг', health: 60}, 'healthy'],
    [{name: 'Маг', health: 40}, 'wounded'],
    [{name: 'Маг', health: 12}, 'critical'],
])(
    ('Test level health'),
    (object, expected) => {
        let resalt = healthLevel(object);
        expect(resalt).toBe(expected);
    }
)
