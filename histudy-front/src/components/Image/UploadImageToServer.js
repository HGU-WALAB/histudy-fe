import { useCallback, useRef, useState } from "react";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { getValue } from "@testing-library/user-event/dist/utils";
import { storage } from "../../Firebase/firebase";

import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { importCourses } from "../../apis/course";
import Heic2Jpg from "./Heic2Jpg";
import compressedFile from "./compressFile";
import PreviewImage from "./PreviewImage";

export function ImageUploadToServer({ setValue, getValues }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const onImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files;
    if (!file) return null;

    const convertedFile = await Heic2Jpg(file[0]);

    const lowCapacityFile = await compressedFile(convertedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setValue("previewImages", [...getValues("previewImages"), reader.result]);
    };
    reader.readAsDataURL(file[0]);

    setValue("blobImages", [...getValues("blobImages"), lowCapacityFile]);
  };

  return (
    <>
      <Button
        onClick={onUploadImageButtonClick}
        variant="outlined"
        sx={{
          backgroundColor: "background.default",
          borderColor: "primary.main",
          color: "primary.main",
          fontWeight: "normal",
          mt: "20px",
        }}
      >
        인증샷 업로드
      </Button>

      {previewUrl && <img src={previewUrl} alt="Preview" />}
      <input
        hidden
        type="file"
        // accept="image/*"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif"
        ref={inputRef}
        onChange={onImageChange}
      />
      <Box sx={{ display: "flex" }}>
        <ImageList sx={{ width: "1000px" }} cols={2}>
          <PreviewImage
            getValues={getValues}
            setValue={setValue}
            state="images"
          />
          <PreviewImage
            getValues={getValues}
            setValue={setValue}
            state="previewImages"
          />
        </ImageList>
      </Box>
    </>
  );
}
