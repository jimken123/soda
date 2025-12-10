(function (Prism) {
  const stepParameterAlias = 'function';
  const entityPropertyAlias = 'punctuation';

  Prism.languages.scl = {
    comment: [
      /#[^\r\n]*/,
      {
        pattern: /\/\*[\s\S]*?\*\//,
        greedy: true,
      },
    ],
    date: {
      pattern: /\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2})/,
      alias: 'number',
    },
    parameterOrProperty: /('[^']+'|"[^"]+"|\b[\w\.-]+)(?=[ \t]*:)/,
    string: [
      {
        pattern: /"""[\s\S]+?"""/,
        greedy: true,
      },
      {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true,
      },
      {
        pattern: /'[\s\S]*?'/,
        greedy: true,
      },
      {
        pattern: /\$"(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\"])*"/,
        greedy: true,
        inside: {
          'string-punctuation': {
            pattern: /^\$"|"$/,
            alias: 'string',
          },
          interpolation: {
            pattern: /\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\{|\}$/,
                alias: 'punctuation',
              },
              rest: Prism.languages.scl,
            },
          },
          string: /[\s\S]+/,
        },
      },
    ],
    sclVariable: {
      pattern: /<[\w-]*>/,
      alias: 'builtin',
    },
    boolean: /true|false/i,
    stepName: {
      pattern: /(^|[ \t(])([A-Za-z]\w+)\b(?![\."']|\s*:)/,
      lookbehind: true,
      alias: 'class-name',
    },
    number: [/-?\d+/, /-?\d*\.\d+([eE][\-+]?\d+)?/],
    operator: [
      /[<>=]=?|!=|&&?|\|\|?|[+\-*\/^%]/,
      {
        pattern: /(?:^[ \t]*)-/gm,
        lookbehind: true,
      },
    ],
    enum: {
      pattern: /\w+\.\w+/,
      alias: 'constant',
    },
    punctuation: [/[{}()[\].,:]/],
  };

  let isStep = function (tokens, position) {
    var token;
    do {
      position++;
      token = tokens[position];
    } while (typeof tokens[position] === 'string' && position < tokens.length);
    return token.type === 'stepName' || (token.type === 'operator' && token.content === '-');
  };

  let walkTokens = function (tokens) {
    let bracketType = [];
    for (var i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (token.type !== 'string') {
        if (token.type === 'punctuation' && token.content === '(') {
          bracketType.push(isStep(tokens, i));
        } else if (token.type === 'punctuation' && token.content === ')') {
          bracketType.pop();
        } else if (token.type === 'parameterOrProperty') {
          if (bracketType.length > 0) {
            if (bracketType[bracketType.length - 1]) {
              tokens[i].type = 'stepParameter';
              tokens[i].alias = stepParameterAlias;
            } else {
              tokens[i].type = 'entityProperty';
              tokens[i].alias = entityPropertyAlias;
            }
          } else {
            tokens[i].type = 'stepParameter';
            tokens[i].alias = stepParameterAlias;
          }
        }
      }
      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'scl') {
      return;
    }
    walkTokens(env.tokens);
  });
})(Prism);
