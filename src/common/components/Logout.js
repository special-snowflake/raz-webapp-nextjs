import {useEffect, useState} from 'react';
import {Modal} from 'react-bootstrap';
import {connect, useDispatch, useSelector} from 'react-redux';

import {logoutAction} from 'src/store/actions/auth';

import modalsCss from 'src/common/styles/Modals.module.css';
import {useRouter} from 'next/router';

import {toast} from 'react-toastify';

function Logout(props) {
  const [isShow, setIsShow] = useState(props.isShow);
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const router = useRouter();

  const hanndleLogout = () => {
    dispatch(logoutAction(user.token));
    toast.success('Logout Success');
    router.replace('/');
  };
  useEffect(() => {
    setIsShow(props.isShow);
  }, [props]);
  return (
    <div>
      <Modal show={isShow}>
        <Modal.Header>
          <p className={modalsCss['header']}>Logout</p>
          <button
            type='button'
            className={`${modalsCss['close-btn']}`}
            data-bs-dismiss='modal'
            aria-label='close'
            onClick={() => {
              setIsShow(false);
              props.callbackShow(false);
            }}></button>
        </Modal.Header>
        <Modal.Body>
          <p className='color-grey text-center font-normal'>
            Are you sure you want to Logout?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`btn ${modalsCss['btn-black']} float-start`}
            onClick={hanndleLogout}>
            Logout
          </button>
          
          <button
            onClick={() => {
              setIsShow(false);
              props.callbackShow(false);
            }}
            className={`btn ${modalsCss['btn-gray']}`}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Logout);
