import { useState } from "react";
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
    images: [],
    name: "",
    description: "",
    price: "",
    tags: [],
  });

  const [inputValueTag, setInputValueTag] = useState("");

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
      return;
    }
    const newTags = [...formData.tags, inputValueTag];
    setFormData((prev) => ({ ...prev, tags: newTags }));
    setInputValueTag("");
  };

  const handleDeleteTag = (index) => {
    const newTags = formData.tags.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, tags: newTags }));
  };

  return (
    <div className="addItem-page-layout">
      <form className="addItem-form" onSubmit={handleSubmitAddItem}>
        <AddItemFormHeader />
        <AddItemImage images={formData.images} />
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
        />
      </form>

      <TagList tags={formData.tags} onDelete={handleDeleteTag} />
    </div>
  );
};

export default AddItemPage;
