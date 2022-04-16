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
import PortfolioModal from './PortfolioModal';
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectCard({
  title = 'Title',
  description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Button size="small" variant="outlined" onClick={handleOpen}>
            <Typography variant="caption">Learn More</Typography>
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{ margin: 1, overflow: 'scroll' }}
          >
            <Box display={'flex'} justifyContent={'end'}>
              <IconButton onClick={handleClose}>
                <CloseIcon color={'black'} />
              </IconButton>
            </Box>
            <Container>
              <PortfolioModal />
            </Container>
          </Dialog>
        </CardActions>
      </CardContent>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
