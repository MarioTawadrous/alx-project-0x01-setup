// pages/users/index.tsx
import React, { useState } from "react";
import UserCard from "../../components/common/UserCard";
import PostCard from "../../components/common/PostCard";
import UserModal from "../../components/common/UserModal";
import { UserProps, PostProps, UserData } from "../../interfaces";

interface UsersPageProps {
  users: UserProps[];
  posts: PostProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({
  users: initialUsers,
  posts,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserProps[]>(initialUsers);

  const handleAddUser = (newUser: UserData) => {
    // Generate a temporary ID
    const tempId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    // Create a new user object with the generated ID
    const userWithId: UserProps = {
      ...newUser,
      id: tempId,
    } as UserProps;

    setUsers((prevUsers) => [...prevUsers, userWithId]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Users Section */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Users List</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add User
          </button>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Posts Section */}
        <h1 className="text-3xl font-bold text-center mb-8">Posts List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* User Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch users
  const usersResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await usersResponse.json();

  // Fetch posts
  const postsResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await postsResponse.json();

  return {
    props: {
      users,
      posts,
    },
  };
}

export default UsersPage;
