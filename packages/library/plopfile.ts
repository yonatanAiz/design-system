import { NodePlopAPI } from 'plop';

export default function plopGenerator(plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{name}}',
        base: 'plop-templates/component',
        templateFiles: 'plop-templates/component/*.hbs',
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        transform(template, data) {
          const capitalize = (str: string) =>
            str.charAt(0).toUpperCase() + str.slice(1);
          return template + `export * from './${capitalize(data.name)}';\n`;
        },
      },
    ],
  });
}
