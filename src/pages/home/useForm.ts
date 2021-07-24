import { useCallback } from 'react';
import { useRepositoriesQuery } from 'graphql/generate';

export const PER_PAGE = 5;
export const VARIABLES = {
  first: 5,
  after: null,
  last: null,
  before: null,
  query: 'apollo graphql test',
};

export const useForm = () => {
  const { data, loading, error, fetchMore } = useRepositoriesQuery({
    variables: VARIABLES,
  });

  const repositories = data?.search.edges;
  const pageInfo = data?.search.pageInfo;

  const nextPage = useCallback(() => {
    fetchMore({
      variables: {
        first: 5,
        after: pageInfo?.endCursor,
        last: null,
        before: null,
      },
    });
  }, [fetchMore, pageInfo?.endCursor]);

  const prevPage = useCallback(() => {
    fetchMore({
      variables: {
        first: null,
        after: null,
        last: 5,
        before: pageInfo?.startCursor,
      },
    });
  }, [fetchMore, pageInfo?.startCursor]);

  return { loading, error, repositories, pageInfo, prevPage, nextPage };
};
