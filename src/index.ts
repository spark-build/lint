import eslint from './eslint';
import stylelint from './stylelint';
import prettier from './prettier';

type AnyObject = { [k in string]: any }

const defineOptions = <T extends AnyObject>(originOptions: T) => (options: Partial<T>) => {
  const result = {...originOptions} as AnyObject;

  Object.keys(options).forEach(key => {
    if (result[key]) {
      if (Array.isArray(result[key])) {
        result[key] = [...result[key], ...options[key]!]
      } else if (Object.prototype.toString.call(result[key]) === '[object Object]') {
        result[key] = { ...result[key], ...options[key]! }
      }

      return;
    }

    result[key] = options[key]
  })

  return result;
}

export default {
  eslint,
  stylelint,
  prettier,
  defineESLint: defineOptions<typeof eslint & AnyObject>(eslint),
  defineStyleLint: defineOptions<typeof stylelint & AnyObject>(stylelint),
  definePrettier: defineOptions<typeof prettier & AnyObject>(prettier),
}
