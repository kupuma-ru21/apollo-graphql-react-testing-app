import Home from '../pages/home';
import { RepositoriesDocument } from '../graphql/generate';
import { wrapMockedProvider } from './wrapMockedProvider';

const mock = {
  request: {
    query: RepositoriesDocument,
    variables: {
      after: null,
      before: null,
      first: 5,
      last: null,
      query: 'apollo graphql test',
    },
  },
  result: {
    data: {
      search: {
        edges: [
          {
            cursor: 'Y3Vyc29yOjE=',
            node: { name: 'apollo-storybook-decorator' },
          },
        ],
        pageInfo: {
          endCursor: 'Y3Vyc29yOjU=',
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: 'Y3Vyc29yOjE=',
        },
        repositoryCount: 411,
      },
    },
  },
};

const testRender = () => wrapMockedProvider({ ui: <Home />, mocks: [mock] });

describe('Home', () => {
  test('Home test', async () => {
    const { findByTestId } = testRender();
    const targetTestId = await findByTestId('hoge');
    expect(targetTestId).not.toBe(null);
  });
});
