import { useRef, useState } from "react";
import "./AddItemPage.style.css";
import AddItemDescription from "./components/AddItemDescription";
import AddItemFormHeader from "./components/AddItemFormHeader";
import AddItemImage from "./components/AddItemImage";
import AddItemName from "./components/AddItemName";
import AddItemPrice from "./components/AddItemPrice";
import AddItemTag from "./components/AddItemTag";
import TagList from "../../common/TagList";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    images: [], // required 지만 빈 배열이어도 되는듯
    name: "", // required
    description: "", // required
    price: "", // required
    tags: [], // required
  });

  const [inputValueTag, setInputValueTag] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [errors, setErrors] = useState({ image: "", tag: "" }); // POST요청 에러까지 추후에 들어갈지도

  const fileInputRef = useRef(null);

  const handleChangeImage = (e) => {
    if (previewImage) {
      setErrors((prev) => ({
        ...prev,
        image: "이미지 파일은 1개만 등록할 수 있습니다",
      }));
      return;
    }
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setPreviewImage(url);
    const newImages = [url];
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const handleDeleteImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setPreviewImage("");
    setFormData((prev) => ({ ...prev, images: [] }));
    setErrors((prev) => ({ ...prev, image: "" }));
  };

  const handleChange = (e, category) => {
    setFormData((prev) => ({ ...prev, [category]: e.target.value }));
  };

  const handleSubmitAddItem = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSubmitTag = (e) => {
    e.preventDefault();

    if (!inputValueTag) {
      setErrors((prev) => ({ ...prev, tag: "태그를 입력하세요" }));
      return;
    }

    if (formData.tags.includes(inputValueTag)) {
      setErrors((prev) => ({ ...prev, tag: "태그가 이미 존재합니다" }));
      return;
    }

    const newTags = [...formData.tags, inputValueTag];
    setFormData((prev) => ({ ...prev, tags: newTags }));
    setInputValueTag("");
    setErrors((prev) => ({ ...prev, tag: "" }));
  };

  const handleDeleteTag = (index) => {
    const newTags = formData.tags.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, tags: newTags }));
  };

  return (
    <div className="addItem-page-layout">
      <form className="addItem-form" onSubmit={handleSubmitAddItem}>
        <AddItemFormHeader />
        <AddItemImage
          image={previewImage}
          ref={fileInputRef}
          error={errors.image}
          onChange={handleChangeImage}
          onDelete={handleDeleteImage}
        />
        <AddItemName
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
        />
        <AddItemDescription
          value={formData.description}
          onChange={(e) => handleChange(e, "description")}
        />
        <AddItemPrice
          value={formData.price}
          onChange={(e) => handleChange(e, "price")}
        />
      </form>

      <form onSubmit={handleSubmitTag}>
        <AddItemTag
          value={inputValueTag}
          onChange={(e) => setInputValueTag(e.target.value)}
          error={errors.tag}
        />
      </form>

      <TagList tags={formData.tags} onDelete={handleDeleteTag} />
    </div>
  );
};

export default AddItemPage;
