import {
  useQuery,
  type QueryKey,
  type QueryFunction,
  type UseQueryOptions,
  type QueryObserverSuccessResult,
} from '@tanstack/react-query'

// error-boundary와 suspense를 함께 사용할 때, data가 항상 존재한다고 가정합니다.
const useSuspendedQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'suspense'
  >
) => {
  return useQuery(queryKey, queryFn, {
    ...options,
    suspense: true,
  }) as QueryObserverSuccessResult<TData, TError>
}

export default useSuspendedQuery
