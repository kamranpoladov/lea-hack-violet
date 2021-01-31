import { useMockHosts } from './hooks';
import {
  Card,
  CardHeader,
  createStyles,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { HostCard } from './components';

const useStyles = makeStyles(() =>
  createStyles({
    root: {}
  })
);

export const HostsList = () => {
  const styles = useStyles();
  const hosts = useMockHosts(10);

  if (!hosts) return null;

  return (
    <Card elevation={1} className={styles.root}>
      <CardHeader
        action={
          <IconButton>
            <FilterList />
          </IconButton>
        }
      />
      {hosts.map((host, i) => (
        <HostCard key={i} host={host} />
      ))}
    </Card>
  );
};
