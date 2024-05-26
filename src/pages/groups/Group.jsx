import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, IconButton, Skeleton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles/Group.css';

function Group() {
  const { gid } = useParams();
  const group = {
    name: 'Centro Cultural Nucleo',
    description: 'El Centro Cultural Núcleo, es uno de los centro culturales emblemáticos de la Facultad Nacional de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería de Perú, con más de 30 años formando líderes capaces de gestionar proyectos, realizar investigación y superarse constantemente ha sido y sigue siendo cuna de profesionales destacados en el ámbito laboral, fomentando el desarrollo de capacidades y habilidades diversas se ha logrado quedar muy bien posicionados en concursos de proyectos estudiantiles a nivel nacional e internacional, buscando siempre la excelencia, el Centro Cultural tiene sus puertas abiertas para aquellas personas con ganas de marcar una diferencia significativas y positiva en la sociedad.',
    img: {
      name: 'nombre imagen',
      ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VZxul79EW28Q7kNvgEuJsZ3&_nc_ht=scontent.flim6-4.fna&oh=00_AYBBetv0Jl0B0mIeJzIKLeDZBdoBn57LFVot3dxR_V-OSQ&oe=66557B68'
    },
    status: true,
    linkWhats: 'https://wa.me/',
    linkFace: 'https://www.facebook.com/',
    linkInsta: 'https://www.instagram.com/',
    notice: [{
      name: 'img1',
      ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-6/441585179_757108406634749_2002319250865719910_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kvLBbeoQhdkQ7kNvgFy3jmY&_nc_ht=scontent.flim6-4.fna&oh=00_AYBhwlHDZB4ezg1b1aR-4gaBmnQTtVSFhNf_VrK5JF0Eqg&oe=66558149'
    }, {
      name: 'img2',
      ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-6/442492704_847073144114780_2319793103895837386_n.jpg?stp=dst-jpg_p526x296&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=c0PJaMDtiTsQ7kNvgEFGhCt&_nc_ht=scontent.flim6-4.fna&oh=00_AYC_6o_3K3DxQ3bp9j84Lsw4UEHOHa3wjdAe__ZvTJfJ6w&oe=66558826'
    }, {
      name: 'img3',
      ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-6/442441131_849146753907419_5749921624367541298_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jrb_nSwSmxcQ7kNvgEThAai&_nc_ht=scontent.flim6-4.fna&oh=00_AYCr0CAiy897sL-ZYVSYTagNEi2JZBRMmNzXtOZJ0-YYbg&oe=66557CCA'
    }]
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <section id='group-page' className='group-page'>
      <div className='container-group'>
        {loading ? (
          <>
            <Box>
              <Skeleton variant="text" width={"20vh"} height={80} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Skeleton variant="text" width={"60vh"} height={40} />
              <Box sx={{ display: 'flex', gap: '2rem' }}>
                <Skeleton variant="text" width={100} height={40} />
                <Skeleton variant="text" width={100} height={40} />
                <Skeleton variant="text" width={100} height={40} />
              </Box>
            </Box>
            <Skeleton sx={{ margin: 'auto' }} variant="rectangular" width={200} height={200} />
          </>
        ) : (
          <>
            <div className='group-info'>
              <h1>{group.name}</h1>
              <p className='description-group'>{group.description}</p>
              <div className='group-buttons'>
                <Button
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                  href={group.linkWhats}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: '#25d366',
                    mr: 1,
                    '&:hover': {
                      backgroundColor: '#25d366',
                      boxShadow:'1px 1px 10px #111', 
                    },
                  }}
                >
                  WhatsApp
                </Button>
                <Button
                  variant="contained"
                  startIcon={<FacebookIcon />}
                  href={group.linkFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: '#1877f2', 
                    mr: 1, 
                    '&:hover': {
                      boxShadow:'1px 1px 10px #111',  
                    },
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="contained"
                  startIcon={<InstagramIcon />}
                  href={group.linkInsta}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundImage: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                    '&:hover': {
                      boxShadow:'1px 1px 10px #111',  
                    },
                  }}
                >
                  Instagram
                </Button>
              </div>
            </div>
            <div className='group-img'>
              <img src={group.img.ref} alt={group.img.name} />
            </div>
          </>
        )}
      </div>
      {group.notice.length !== 0 && (
        <div className='container-notice'>
          <h2>Noticias</h2>
          <div className="notice-imgs">
            {group.notice.map((notice, index) => (
              <img
                key={index}
                src={notice.ref}
                alt={notice.name}
                onClick={() => setSelectedImage(notice.ref)}
              />
            ))}
          </div>
        </div>
      )}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Noticia" />
        </div>
      )}
    </section>
  );
}

export default Group;
