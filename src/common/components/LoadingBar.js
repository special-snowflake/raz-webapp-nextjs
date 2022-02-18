import style from 'src/common/styles/LoadingBar.module.css';
function LoadingBar() {
  return (
    <>
      <div className={style['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default LoadingBar;
