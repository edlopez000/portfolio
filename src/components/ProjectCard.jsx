import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Grid,
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
        <CardContent>
          <Grid spacing={5}>
            <Grid item>
              <Typography fontWeight={'bold'} gutterBottom textAlign="center">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={'auto'}>
              <Typography variant="caption">{description}</Typography>
            </Grid>
            <Grid item>
              <CardActions>
                <Button size="small" variant="outlined" onClick={handleOpen}>
                  <Typography variant="caption">Learn More</Typography>
                </Button>
              </CardActions>
            </Grid>
          </Grid>
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
