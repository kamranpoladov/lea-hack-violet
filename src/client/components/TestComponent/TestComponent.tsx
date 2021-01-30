import { useGetTest } from '../../services';

export const TestComponent = () => {
  const { data: test, isFetching } = useGetTest();

  if (!test || isFetching) return null;

  return <div>{`field1: ${test.field1}, field2: ${test.field2}`}</div>;
};
