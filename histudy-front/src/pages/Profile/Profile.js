import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProfile } from "../../apis/users";

export default function Profile() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res);
    });
  }, []);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: "30px", fontWeight: "300" }}>
        😀 마이페이지
      </Typography>
      <Box
        sx={{
          p: "30px",
          border: 2,
          borderRadius: "20px",
          width: "280px",
          mt: "30px",
          mb: "15px",
          backgroundColor: "background.sidebar",
          borderColor: "lightGray",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ mb: "30px", textAlign: "center" }}>
          이름 , 학번
        </Typography>
        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "primary.main",
            }}
          >
            {profile?.name}, {profile?.sid}
          </Box>
        </AnimatePresence>

        <Typography variant="body1" sx={{ mb: 1, mt: 3 }}>
          이메일
        </Typography>
        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "primary.main",
            }}
          >
            {profile?.email}
          </Box>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
