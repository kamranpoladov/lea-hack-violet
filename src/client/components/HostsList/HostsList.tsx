import { useMockHosts } from './hooks';

export const HostsList = () => {
  const hosts = useMockHosts();

  return (
    <div>
      {hosts.map((host, i) => (
        <div key={i}>
          <p>Name: {host.name}</p>
          <p>Description: {host.description}</p>
          <p>Tags: {host.tags.map(tag => tag.toString() + ' ')}</p>
          <br />
        </div>
      ))}
    </div>
  );
};
