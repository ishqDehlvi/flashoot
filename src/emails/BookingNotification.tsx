import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface BookingNotificationEmailProps {
  bookingData: {
    name: string;
    phone: string;
    date: string;
    time: string;
    location: string;
  };
}

export const BookingNotificationEmail = ({
  bookingData,
}: BookingNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Booking Request from {bookingData.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Booking Request</Heading>
          <Section style={section}>
            <Text style={text}>
              A new booking request has been submitted through the website.
            </Text>
            <Text style={text}>
              <strong>Name:</strong> {bookingData.name}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {bookingData.phone}
            </Text>
            <Text style={text}>
              <strong>Date:</strong> {bookingData.date}
            </Text>
            <Text style={text}>
              <strong>Time:</strong> {bookingData.time}
            </Text>
            <Text style={text}>
              <strong>Location:</strong> {bookingData.location}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '8px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
  textAlign: 'center' as const,
};

const text = {
  color: '#333',
  fontSize: '16px',
  margin: '12px 0',
};

export default BookingNotificationEmail; 