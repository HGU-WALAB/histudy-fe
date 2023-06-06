import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import heic2any from "heic2any";
import { storage } from "../../Firebase/firebase";

export const HeicUpload = (url, setValue, getValues) => {
  const storageRef = ref(storage, `files/${url}`);

  const uploadTask = uploadBytesResumable(storageRef, url);

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

export const Heic2Jpg = (file, setValue, getValues) => {
  //   const heic2any = require("heic2any");
  // file 은 fileInput.current.files[0]
  //   const reader = new FileReader();

  //   let file = fileInput.current.files[0];
  console.log("file", file);

  fetch(file)
    .then((res) => res.blob())
    .then((blob) =>
      heic2any({
        blob,
        toType: "image/jpeg",
        quality: 0.5,
        // gifInterval: 0.2,
      })
    )
    .then((conversionResult) => {
      console.log(conversionResult, URL.createObjectURL(conversionResult));
      var url = URL.createObjectURL(conversionResult);
      HeicUpload(url, setValue, getValues);
      //   document.getElementById(
      //     "target"
      //   ).innerHTML = `<a target="_blank" href="${url}"><img src="${url}"></a>`;
    })
    .catch((e) => {
      console.log(e);
    });

  if (file.name.split(".")[1] === "heic") {
    // let blob = file;

    fetch(
      "https://firebasestorage.googleapis.com/v0/b/exalted-stage-387815.appspot.com/o/files%2FIMG_8487%203.HEIC?alt=media&token=e9db7892-1700-4a31-9e82-ce28eec47212"
    )
      .then((res) => res.blob())
      .then((blob) =>
        heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.5, // cuts the quality and size by half
        })
      )
      .then((conversionResult) => {
        console.log(conversionResult);
        return URL.createObjectURL(conversionResult);
      })
      .catch((errorObject) => {
        // see error handling section
        console.log(errorObject);
      });

    // blob에다가 변환 시키고 싶은 file값을 value로 놓는다.
    // toType에다가는 heic를 변환시키고싶은 이미지 타입을 넣는다.
    // heic2any({ blob: blob, toType: "image/jpeg" })
    //   .then(function (resultBlob) {
    //     //file에 새로운 파일 데이터를 씌웁니다.

    //     file = new File([resultBlob], file.name.split(".")[0] + ".jpg", {
    //       type: "image/jpeg",
    //       lastModified: new Date().getTime(),
    //     });

    //     // console.log("!!");
    //     console.log("converted" + file);
    //     // props.setImage(file);
    //     // reader.readAsDataURL(file);
    //     // reader.onloadend = () => {
    //     //   dispatch(setPreview(reader.result));
    //     // };
    //   })
    //   .catch(function (x) {
    //     console.log("error" + x);
    //   });
  }

  console.dir("converted" + file);

  return file;
};
export default Heic2Jpg;
