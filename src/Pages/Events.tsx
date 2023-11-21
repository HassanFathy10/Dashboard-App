import React, { useState } from 'react';
import { Calendar, Modal, Form, Input, Button} from 'antd';

const { TextArea } = Input;

export default function Events() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onPanelChange = (value: any | Date, mode: string) => {
    console.log(value instanceof Date ? value.toISOString().split('T')[0] : value.format('YYYY-MM-DD'), mode);
  };

  const dateCellRender = (value: any | Date) => {
    // Your custom date cell render logic
    return (
      <div className="custom-date-cell" onClick={() => handleDateClick(value)}>
        {value instanceof Date ? value.getDate() : value.date()}
      </div>
    );
  };

  const handleDateClick = (value: Date) => {
    setSelectedDate(value);
    showModal();
  };

  const onSelect = (value: any | Date, selectInfo: any) => {
    console.log(value instanceof Date ? value.toISOString().split('T')[0] : value.format('YYYY-MM-DD'), selectInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Handle the event submission logic here
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <article className='card rounded-5 p-4 m-5 col-lg-10'>
<Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender} onSelect={onSelect as any} />

      <Modal title="Add Event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
          <Form.Item label="Event Date">
            <Input value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''} disabled />
          </Form.Item>
          <Form.Item label="Event Title" name="eventTitle" rules={[{ required: true, message: 'Please input the event title!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Event Description" name="eventDescription">
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={handleOk}>
              Add Event
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </article>
  );
}