import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import Fade from '@mui/material/Fade';

export default function TransitionsModal({ open, onClose }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: StyledBackdrop }}
    >
      <Fade in={open}>
        <ModalContent sx={style}>
          <h2 id="transition-modal-title" className="modal-title">
            Transparencia sobre el manejo de la información en nuestra plataforma.
          </h2>
          <p id="transition-modal-description" className="modal-description">
            Nos tomamos muy en serio la privacidad y la sensibilidad de la información que recopilamos. Aunque los datos que ingresas no son personales según las definiciones del GDPR (es decir, no pueden ser utilizados para identificarte), entendemos que se trata de información delicada relacionada con personas en riesgo o diagnosticadas con vih.

            Nuestra prioridad es proteger esta información con los más altos estándares de seguridad y uso ético. Solo la utilizamos para mejor entender vih y las personas que afecta. Nunca compartimos, vendemos ni utilizamos los datos para identificar a ninguna persona.

            Estamos comprometidos con la transparencia y construyendo confianza. Si tienes preguntas sobre cómo manejamos esta información, no dudes en contactarnos.
            </p>
            <p>Email: <a id="anchorEmail" href="mailto:info@felgtbi.org">info@felgtbi.org</a></p>
            
          
          <button onClick={onClose} style={{ marginTop: "20px", cursor: "pointer" }}>
            Cerrar
          </button>
        </ModalContent>
      </Fade>
    </Modal>
  );
}

TransitionsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Estilos del modal y backdrop
const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled('div')`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

const ModalContent = styled('div')(
  ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    background-color: ${theme.palette.mode === 'dark' ? '#1C2025' : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#DAE2ED'};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? '#F3F6F9' : '#1C2025'};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      margin-bottom: 4px;
    }
  `,
);
