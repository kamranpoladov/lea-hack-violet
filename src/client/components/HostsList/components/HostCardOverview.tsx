import {
  makeStyles,
  createStyles,
  Card,
  CardContent,
  Typography,
  Box
} from '@material-ui/core';

type HostCardOverviewProps = {
  name: string;
  description: string;
  distance: string;
};

const useStyles = makeStyles(theme =>
  createStyles({
    overview: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.spacing(1.25),
      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)',
      width: theme.spacing(31),
      height: theme.spacing(11),
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
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '13px',
      overflow: 'hidden',
      marginBottom: '13px'
    },
    cardFooter: {},
    distance: {
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: '12px'
    }
  })
);

export const HostCardOverview = ({
  name,
  description,
  distance
}: HostCardOverviewProps) => {
  const styles = useStyles();
  return (
    <Card elevation={1} className={styles.overview}>
      <CardContent>
        <Typography className={styles.name}>{name}</Typography>
        <Typography noWrap className={styles.description}>
          {description}
        </Typography>
        <Box className={styles.cardFooter}>
          <Typography className={styles.distance}>{distance}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
