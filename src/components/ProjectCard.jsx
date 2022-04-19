import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

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
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <CardMedia component="img" image="https://placehold.jp/200x200.png" />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexGrow: 1,
            flexDirection: 'column',
          }}
        >
          <Typography fontWeight={'bold'} gutterBottom textAlign="center">
            {title}
          </Typography>
          <Typography variant="caption">{description}</Typography>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
          <Box display={'flex'} justifyContent={'end'} mr={1} mt={1}>
            <IconButton onClick={handleClose}>
              <CloseIcon color={'black'} />
            </IconButton>
          </Box>
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
