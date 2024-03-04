import { classNames } from 'shared/config/lib/classNames/classNames';
import cls from './Applink.module.scss';

interface ApplinkProps {
  className?: string;
}

const Applink: React.FC<ApplinkProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Applink, {}, [className])}>
    </div>
  );
};

export default Applink;