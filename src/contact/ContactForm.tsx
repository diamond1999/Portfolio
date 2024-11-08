import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  
  const onFinish = async (values: ContactFormValues) => {
    try {
      setLoading(true);
    
      const response = await axios.post('/api/contact', values);
      message.success('Your message has been sent!');
      console.log('Response:', response.data);
    } catch (error) {
      message.error('There was an error sending your message.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="!text-white mt-6 px-4 sm:px-1 md:px-10 lg:px-28">
    <Form
      name="contact_form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      className="!space-y-4 text-white"
    >
      <Form.Item
        label="Name"
        name="name"
        className="!space-y-2 text-white"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item
        label="Subject"
        name="subject"
        rules={[{ required: true, message: 'Please input your subject!' }]}
      >
        <Input placeholder="Enter your subject" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Please input your message!' }]}
      >
        <Input.TextArea rows={4} placeholder="Enter your message" />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          loading={loading}
          style={{ width: '100%' }}
          className="bg-green-400 border-none hover:bg-green-400 hover:text-black active:!bg-green-400 active:!text-black font-medium py-2"
        >
          Send
        </Button>
      </Form.Item>
    </Form>
  </div>
  );
};

export default ContactForm;
