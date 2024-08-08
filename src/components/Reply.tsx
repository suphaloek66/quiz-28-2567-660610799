"use client";

import { ReplyProps } from "@/libs/types";

export default function Reply({ ImagePath, username, replyTitle, likes }:ReplyProps) {
  return <div className="d-flex">your code for Reply component ...
    <img src={ImagePath}
    width={30}
    height={30}
    className="rounded-circle"
    style={{ objectFit: "cover" }}
    />
    <div>
      <span>{username}</span>
    </div>
    <br />
    <span>{replyTitle}</span>
    {likes > 0 &&  (<div className="d-flex"> <img src="/link.svg" width={20}/><span className="text-mute">{likes}</span></div>)}
  </div>;
}
