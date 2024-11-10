import { InstagramIcon } from "@/svgComponents/instagram";
import { YoutubeIcon } from "@/svgComponents/youtube";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

export type UserData = {
  socialMediaName: string;
  icon: React.ReactNode;
  color: string;
  username: string;
  followers?: number | string;
  subscribers?: number | string;
  todayFollowers?: number;
  todaySubscribers?: number;
};

export interface OverviewDataType {
  type: string;
  count: number | string;
  percentage: number;
  icon: React.ReactNode;
}

const colors = {
  "facebook-blue": "hsl(208, 92%, 53%)",
  "twitter-blue": "hsl(203, 89%, 53%)",
  "youtube-red": "hsl(348, 97%, 39%)",
  "instagram-gradient":
    "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
};

export const data: UserData[] = [
  {
    socialMediaName: "facebook",
    icon: <AiFillFacebook />,
    username: "@nathanf",
    followers: 1987,
    todayFollowers: 12,
    color: colors["facebook-blue"],
  },
  {
    socialMediaName: "twitter",
    icon: <AiOutlineTwitter />,
    username: "@nathanf",
    followers: 1044,
    todayFollowers: 99,
    color: colors["twitter-blue"],
  },
  {
    socialMediaName: "instagram",
    icon: <InstagramIcon />,
    username: "@realnathanf",
    followers: "11K",
    todayFollowers: 1099,
    color: colors["instagram-gradient"],
  },
  {
    socialMediaName: "youtube",
    icon: <YoutubeIcon />,
    username: "Nathan F.",
    subscribers: 8239,
    todaySubscribers: -144,
    color: colors["youtube-red"],
  },
];

export const OverviewData: OverviewDataType[] = [
  {
    type: "Page Views",
    count: 87,
    percentage: 3,
    icon: <AiFillFacebook className=" text-facebook-blue " />,
  },
  {
    type: "Likes",
    count: 52,
    percentage: 2,
    icon: <AiFillFacebook className=" text-facebook-blue " />,
  },
  {
    type: "Likes",
    count: 5462,
    percentage: 2257,
    icon: <InstagramIcon />,
  },
  {
    type: "Profile Views",
    count: "52K",
    percentage: 1375,
    icon: <InstagramIcon />,
  },
  {
    type: "Retweets",
    count: 117,
    percentage: 303,
    icon: <AiOutlineTwitter className=" text-twitter-blue " />,
  },
  {
    type: "Likes",
    count: 507,
    percentage: 553,
    icon: <AiOutlineTwitter className=" text-twitter-blue " />,
  },
  {
    type: "Likes",
    count: 107,
    percentage: -19,
    icon: <YoutubeIcon />,
  },
  {
    type: "Total Views",
    count: 1407,
    percentage: -12,
    icon: <YoutubeIcon />,
  },
];