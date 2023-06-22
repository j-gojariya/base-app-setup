import { Form, Input } from 'antd';
import { memo } from 'react';

function FormItemsFeild({ name }) {
  return (
    <Form.Item
      label="Label"
      name={name}
      rules={[
        {
          required: true,
          message: 'Required!',
        },
      ]}
    >
      <Input placeholder="Enter Label" />
    </Form.Item>
  );
}

export default memo(FormItemsFeild);
