import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import moment from 'moment';

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const localizer = momentLocalizer(moment);

const initialEvents: Event[] = [
  { id: 1, title: 'Event 1', start: new Date('2023-12-01'), end: new Date('2023-12-01') },
  { id: 2, title: 'Event 2', start: new Date('2023-12-05'), end: new Date('2023-12-05') },
  // Add more initial events as needed
];

const Events = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [eventId, setEventId] = useState<number | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setDialogOpen(true);
    // Clear eventId when a new date is selected
    setEventId(null);
  };

  const handleEventAdd = () => {
    if (selectedDate && eventTitle) {
      const newEvent: Event = {
        id: events.length + 1,
        title: eventTitle,
        start: selectedDate,
        end: selectedDate,
      };
      setEvents([...events, newEvent]);
      setDialogOpen(false);
    }
  };

  const handleEventEdit = () => {
    if (selectedDate && eventTitle && eventId !== null) {
      const updatedEvents = events.map((event) =>
        event.id === eventId ? { ...event, title: eventTitle, start: selectedDate, end: selectedDate } : event
      );
      setEvents(updatedEvents);
      setDialogOpen(false);
      // Clear eventId after editing
      setEventId(null);
    }
  };

  const handleEventDelete = () => {
    if (eventId !== null) {
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
      setDialogOpen(false);
      // Clear eventId after deletion
      setEventId(null);
    }
  };

  const eventStyleGetter = (event: Event) => {
    const style = {
      backgroundColor: '#3174ad',
      borderRadius: '5px',
      color: 'white',
      border: 'none',
    };
    return {
      style,
    };
  };

  return (
    <article className='card p-5 m-5 shadow' style={{ height: 800, width: '90%' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        selectable
        onSelectSlot={(slotInfo: any) => handleDateClick(slotInfo.start as Date)}
        eventPropGetter={eventStyleGetter}
        onSelectEvent={(event: Event) => {
          setSelectedDate(event.start);
          setEventTitle(event.title);
          setEventId(event.id);
          setDialogOpen(true);
        }}
      />
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>{eventId !== null ? 'Edit Event' : 'Add Event'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={eventId !== null ? handleEventEdit : handleEventAdd} variant="contained">
            {eventId !== null ? 'Edit' : 'Add'}
          </Button>
          {eventId !== null && (
            <Button onClick={handleEventDelete} color="error">
              Delete
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </article>
  );
};

export default Events;


