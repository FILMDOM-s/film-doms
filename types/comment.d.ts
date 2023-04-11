interface Comment{
  id: number;
  content: string;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  updatedAt: string;
  author: User;
  childComments: ChildComment[];
  managerComment: boolean;
  likes: number;
};