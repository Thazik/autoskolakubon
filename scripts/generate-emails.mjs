import fs from 'fs';

const prihlaska = fs.readFileSync('./maily/prihlaska-prijata.html', 'utf8');
const lekarske = fs.readFileSync('./maily/lekarke-potvrzeni-prijato.html', 'utf8');

const tsContent = `export const getPrihlaskaTemplate = (name: string, email: string, phone: string, course: string) => {
  return \`${prihlaska.replace(/`/g, '\\`')}\`
    .replace(/\\{\\{name\\}\\}/g, name)
    .replace(/\\{\\{email\\}\\}/g, email)
    .replace(/\\{\\{phone\\}\\}/g, phone)
    .replace(/\\{\\{course\\}\\}/g, course);
};

export const getLekarskeTemplate = (name: string, file_name: string, date: string) => {
  return \`${lekarske.replace(/`/g, '\\`')}\`
    .replace(/\\{\\{name\\}\\}/g, name)
    .replace(/\\{\\{file_name\\}\\}/g, file_name)
    .replace(/\\{\\{date\\}\\}/g, date);
};
`;

fs.writeFileSync('./api/templates.ts', tsContent);
console.log('Templates successfully generated into api/templates.ts');
