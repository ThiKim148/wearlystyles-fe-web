export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'jira-key-in-scope': (parsed) => {
          const { scope } = parsed;
          const jiraRegex = /^-V-FE-\d+$/;
          if (!scope) {
            return [
              false,
              'Commit must have Jira Key in scope (VD: feat(V-FE-123): ...)',
            ];
          }
          if (!jiraRegex.test(scope)) {
            return [
              false,
              `Scope "${scope}" is invalid format. There must be a Jira Key (VD: V-FE-123)`,
            ];
          }

          return [true];
        },
      },
    },
  ],

  rules: {
    'scope-case': [0],
    'scope-empty': [2, 'never'],
    'jira-key-in-scope': [2, 'always'],
  },
};
