import React, { useEffect } from 'react';
import { Modal, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import deleteDonation from '../../redux/Donations/deleteDonation';
import axios from 'axios';
const { confirm } = Modal;

const DeleteDonation = (props?: any) => {
  const redux = useSelector((state: any) => state);
  const dispatch = useDispatch();

  let data = props.data;

  function showDeleteConfirm() {
    let x = localStorage.getItem('token');
    console.log('token', data.author._id);
    confirm({
      title: 'Are you sure delete this task?',
      //   icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // dispatch(deleteDonation.deleteDonationRequest({data}));
        console.log("payload1",data.author._id);
        axios
          .delete(`https://hopeigc-api.herokuapp.com/api/v1/donations/${data._id}`, {
            headers: {
              token: `Bearer ${x}`,
              
            },
            data: {
              author:  data.author._id,
            },
          })

          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log("payload",data.author._id);
          });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <div>
      <Button onClick={showDeleteConfirm} type="dashed">
        Delete
      </Button>
    </div>
  );
};
export default DeleteDonation;
