import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import PostBox from "../../components/common/PostBox";
import LongButton from "../../components/common/LongButton";
import RoundButton from "../../components/common/RoundButton";

import { useEffect, useState } from "react";

import PostMember from "../../components/Post/PostMember";
import { useForm, Controller, set } from "react-hook-form";
import PostStudyTime from "../../components/Post/PostStudyTime";
import { ImageUpload } from "../../components/Image/UploadImage";
import { modifyReport, postReport } from "../../apis/report";
import PostCourses from "../../components/Post/PostCourses";
import { teamCourses } from "../../apis/course";
import { CodeModal } from "../../components/Post/CodeModal";
import { useRecoilState } from "recoil";
import { isCodeModalState } from "../../store/atom";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../../components/common/Title";
import { StyledColumnAlignLayout } from "../../components/common/StyledLayout";
import { ImageUploadToServer } from "../../components/Image/UploadImageToServer";
import { ImageUploadApi } from "../../apis/rank";

export default function Post({ children }) {
  const { state } = useLocation();
  console.log(state);

  const [isCodeModal, setIsCodeModal] = useState(false);

  const { handleSubmit, watch, setValue, getValues, control } = useForm({
    defaultValues: {
      title: state ? state.title : "",
      content: state ? state.content : "",
      participants: state ? state.participants.map((p) => p.id + "") : [],
      totalMinutes: state ? state.totalMinutes : "",
      images: state ? [...state.images.map((image) => image.url)] : [],
      courses: state ? state.courses.map((c) => c.id.toString()) : [],
      previewImages: [],
      blobImages: [],
    },
  });

  watch(["totalMinutes", "startTime", "endTime", "images", "previewImages"]);

  const navigate = useNavigate();

  const onValid = (formData) => {
    console.log(formData);
    for (let i = 0; i < formData.blobImages.length; ++i) {
      const imageForm = new FormData();
      imageForm.append("image", formData.blobImages[i]);
      ImageUploadApi(state ? state.id : null, imageForm).then((res) => {
        console.log(res);
        setValue("images", [...formData.images, res.data.imagePath]);
      });
    }

    // 보고서 생성 api 연결
    const newReport = {
      title: formData.title,
      content: formData.content,
      totalMinutes: Number(formData.totalMinutes),
      participants: formData.participants,
      images: formData.images,
      courses: formData.courses,
    };
    state ? modifyReport(state.id, newReport) : postReport(newReport);

    alert("보고서 제출이 완료되었습니다.");
    navigate("/");
  };

  return (
    <StyledColumnAlignLayout
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {isCodeModal && <CodeModal onClick={() => setIsCodeModal(false)} />}

      <Title text="스터디 모임 보고서 작성" />
      <FormControl
        sx={{
          width: "80%",
        }}
      >
        <PostBox sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ mr: "10px" }}>
              코드를 생성해서 참여한 멤버들과 사진을 찍고 인증샷을 올려주세요.
            </Typography>
            <RoundButton
              onClick={() => setIsCodeModal(true)}
              name="인증 코드 생성"
              bgColor="primary.main"
              fontColor="white"
            />
          </Box>
          {/* <ImageUpload setValue={setValue} getValues={getValues} /> */}
          <ImageUploadToServer setValue={setValue} getValues={getValues} />
        </PostBox>

        <PostBox>
          <Typography variant="body2" sx={{ mb: "20px" }}>
            스터디를 한 과목을 모두 골라주세요.
          </Typography>
          <FormControl fullWidth>
            <PostCourses
              control={control}
              getValues={getValues}
              setValue={setValue}
            />
          </FormControl>
        </PostBox>
        <PostBox>
          <Typography variant="body2" sx={{ mb: "20px" }}>
            스터디에 참여한 맴버를 선택해주세요.
          </Typography>
          <PostMember
            control={control}
            getValues={getValues}
            setValue={setValue}
          />
        </PostBox>
        <PostBox>
          <Typography variant="body2" sx={{ mb: "20px" }}>
            스터디 시간을 알려주세요.
          </Typography>
          <PostStudyTime
            setValue={setValue}
            getValues={getValues}
            control={control}
          />
        </PostBox>

        <PostBox>
          <Typography variant="body2" sx={{ mb: "20px" }}>
            스터디 보고서를 작성해주세요.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Controller
              name={"title"}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  // value={value}
                  // onChange={onChange}
                  variant="outlined"
                  placeholder="제목"
                />
              )}
            />
            <Controller
              name={"content"}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="outlined-multiline-static"
                  multiline
                  rows={10}
                  placeholder="보고서 내용"
                />
              )}
            />
          </Box>
        </PostBox>
        <Box
          sx={{
            width: "280px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LongButton
            onClick={handleSubmit(onValid)}
            name="제출"
            bgColor="primary.main"
            fontColor="white"
          />
          <LongButton
            bgColor="error.main"
            fontColor="white"
            onClick={() => navigate(-1)}
            name="취소"
          />
        </Box>
      </FormControl>
    </StyledColumnAlignLayout>
  );
}
