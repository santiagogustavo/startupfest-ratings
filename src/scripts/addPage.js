const colors = require('colors');
const readline = require('readline');
const fs = require('fs');

const route = {
  name: '',
  component: '',
  path: '',
  exact: false,
};

const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

const writeRoute = () => {
  const routesJSON = JSON.parse(fs.readFileSync('./src/routes/index.json', 'utf8'));
  const parsed = route.path.split('/');
  const component = capitalize(parsed[parsed.length - 1]);
  route.component = route.path;

  routesJSON.push(route);

  console.log(colors.yellow('✎ WRITING "./src/routes/index.json"...'));
  fs.writeFileSync(
    './src/routes/index.json',
    JSON.stringify(routesJSON, null, 2),
    'utf8',
  );

  let index = fs.readFileSync('./src/scripts/template/index.js', 'utf8');
  index = index.replace(/Component/g, component);
  console.log(colors.yellow(`✎ WRITING "./src/routes/${route.path}/index.js"...`));
  fs.writeFileSync(`./src/routes/${route.path}/index.js`, index, 'utf8');

  let page = fs.readFileSync('./src/scripts/template/Component.jsx', 'utf8');
  page = page.replace(/Component/g, component);
  console.log(colors.yellow(`✎ WRITING "./src/routes/${route.path}/${component}.jsx"...`));
  fs.writeFileSync(`./src/routes/${route.path}/${component}.jsx`, page, 'utf8');

  console.log(colors.green('✔ ROUTE CREATED'));
};

const readExact = () => {
  const rlExact = readline.createInterface({ input: process.stdin, output: process.stdout });
  rlExact.question('➤ Is it an exact route? (Y or N): ', (exact) => {
    rlExact.close();
    if (['y', 'n'].includes(exact.toLowerCase())) {
      route.exact = exact.toLowerCase() === 'y';
      writeRoute();
    } else {
      console.log(colors.red('✘ INVALID ANSWER'));
    }
  });
};

const readPath = () => {
  const rlPath = readline.createInterface({ input: process.stdin, output: process.stdout });
  rlPath.question('➤ Type in the path (ex.: route/subroute): ', (path) => {
    rlPath.close();
    if (path.length > 0) {
      const parsed = path.split('/');
      if (parsed.includes('')) {
        console.log(colors.red('✘ INVALID PATH FORMAT'));
        return;
      }
      if (fs.existsSync(`./src/routes/${path}`)) {
        console.log(colors.red('✘ PATH ALREADY EXISTS'));
        return;
      }

      parsed.reduce((cur, next) => {
        const acc = `${cur}/${next}`;
        if (!fs.existsSync(`./src/routes${acc}`)) {
          console.log(colors.yellow(`✎ CREATING "./src/routes${acc}"...`));
          fs.mkdirSync(`./src/routes${acc}`);
        }
        return acc;
      }, '');
      console.log(colors.green('✔ PATHS CREATED'));
      route.path = `/${path}`;
      readExact();
    } else {
      console.log(colors.red('✘ EMPTY PATHS ARE NOT ALLOWED'));
    }
  });
};

const readName = () => {
  const rlName = readline.createInterface({ input: process.stdin, output: process.stdout });
  rlName.question('➤ Type in the Name: ', (name) => {
    rlName.close();
    if (name.length > 0) {
      route.name = name;
      readPath();
    } else {
      console.log(colors.red('✘ EMPTY NAMES ARE NOT ALLOWED'));
    }
  });
};

console.log(colors.inverse.yellow('▓▒░REACT BOILER ROOM - ADD PAGE░▒▓'));
readName();
