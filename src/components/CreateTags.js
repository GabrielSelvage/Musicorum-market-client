import React, { useState } from 'react';
import './CreateTags.scss';
import TagsInput from './TagsInput';

const CreateTags = ({ handleTagsChange }) => {

  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});

  const changeHandler = (name, value) => {
    if (name === 'tags') {
      setTags(value);
      if (value.length > 0 && errors.tags) {
        setErrors(prev => {
          const prevErrors = { ...prev };
          delete prevErrors.tags;
          return prevErrors;
        });
      }
    }

    handleTagsChange(value);
  }
  const submitHandler = e => {
    console.log("on submit");
    e.preventDefault();
    if (tags.length === 0) {
      setErrors(prev => ({
        ...prev,
        tags: 'Please add at least one tag'
      }));
    }
    if (tags.length) {
      console.log(tags);
      // Submit form
    }


  }
  return (
    <div className="container body-tags">
      <form onSubmit={submitHandler}>
        <TagsInput
          placeholder="Add tag"
          id="tags"
          name="tags"
          onChange={changeHandler}
          error={errors.tags}
          defaultTags={tags}
        />
      </form>
    </div>
  );
}
export default CreateTags;