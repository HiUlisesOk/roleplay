export type CardProps = {
  ShowTitle?: boolean;
  ShowDescription?: boolean;
  ShowAvatar?: boolean;
  ShowImage?: boolean;
  ShowAvatarAndAuthor?: boolean;
  ShowAuthor?: boolean;
  CardTitle?: string;
  CardDescription?: string;
  CardAvatar?: string;
  CardImage?: string;
  Author?: string;
  AuthorID?: number | null;
  ShowPostQuantity?: boolean;
  numberOfPosts?: number;
  order?: {
    CardTitle?: number;
    CardDescription?: number;
    CardAvatar?: number;
    CardImage?: number;
    Author?: number;
    CardAvatarAndAuthor?: number;
    PostQuantity?: number;
  };
};
