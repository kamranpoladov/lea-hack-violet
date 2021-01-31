import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
  Box,
  CardActions,
  Button
} from '@material-ui/core';
import { Host } from '../../../../types';
import { HostTag } from './HostTag';

type HostCardFullProps = {
  host: Host;
  distance: string;
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(1.25),
      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)',
      width: theme.spacing(31),
      paddingLeft: theme.spacing(3),
      marginLeft: theme.spacing(13),
      position: 'relative',
      top: theme.spacing(1.5)
    },
    name: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '19px',
      marginBottom: theme.spacing(1)
    },
    description: {
      color: theme.palette.text.primary,
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '13px',
      overflow: 'hidden',
      marginBottom: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      borderBottom: `0.5px solid ${theme.palette.common.white}`
    },
    tags: {
      marginBottom: theme.spacing(1)
    },
    misc: {
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: '12px'
    },
    actions: {
      backgroundColor: theme.palette.common.white,
      boxShadow: '4px 3px 4px rgba(58, 56, 56, 0.31)',
      borderRadius: '5px',
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.common.white
      }
    }
  })
);

export const HostCardFull = ({ host, distance }: HostCardFullProps) => {
  const styles = useStyles();

  return (
    <Card elevation={1} className={styles.root}>
      <CardContent>
        <Typography className={styles.name}>{host.name}</Typography>
        <Typography className={styles.description}>
          {host.description}
        </Typography>
        <Box className={styles.tags}>
          {host.tags.map((tag, i) => (
            <HostTag key={i} tag={tag} />
          ))}
        </Box>
        <Typography className={styles.misc}>{distance}</Typography>
      </CardContent>
      <CardActions>
        <Button className={styles.actions}>Book</Button>
        <Button className={styles.actions}>Message</Button>
      </CardActions>
    </Card>
  );
};
