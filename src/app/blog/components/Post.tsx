"use client";

type Post = {
  id: number;
  post_title: string;
  post_content: string;
  created_at: string;
};

import { useEffect, useState } from "react";
import { fetchPosts } from "@/utils/supabase/actions";
import Heading from "@/components/Heading";
import { formatDate } from "@/utils/utils";

const Post = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetchPosts();
      if (response.success) {
        setPosts(response.data);
      } else {
        console.error(response.message);
      }
    };

    loadPosts();
  }, []);

  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col gap-4">
            <Heading title={post.post_title} />
            <p>{post.post_content}</p>
            <p className="italic flex justify-end">
              {formatDate(post.created_at)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
