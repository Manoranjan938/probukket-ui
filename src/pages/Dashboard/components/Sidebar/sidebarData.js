import { RxDashboard } from "react-icons/rx";
import { BsCalendar2CheckFill, BsCalendarCheck } from "react-icons/bs";
import { BiCalendar, BiMessageSquareDetail } from "react-icons/bi";
import { IoDocumentTextOutline, IoPeopleOutline } from "react-icons/io5";
import { MdEditNote } from "react-icons/md";

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
      // {
      //   id: 2,
      //   title: "Draws",
      //   inActiveIcon: <CgIfDesign />,
      //   activeIcon: <BsFolder2Open />,
      //   path: "/dashboard/draw",
      //   badge: null,
      // },
      {
        id: 3,
        title: "Tasks",
        inActiveIcon: <BsCalendarCheck />,
        activeIcon: <BsCalendar2CheckFill />,
        path: "/dashboard/tasks",
        badge: null,
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
      // {
      //   id: 9,
      //   title: "Storage",
      //   inActiveIcon: <GoCloudUpload />,
      //   activeIcon: "",
      //   path: "/dashboard/storage",
      //   badge: null,
      // },
      // {
      //   id: 10,
      //   title: "Forum",
      //   inActiveIcon: <TbBrandStackshare />,
      //   activeIcon: "",
      //   path: "/my-forums",
      //   badge: null,
      // },
      // {
      //   id: 11,
      //   title: "My Timers",
      //   inActiveIcon: <MdOutlinePunchClock />,
      //   activeIcon: "",
      //   path: "/my-forums",
      //   badge: null,
      // },
      // {
      //   id: 12,
      //   title: "HR Tool",
      //   inActiveIcon: <MdOutlineSupervisedUserCircle />,
      //   activeIcon: "",
      //   path: "/my-forums",
      //   badge: null,
      // },
    ],
  },
  {
    type: "calender",
    menus: [],
  },
];
