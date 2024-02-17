export function orderIdGenerator () {
    const LETTERMIN = 65; // начинается англ алфавит заглав
    const LETTERMAX = 90; // заканчивается англ алфавит заглав
    const NUMBERMIN = 10 // да, можно от 0, и потом прописать добавлять 0 перед, если number, но зачем, если и так уникально
    const NUMBERMAX = 99

    let letter = String.fromCodePoint(Math.floor(Math.random() * (LETTERMAX - LETTERMIN + 1)) + LETTERMIN);
    let letter2 = String.fromCodePoint(Math.floor(Math.random() * (LETTERMAX - LETTERMIN + 1)) + LETTERMIN);
    let number = Math.floor(Math.random() * (NUMBERMAX - NUMBERMIN + 1)) + NUMBERMIN;
    let number2 = Math.floor(Math.random() * (NUMBERMAX - NUMBERMIN + 1)) + NUMBERMIN;
    let number3 = Math.floor(Math.random() * (NUMBERMAX - NUMBERMIN + 1)) + NUMBERMIN;

    return letter + letter2 + number + number2 + number3
}