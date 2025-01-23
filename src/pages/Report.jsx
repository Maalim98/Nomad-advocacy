import { useState } from 'react';
import { FaExclamationCircle, FaLock, FaImage, FaVideo, FaTrash } from 'react-icons/fa';

const Report = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    date: '',
    location: '',
    description: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    isAnonymous: false
  });

  const [mediaFiles, setMediaFiles] = useState({
    images: [],
    videos: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      if (type === 'images') {
        return file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024;
      }
      return file.type.startsWith('video/') && file.size <= 100 * 1024 * 1024;
    });

    setMediaFiles(prev => ({
      ...prev,
      [type]: [...prev[type], ...validFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }))]
    }));
  };

  const removeFile = (type, index) => {
    setMediaFiles(prev => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData, mediaFiles);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Report an Incident
          </h1>
          <p className="text-lg text-gray-600">
            Your safety and privacy are our top priorities. All reports are confidential.
          </p>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-center">
            <FaLock className="text-blue-400 mr-3" />
            <p className="text-blue-700">
              This form is secure and encrypted. You can choose to remain anonymous.
            </p>
          </div>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
          {/* Incident Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="incidentType">
              Type of Incident*
            </label>
            <select
              id="incidentType"
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select incident type</option>
              <option value="physical">Physical Violence</option>
              <option value="verbal">Verbal Abuse</option>
              <option value="sexual">Sexual Violence</option>
              <option value="emotional">Emotional Abuse</option>
              <option value="financial">Financial Abuse</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Date and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
                Date of Incident
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Where did this happen?"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Please provide details about what happened..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            ></textarea>
          </div>

          {/* Evidence Upload Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Evidence Upload (Optional)</h2>
            
            {/* Image Upload */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                  <FaImage />
                  <span>Add Photos</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileUpload(e, 'images')}
                  />
                </label>
                <span className="text-sm text-gray-500">Max 5MB per image</span>
              </div>

              {mediaFiles.images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {mediaFiles.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image.preview}
                        alt={`Upload ${index + 1}`}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile('images', index)}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Video Upload */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                  <FaVideo />
                  <span>Add Videos</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="video/*"
                    multiple
                    onChange={(e) => handleFileUpload(e, 'videos')}
                  />
                </label>
                <span className="text-sm text-gray-500">Max 100MB per video</span>
              </div>

              {mediaFiles.videos.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {mediaFiles.videos.map((video, index) => (
                    <div key={index} className="relative group">
                      <video
                        src={video.preview}
                        className="w-full rounded-lg"
                        controls
                      />
                      <button
                        type="button"
                        onClick={() => removeFile('videos', index)}
                        className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Anonymous Checkbox */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleChange}
                className="rounded text-blue-600 focus:ring-blue-500 mr-2"
              />
              <span className="text-gray-700">I want to report anonymously</span>
            </label>
          </div>

          {/* Contact Information (shown if not anonymous) */}
          {!formData.isAnonymous && (
            <div className="space-y-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactName">
                  Your Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactPhone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="contactEmail">
                  Email Address
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Submit Report
            </button>
          </div>
        </form>

        {/* Quick Exit */}
        <div className="text-center mt-8">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 mx-auto">
            <FaLock />
            Quick Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Report; 