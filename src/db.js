import Dexie from 'dexie';

export const db = new Dexie('Task');

db.version(1).stores({
    task: `
        id++,
        name,
        date,
        assign`,
});