import { Box, Modal, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { isShowFullImageState } from "../../store/atom";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function FullImageComponent({ fullImageUrl }) {
  const [isShowFullImage, setIsShowFullImage] =
    useRecoilState(isShowFullImageState);

  const handleClose = () => setIsShowFullImage(false);
  return (
    <Modal
      open={isShowFullImage}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="img" src={fullImageUrl} sx={style} />
    </Modal>
  );
}

const FullImage = React.memo(FullImageComponent);

export default FullImage;
