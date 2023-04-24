import { RxDashboard } from "react-icons/rx";
import {
  BsCalendar2CheckFill,
  BsCalendarCheck,
  BsFolder,
  BsFolder2Open,
} from "react-icons/bs";
import { BiCalendar, BiMessageSquareDetail } from "react-icons/bi";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { TbBrandStackshare, TbNotes } from "react-icons/tb";
import { GrCompliance, GrDocumentUser } from "react-icons/gr";
import { MdEditNote } from "react-icons/md";
import { GoCloudUpload } from "react-icons/go";

export const sidebarData = [
  {
    type: "main-sidebar",
    menus: [
      {
        id: 1,
        title: "Dashboard",
        inActiveIcon: <RxDashboard />,
        activeIcon: "",
        path: "/dashboard/home",
        badge: null,
      },
      {
        id: 2,
        title: "Projects",
        inActiveIcon: <BsFolder />,
        activeIcon: <BsFolder2Open />,
        path: null,
        badge: null,
        submenu: [
          {
            id: 1,
            title: "Project 1",
            icon: <RxDashboard />,
            path: "/dashboard/my-project",
          },
        ],
      },
      {
        id: 3,
        title: "Tasks",
        inActiveIcon: <BsCalendarCheck />,
        activeIcon: <BsCalendar2CheckFill />,
        path: null,
        badge: null,
        submenu: [
          {
            id: 1,
            title: "All Tasks",
            icon: <TbNotes />,
            path: "/dashboard/tasks?f=all",
          },
          {
            id: 2,
            title: "My Tasks",
            icon: <GrDocumentUser />,
            path: "/dashboard/tasks?f=my-tasks",
          },
          {
            id: 3,
            title: "My Completed Tasks",
            icon: <GrCompliance />,
            path: "/dashboard/tasks?f=my-completed-tasks",
          },
        ],
      },
      {
        id: 4,
        title: "Messages",
        inActiveIcon: <BiMessageSquareDetail />,
        activeIcon: "",
        path: "/chats",
        badge: "9+",
      },
      {
        id: 5,
        title: "Calender",
        inActiveIcon: <BiCalendar />,
        activeIcon: "",
        path: "/dashboard/calender",
        badge: null,
      },
      {
        id: 6,
        title: "Teams",
        inActiveIcon: <IoPeopleOutline />,
        activeIcon: "",
        path: "/dashboard/teams",
        badge: "4",
      },
      {
        id: 7,
        title: "Notes",
        inActiveIcon: <MdEditNote />,
        activeIcon: "",
        path: "/dashboard/notes",
        badge: null,
      },
      {
        id: 8,
        title: "Docs",
        inActiveIcon: <IoDocumentTextOutline />,
        activeIcon: "",
        path: "/dashboard/docs",
        badge: null,
      },
      {
        id: 9,
        title: "Storage",
        inActiveIcon: <GoCloudUpload />,
        activeIcon: "",
        path: "/dashboard/storage",
        badge: null,
      },
      {
        id: 10,
        title: "Forum",
        inActiveIcon: <TbBrandStackshare />,
        activeIcon: "",
        path: "/my-forums",
        badge: null,
      },
    ],
  },
  {
    type: "calender",
    menus: [],
  },
];
