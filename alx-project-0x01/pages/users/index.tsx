import UserCard from "../../components/common/UserCard";
import PostCard from "../../components/common/PostCard"; // Import PostCard
import { UserProps, PostProps } from "../../interfaces"; // Import PostProps

interface UsersPageProps {
  users: UserProps[];
  posts: PostProps[]; // Add posts to props
}

const Users: React.FC<UsersPageProps> = ({ users, posts }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        {/* Users Section */}
        <h1 className="text-3xl font-bold text-center mb-8">Users List</h1>
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
      posts, // Include posts in props
    },
  };
}

export default Users;
