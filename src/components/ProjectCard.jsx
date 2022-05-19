import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function ProjectCard({
  title = 'Title',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  project,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          margin: 1,
          maxWidth: 200,
          boxShadow: 2,
        }}
      >
        <CardMedia component="img" image="https://placehold.jp/200x200.png" />
        <CardContent
          sx={{
            display: 'flex',
            minHeight: 200,
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Typography fontWeight={'bold'} gutterBottom textAlign="center">
            {title}
          </Typography>
          <Typography variant="caption" flexGrow={3}>
            {description}
          </Typography>
          <CardActions
            sx={{
              justifyContent: 'center',
              flexGrow: 1,
              marginTop: 'auto',
            }}
          >
            <Button size="small" variant="outlined" onClick={handleOpen}>
              <Typography variant="caption">Learn More</Typography>
            </Button>
          </CardActions>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <Container>
          <Stack direction={'row'} justifyContent={'space-between'} mt={5}>
            <Typography variant="h4">{title}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon color={'black'} />
            </IconButton>
          </Stack>
          {project}
        </Container>
      </Dialog>
    </>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  project: PropTypes.element,
};
