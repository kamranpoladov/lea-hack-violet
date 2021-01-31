import { Host } from '../../../../types';
import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Collapse,
  Box
} from '@material-ui/core';
import { useCalculateDistance } from '../hooks';
import { useState } from 'react';
import { HostCardOverview } from './HostCardOverview';
import { HostCardFull } from './HostCardFull';
import { useRandomProfilePicture } from '../hooks/useRandomProfilePicture';

type HostCardProps = {
  host: Host;
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      margin: theme.spacing(6),
      width: 'fit-content'
    },
    profile: {
      width: '130px',
      height: '110px',
      backgroundColor: '#BED7AA',
      position: 'absolute',
      borderRadius: '10px',
      zIndex: 1,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center'
    }
  })
);

export const HostCard = ({ host }: HostCardProps) => {
  const styles = useStyles();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const distance = useCalculateDistance(host.location);

  const HostProfileIcon = useRandomProfilePicture();

  const handleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  if (!distance) return null;

  return (
    <Box className={styles.root}>
      <Card className={styles.profile} onClick={handleCollapse}>
        <CardContent>
          <HostProfileIcon />
        </CardContent>
      </Card>
      <Collapse in={!isCollapsed}>
        <HostCardOverview
          name={host.name}
          description={host.description}
          distance={distance}
        />
      </Collapse>
      <Collapse in={isCollapsed}>
        <HostCardFull host={host} distance={distance} />
      </Collapse>
    </Box>
  );
};
