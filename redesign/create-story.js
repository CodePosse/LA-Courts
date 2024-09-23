import * as path from "node:path";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const STORIES_ROOT = path.join(process.cwd(), "stories");

const name = process.argv[2].trim();

const storyDir = `${STORIES_ROOT}/${name}`;

if (!existsSync(storyDir)) {
  mkdirSync(storyDir, { recursive: true });
}

const story = `import { create${name} } from './${name}';

export default {
  title: '${name}',
  tags: ['autodocs'],
  render: ({ ...args }) => {
    return create${name}({ ...args });
  },
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
    },
  },
  args: {},
};

export const ${name} = {
  args: {
    text: '${name}',
  },
};`;

const component = `import "./${name}.css";

export const create${name} = ({ ...args }) => {
  const el = document.createElement("div");
  el.innerText = args.text;
  el.className = "${name.toLowerCase()}";
  return el;
};`;

writeFileSync(`${storyDir}/${name}.stories.js`, story);
writeFileSync(`${storyDir}/${name}.js`, component);
writeFileSync(`${storyDir}/${name}.css`, `.${name.toLowerCase()} {}`);

console.log(`Created ${name} story`);