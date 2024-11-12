import * as path from "node:path";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import _ from "lodash";

const STORIES_ROOT = path.join(process.cwd(), "stories");

const name = process.argv[2].trim();

const fileName = _.startCase(name).replace(/\s/g, "-");
const variableName = _.camelCase(name);
const componentName = _.upperFirst(_.camelCase(name));

const storyDir = `${STORIES_ROOT}/${fileName}`;

if (!existsSync(storyDir)) {
  mkdirSync(storyDir, { recursive: true });
}

const story = `import { create${componentName} } from './${fileName}';

export default {
  title: '${_.startCase(name)}',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return create${componentName}({ ...args });
  },
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
    },
  },
  args: {},
};

export const ${variableName} = {
  args: {
    text: '${name}',
  },
};`;

const component = `import "./${fileName}.css";

export const create${componentName} = ({ ...args }) => {
  const el = document.createElement("div");
  el.innerText = args.text;
  el.className = "${fileName.toLowerCase()}";
  return el;
};`;

writeFileSync(`${storyDir}/${fileName}.stories.js`, story);
writeFileSync(`${storyDir}/${fileName}.js`, component);
writeFileSync(`${storyDir}/${fileName}.css`, `.${fileName.toLowerCase()} {}`);

console.log(`Created ${name} story`);