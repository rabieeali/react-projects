import React from 'react';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostProps = {
  post: IPost;
} & React.HTMLAttributes<HTMLElement>;
