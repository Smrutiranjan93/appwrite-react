import React from 'react'
import service from '../appwrite/config';
const Home = () => {
  const createTestPost = async () => {
    const post = {
      title: 'Test Post',
      slug: 'test-post',
      content: 'This is a test post created to verify Appwrite integration.',
      featuredImage: 'https://via.placeholder.com/150',
      status: 'published', 
      userID: '1', 
    };

    try {
      const response = await service.createPost(post);
      console.log('Post created successfully:', response);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
  
    <div className="home-container">
    <div className="container">
      <h1>Welcome to my website!</h1>
      <p>This page should be protected by a PrivateRoutes component for authenticated users.</p>
      <button onClick={createTestPost}>Create Test Post</button>
    </div>
 
  </div>
  
  )
}

export default Home
