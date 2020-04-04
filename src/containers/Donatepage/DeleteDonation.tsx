import React, { useEffect } from 'react';
import { Modal, Button } from 'antd';
import deleteDonationAction from '../../redux/Donations/deleteDonation';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {DeleteOutlined} from '@ant-design/icons';

const { confirm } = Modal;

const DeleteDonation = (props?: any) => {
  let history = useHistory();
  function showDeleteConfirm() {
    let x = localStorage.getItem('token');
    console.log('token', props.data._id);
    confirm({
      title: 'Are you sure delete this task?',
      //   icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        // dispatch(deleteDonationAction.deleteDonationRequest({ data: props.data._id }));
        axios
          .delete(`https://hopeigc-api.herokuapp.com/api/v1/donations/${props.data._id}`, {
            headers: {
              Authorization: `Bearer ${x}`,
            },
            data: { author: props.data.author._id },
          })

          .then(function(response) {
            console.log(response);
            history.push("/dontations");
          })
          .catch(function(error) {
            console.log('payload', props.data.author._id);
          });
          
      },
      onCancel() {
       
      },
    });
  }
  return (
    <div>
      <Button onClick={showDeleteConfirm}   icon={<DeleteOutlined />} danger>
        Delete
      </Button>
    </div>
  );
};
export default DeleteDonation;
