import { useMockHosts } from './hooks';
import { Box } from '@material-ui/core';
import { HostCard } from './components';

export const HostsList = () => {
  const hosts = useMockHosts(10);

  return (
    <Box>
      {hosts.map((host, i) => (
        <HostCard key={i} host={host} />
      ))}
    </Box>
  );
};
