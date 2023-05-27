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
import ClearIcon from "@mui/icons-material/Clear";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import compressedFile from "./compressFile";
import { importCourses } from "../../apis/course";
// import CompressedFile from "./compressFile";

// interface IProps {
//   imageURLList: string[] | [];
//   setImageURLList: React.Dispatch<React.SetStateAction<string[] | []>>;
// }

export function ImageUpload({ setValue, getValues }) {
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

    const selectedFile = await compressedFile(file[0]);

    const storageRef = ref(storage, `files/${file[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        switch (error.code) {
          case "storage/canceld":
            alert("Upload has been canceled");
            break;
        }
      },
      () => {
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File available at", downloadURL);

          //   setImageURL(downloadURL);
          const prev = getValues("images");
          setValue("images", [...prev, downloadURL]);
        });
      }
    );
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

      <input
        hidden
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={onImageChange}
      />
      <Box sx={{ display: "flex" }}>
        <ImageList sx={{ width: "1000px" }} cols={5}>
          {getValues("images")?.map((imageUrl, index) => (
            <ImageListItem
              sx={{ position: "relative", mt: "20px", mr: "20px" }}
              key={index}
            >
              <img src={imageUrl} loading="lazy" alt={imageUrl} />
              <IconButton
                onClick={() => {
                  const prev = getValues("images");
                  setValue("images", [
                    ...prev.slice(0, index),
                    ...prev.slice(index + 1),
                  ]);
                  // setPosterUploadList((prev) => [...prev, prev.length]);
                }}
                sx={{
                  position: "absolute",
                  right: "0",
                  color: "black",
                }}
                aria-label={`star`}
              >
                <ClearIcon />
              </IconButton>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
}
