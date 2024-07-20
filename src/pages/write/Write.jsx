import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import { useJwt } from "react-jwt";
import Cookies from "js-cookie";
import Navbar from "../../components/Navbar";
import WriteDetails from "../../components/ArticleWrite/WriteDetails";
import FormButton from "../../components/FormButton";
import MUIRichTextEditor from "mui-rte";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Single from "../Single";
import { saveArticleToBuffer } from "../../services/saveBuffer.service";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { convertToRaw } from "draft-js";

export default function Write() {
  let history = useHistory();
  const token = Cookies.get("token");
  const { decodedToken, isExpired } = useJwt(token);
  const editor = useRef(null);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const [category, setCategory] = useState();
  const [coverPicUrl, setCoverPicUrl] = useState();
  const [showPreview, setShowPreview] = useState(false);
  const [content, setContent] = useState();
  const author = decodedToken?.name;
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  const saveBuffer = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("category", category);
    formData.append("coverPicUrl", coverPicUrl);
    formData.append("content", content);
    formData.append("author", author);
    const response = await saveArticleToBuffer(formData);
    const responseJson = await response.json();
    if (response.status === 201) {
      toast.success(responseJson.msg, { duration: 2000 });
      history.push("/");
    } else {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };

  const saveContent = (event) => {
    console.log(editor.current.save());
  };
  return showPreview ? (
    <div>
      <FormButton
        onClick={() => {
          saveBuffer();
          setShowPreview(true);
        }}
        value="Save Article"
      />
      <FormButton
        onClick={() => {
          setShowPreview(false);
        }}
        value="Go Back"
      />
      <Single
        title={title}
        description={description}
        category={category}
        coverPic={null}
        content={content}
        author={author}
        date={new Date().toISOString()}
      />
    </div>
  ) : (
    <div>
      <Navbar />
      <WriteDetails
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        tags={tags}
        setTags={setTags}
        category={category}
        setCategory={setCategory}
        setCoverPicUrl={setCoverPicUrl}
      />

      <div className="w-screen max-w-screen-xl max-w-screen-lg max-w-screen-sm h-full border-2 m-32 p-14">
        <ThemeProvider theme={myTheme}>
          <MUIRichTextEditor
            ref={editor}
            label="Type something here..."
            defaultValue={content}
            onSave={(content) => {
              setContent(content);
            }}
            inlineToolbar={true}
          />
        </ThemeProvider>
      </div>
      <FormButton
        onClick={() => {
          saveContent();
          setShowPreview(true);
        }}
        value="Preview on onClick"
      />
    </div>
  );
}
