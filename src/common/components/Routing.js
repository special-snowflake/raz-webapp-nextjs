import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';

function Routing(props) {
  //type = private || public
  //user = all || cutomer || seller
  const user = useSelector((state) => state.auth.userData);
  const router = useRouter();
  useEffect(() => {
    console.log('isi user', user);
    if (props.type.toLowerCase() === 'public') {
      if (user.token) {
        return router.replace('/');
      }
    } else if (props.type.toLowerCase() === 'private') {
      if (!user.token) {
        toast.warning('Please login before accessing this page');
        return router.replace('/auth');
      } else {
        if (props.user.toLowerCase() === 'all') {
          if (!user.token) {
            toast.warning('Please login before accessing this page');
            return router.replace('/');
          }
        } else if (props.user.toLowerCase() === 'customer') {
          if (user.roles !== '2') {
            toast.warning(`Only customer can access this page`);
            return router.replace('/');
          }
        } else if (props.user.toLowerCase() === 'seller') {
          if (user.roles !== '1') {
            toast.warning(`Only seller can access this page`);
            return router.replace('/');
          }
        }
      }
    }
  }, [props, user, router]);
  return <></>;
}

export default Routing;
