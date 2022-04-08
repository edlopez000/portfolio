import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

export default function ProjectCard({
  title = 'Title',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        margin: 1,
        maxWidth: 200,
        boxShadow: 2,
      }}
    >
      <CardMedia component="img" image="https://placehold.jp/200x200.png" />
      <CardContent>
        <Typography
          fontWeight={'bold'}
          gutterBottom
          variant="h6"
          textAlign="center"
        >
          {title}
        </Typography>
        <Typography variant="caption">{description}</Typography>
        <CardActions sx={{ justifyContent: 'center', alignItems: 'end' }}>
          <Button size="small" variant="outlined">
            <Typography variant="caption">Learn More</Typography>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
