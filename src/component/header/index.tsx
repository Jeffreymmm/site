import styles from './index.less';

export default function HeaderPage(props:any) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}
