import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { globalStyles } from '../styles/global'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const StatsCard = ({ stat }) => (
    <Card style={{ margin: 3 }}>
        <Card.Title title={stat.subjectName} />
        <Card.Content style={{ elevation: 4 }}>
            <Paragraph >first Grade :{stat.firstGrade}</Paragraph>
            <Paragraph>second Grade :{stat.secondGrade}</Paragraph>
            <Paragraph>final Grade :{stat.finalGrade}</Paragraph>
        </Card.Content>
    </Card>
);

export default StatsCard;