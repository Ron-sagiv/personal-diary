import { useState } from 'react';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    date: '',
    content: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }

    if (!formData.imageUrl.trim() || !formData.imageUrl.includes('https://')) {
      newErrors.imageUrl = 'Please enter a valid image URL.';
    }
    // date
    if (!formData.date) {
      newErrors.date = 'Date is required.';
    }

    // content / textarea
    if (!formData.content.trim()) {
      newErrors.content = 'Content cannot be empty.';
    }

    return newErrors;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Get existing entries from localStorage
    const existingEntries =
      JSON.parse(localStorage.getItem('diaryEntries')) || [];

    const entryExists = existingEntries.some(
      (entry) => entry.date === formData.date,
    );

    if (entryExists) {
      setErrors({
        date: 'An entry already exists for this date.',
      });
      return;
    }
    // Create a new diary entry
    const newEntry = {
      id: crypto.randomUUID(),
      ...formData,
    };

    // Add new entry
    const updatedEntries = [...existingEntries, newEntry];

    // Save back to localStorage
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));

    // Clear form after submit
    setFormData({
      title: '',
      imageUrl: '',
      date: '',
      content: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="fieldset bg-[#59dcda] border-base-300 rounded-box  border p-4 w-[100%] mx-auto">
        {/* <legend className="fieldset-legend text-inherit">New Entry</legend> */}
        <label className="label">
          <input
            name="title"
            value={formData.title}
            type="text"
            className="input w-full bg-[#99e7e5] border-base-300 border"
            placeholder="Title"
            onChange={handleChange}
          />
        </label>
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        <label className="label">
          <input
            name="imageUrl"
            value={formData.imageUrl}
            type="url"
            className="input w-full bg-[#99e7e5] border-base-300 border"
            placeholder="Image URL"
            onChange={handleChange}
          />
        </label>
        {errors.imageUrl && (
          <p className="text-red-500 text-sm">{errors.imageUrl}</p>
        )}
        <label className="label">
          <input
            name="date"
            value={formData.date}
            type="date"
            className="input w-full bg-[#99e7e5] border-base-300 border"
            onChange={handleChange}
          />
        </label>
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
        <label className="label">
          <textarea
            name="content"
            value={formData.content}
            className="textarea w-full bg-[#99e7e5] border-base-300 border"
            placeholder="Content"
            onChange={handleChange}
          />
        </label>
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content}</p>
        )}
        <button type="submit" className="btn bg-[#e990ea] text-inherit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default EntryForm;
