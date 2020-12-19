import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StatsCard = ({ stat }) => (
    <Card>
        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} /> */}
        <Card.Content>
            <Title>{stat.subjectName}</Title>
            <Paragraph>first Grade :{stat.firstGrade}</Paragraph>
            <Paragraph>second Grade :{stat.secondGrade}</Paragraph>
            <Paragraph>final Grade :{stat.finalGrade}</Paragraph>
        </Card.Content>
    </Card>
);

export default StatsCard;