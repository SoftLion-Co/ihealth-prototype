"use client";
import NavigationComponent from "@/components/NavigationComponent";
import React, { useState, useCallback } from "react";

const Page = () => {
  const [tags, setTags] = useState(["Dresses", "Yellow", "Cotton"]);
  const [newTag, setNewTag] = useState("");

  const addTag = useCallback(() => {
    if (newTag.trim() !== "") {
      setTags((prevTags) => [...prevTags, newTag.trim()]);
      setNewTag("");
    }
  }, [newTag]);

  const removeTag = useCallback((index: number) => {
    setTags((prevTags) => {
      const newTags = [...prevTags];
      newTags.splice(index, 1);
      return newTags;
    });
  }, []);

  const clearTags = () => {
    setTags([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const links = [
    { title: "Women", href: "/women" },
    { title: "Clothes", href: "/clothes" },
  ];

  return (
    <div>
      <NavigationComponent
        links={links}
        tags={tags}
        clearTags={clearTags}
        removeTag={removeTag}
      />
      <div>
        <h2>Manage Tags</h2>
        <input
          type="text"
          value={newTag}
          onChange={handleInputChange}
          placeholder="Enter new tag"
        />
        <button onClick={addTag}>Add Tag</button>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              {tag} <button onClick={() => removeTag(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
