import styles from './UserCard.module.scss';
import dateFormat from 'dateformat';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';


const UserCard = ({
    profileImgLarge,
    profileImgThumbnail,
    firstName,
    lastName,
    email,
    phone,
    dob,
    age,
    location,
}) => {

    const birthday = dateFormat(dob, "dddd, mmmm dS, yyyy");

    return (
        <Card className={styles.userCard}>
            <div className={styles.CardHover} >
                <Typography variant="button" display="block" gutterBottom className={styles.CardHover__text}>
                    birthday - {birthday}
                </Typography>

                <Typography variant="button" display="block" gutterBottom className={styles.CardHover__text}>
                    location - {location.city} / {location.street.name} / {location.street.number}
                </Typography>
            </div>

            <CardMedia
                className={styles.userCard__media}
                image={profileImgLarge}
                title={`${firstName} ${lastName}`}
            />

            <CardContent>
                <List className={styles.userCard__info} disablePadding>
                    <ListItem disableGutters className={styles.userCard__infoItem}>
                        <ListItemAvatar className={styles.icon}>
                            <Avatar src={profileImgThumbnail} alt={`${firstName} ${lastName}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={`${firstName} ${lastName}`}
                            secondary={`${age} years`}
                            primaryTypographyProps={{
                                variant: "h5",
                                component: "h2"
                            }}
                        />
                    </ListItem>

                    <ListItem disableGutters className={styles.userCard__infoItem}>
                        <ListItemIcon className={styles.icon}>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={email}
                            secondary="Email"
                            primaryTypographyProps={{ noWrap: false, styles: { whiteSpace: 'normal' } }}
                        />
                    </ListItem>

                    <ListItem disableGutters className={styles.userCard__infoItem}>
                        <ListItemIcon className={styles.icon}>
                            <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={phone} secondary="Phone" />
                    </ListItem>

                </List>
            </CardContent>
        </Card>
    );
}

export default UserCard;