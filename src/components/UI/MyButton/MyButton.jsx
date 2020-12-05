import styles from './MyButton.module.scss';
import Button from '@material-ui/core/Button';
import LoaderIcon from '../../../assets/img/loader.svg';

const MyButton = ({ isLoading, ...props }) => {

    let startIcon;
    if (isLoading) startIcon = <img src={LoaderIcon} alt="loader" className={styles.loader} />;

    return (
        <Button
           {...props}
           disabled={isLoading}
           startIcon={startIcon}
        />
    );
};

export default MyButton;