import React, { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import { getStones } from '../../requests';
import StoneGrid from '../../components/ui/stonegrid/StoneGrid';
import useFormCreator from '../../hooks/UseFormCreator';
import formCreator from '../../utils/formCreator';
import { Form, Button } from 'antd';
import useForm from '../../hooks/useForm';

interface stones {
  startDate: Date;
  name: string;
  _id: string;
  author: {
    role: string;
    _id?: string;
    name: string;
    email: string;
    __v?: number;
  };
  contact: string;
  description: string;
  but: number;
  currentValue: number;
  imageCover: {
    secure_url: string;
    public_id: string;
  };
  images: [
    {
      _id?: string;
      secure_url: string;
      public_id: string;
    }
  ];
  slug: string;
  id: string;
}

export const StoneContainer = () => {
  const initialState = {
    input: '',
    password: '',
  };
  const { handleChange, form, handleReset, selectform, handleSelect } = useForm({ initialState });
  const [data, setData] = useState<stones[]>([]);
  const forms = [
    {
      elementType: 'input',
      elementConfig: {
        label: 'Email',
        name: 'input',
        size: 'default',
        placeholder: 'test',
      },
    },
    {
      elementType: 'password',
      elementConfig: {
        label: 'Password',
        name: 'password',
        placeholder: 'test',
      },
    },
    {
      elementType: 'select',
      elementConfig: {
        label: 'Select',
        name: 'select',
        placeholder: 'test',
        options: [
          { name: 'Choose1', value: '2' },
          { name: 'Choose3', value: '3' },
        ],
      },
    },
  ];

  const { renderForms } = useFormCreator({ forms, handleChange, handleSelect });
  const { ...calls } = useApi({ getStones });

  useEffect(() => {
    calls.getStones.call();
  }, []);
  useEffect(() => {
    if (calls.getStones.data.data?.stones) setData(calls.getStones.data.data?.stones);
  }, [calls.getStones.success]);
  console.log('initial', form, 'select', selectform);
  return (
    <div>
      {data ? <StoneGrid data={data} /> : <h1>No stones yet</h1>}

      {/* {formCreator({
        elementType: 'password',
        elementConfig: {
          label: 'test',
          name: 'name',
        },
        onChange: () => {
          console.log('test');
        },
        value: 'Now',
      })} */}
      <Form name="time_related_controls" labelCol={{ span: 5 }} wrapperCol={{ span: 5 }} layout="horizontal">
        {renderForms}
        <Form.Item wrapperCol={{ span: 8, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
