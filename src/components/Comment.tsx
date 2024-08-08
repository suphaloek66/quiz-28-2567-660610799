"use client";
import  Reply from "./Reply";
import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";
export default function Comment({
  ImagePath,
  username,
  commentTitle,
  likes,
  replies,
}: CommentProps) {
  return (
    <div>
      your code for Comment component here ...
      {/* You can use map-loop to render Reply component here */}
    </div>
  );
}
