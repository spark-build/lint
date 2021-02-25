import { prompt } from 'inquirer'

export const getConfigByUserSelected = () =>
  prompt([
    {
      name: 'create',
      type: 'list',
      message: 'choose how to create:',
      choices: [
        {
          name: 'all',
          value: 'all',
          description:
            'Create all lint configuration files (.eslintrc.js、.prettierrc.js、.stylelintrc.js)',
        },
        {
          name: 'custom',
          value: 'custom',
          description: 'custom selection to create lint file',
        },
      ],
    },
    {
      when: (answers) => answers.create.includes('custom'),
      name: 'selectCreateFile',
      message: 'Select the lint configuration file to be created:',
      type: 'checkbox',
      choices: [
        {
          name: 'eslint',
          value: 'eslint',
          checked: true,
        },
        {
          name: 'prettier',
          value: 'prettier',
          checked: true,
        },
        {
          name: 'stylelint',
          value: 'stylelint',
          checked: true,
        },
      ],
    },
  ])
