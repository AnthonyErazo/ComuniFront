import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Box, useMediaQuery, Stack, Pagination, Skeleton, Modal, Typography, Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

function AllGroups() {
  const isBelow1400px = useMediaQuery('(max-width:1400px)');
  const isBelow1300px = useMediaQuery('(max-width:1300px)');
  const isBelow1050px = useMediaQuery('(max-width:1050px)');
  const isBelow750px = useMediaQuery('(max-width:750px)');
  const isBelow500px = useMediaQuery('(max-width:500px)');

  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [width, setWidth] = useState('100%');
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const groups = [
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } },
    { name: 'Centro Cultural Nucleo', img: { name: 'img', ref: 'https://via.placeholder.com/150' } }
  ];

  const handleOpenModal = (group) => {
    setSelectedGroup(group);
    setWidth('100.9%')
    setOpenModal(true);
  };

  const getCols = () => {
    if (isBelow750px) return 1;
    if (isBelow1050px) return 2;
    if (isBelow1300px) return 3;
    return 4;
  };

  const getPadding = () => {
  let gapValue;
  if (isBelow500px) {
    gapValue = 20;
    return { padding: '2rem', gap: gapValue };
  }
  if (isBelow1400px) {
    gapValue = 20;
    return { padding: '5rem', gap: gapValue };
  }
  gapValue = 30;
  return { padding: '6rem', gap: gapValue };
};


  const { padding, gap } = getPadding();

  return (
    <section id='all-groups'>
      <Box sx={{position:'relative', width:`100%`,gap: '4rem', background: '#fff', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: `7rem ${padding}`, minHeight: '94vh' }}>
        <Stack>
          <Pagination count={10} shape="rounded" />
        </Stack>
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="masonry" cols={getCols()} gap={gap}>
          {loading ? (
            Array.from(new Array(8)).map((_, index) => (
              <ImageListItem key={index}>
                <Skeleton variant="rectangular" width="100%" height={300} />
                <Skeleton width="60%" height={30} />
              </ImageListItem>
            ))
          ) : (
            groups.map((group, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${group.img.ref}`}
                  alt={group.img.name}
                  loading="lazy"
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
                />
                <ImageListItemBar
                  title={group.name}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${group.name}`}
                      onClick={() => handleOpenModal(group)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))
          )}
        </ImageList>
      </Box>
    </section>
  );
}

export default AllGroups;
