import style from 'src/common/styles/LoadingBox.module.css';

function LoadingCircle() {
  return (
    <>
      <div className='mx-auto my-5'>
        <div className={style['lds-grid']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default LoadingCircle;
