/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    html: '',
    build: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.ts', '.tsx');

  const rules = config.module!.rules as RuleSetRule[];

  config.module!.rules = rules?.map((rule: RuleSetRule) => {
    // eslint-disable-next-line @typescript-eslint/prefer-includes
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module!.rules.push(buildCssLoader(true));

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
      __API__: JSON.stringify(''),
    })
  );

  return config;
};
