import React from "react";
import preferredPartner from "./views/Preferredpartners";

const Breadcrumbs = React.lazy(() => import("./views/Base/Breadcrumbs"));
const Cards = React.lazy(() => import("./views/Base/Cards"));
const Carousels = React.lazy(() => import("./views/Base/Carousels"));
const Collapses = React.lazy(() => import("./views/Base/Collapses"));
const Dropdowns = React.lazy(() => import("./views/Base/Dropdowns"));
const Forms = React.lazy(() => import("./views/Base/Forms"));
const Jumbotrons = React.lazy(() => import("./views/Base/Jumbotrons"));
const ListGroups = React.lazy(() => import("./views/Base/ListGroups"));
const Navbars = React.lazy(() => import("./views/Base/Navbars"));
const Navs = React.lazy(() => import("./views/Base/Navs"));
const Paginations = React.lazy(() => import("./views/Base/Paginations"));
const Popovers = React.lazy(() => import("./views/Base/Popovers"));
const ProgressBar = React.lazy(() => import("./views/Base/ProgressBar"));
const Switches = React.lazy(() => import("./views/Base/Switches"));
const Tables = React.lazy(() => import("./views/Base/Tables"));
const Tabs = React.lazy(() => import("./views/Base/Tabs"));
const Tooltips = React.lazy(() => import("./views/Base/Tooltips"));
const BrandButtons = React.lazy(() => import("./views/Buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() =>
  import("./views/Buttons/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() => import("./views/Buttons/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/Buttons/Buttons"));
const Charts = React.lazy(() => import("./views/Charts"));
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Aboutus = React.lazy(() => import("./views/Aboutus"));
const faq = React.lazy(() => import("./views/faq"));
const educationproviders = React.lazy(() => import('./views/educationproviders'));
const preferredpartner = React.lazy(() => import('./views/Preferredpartners'));
const setupaccount = React.lazy(() => import('./views/setupaccount'));
const Ourservice = React.lazy(() => import("./views/Ourservice"));
const Getstarted = React.lazy(() => import("./views/Getstarted"));
const Profileaboutus = React.lazy(() => import("./views/Profileaboutus"));
const Contactus = React.lazy(() => import('./views/Contactus'));
const Cmsdetail = React.lazy(() => import('./views/Cmsdetail'));
//const Universitycontact = React.lazy(() => import('./views/Universitycontact'));
const CoreUIIcons = React.lazy(() => import("./views/Icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./views/Icons/Flags"));
const FontAwesome = React.lazy(() => import("./views/Icons/FontAwesome"));
const SimpleLineIcons = React.lazy(() =>
  import("./views/Icons/SimpleLineIcons")
);
const Alerts = React.lazy(() => import("./views/Notifications/Alerts"));
const Badges = React.lazy(() => import("./views/Notifications/Badges"));
const Modals = React.lazy(() => import("./views/Notifications/Modals"));
const Colors = React.lazy(() => import("./views/Theme/Colors"));
const Typography = React.lazy(() => import("./views/Theme/Typography"));
const Widgets = React.lazy(() => import("./views/Widgets/Widgets"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const category = React.lazy(() => import("./views/category"));
const faculty = React.lazy(() => import("./views/faculty"));
const department = React.lazy(() => import("./views/department"));
const Campuses = React.lazy(() => import("./views/Pages/Campuses/Campuses"));
const Addsubsection = React.lazy(() =>
  import("./views/Pages/Campuses/Addsubsection/Addsubsection")
);
const Entryrequirement = React.lazy(() =>
  import("./views/Pages/Entryrequirement/Entryrequirement")
);
const Institutelist = React.lazy(() =>
  import("./views/Institutelist/Institutelist")
);
const Generallogin = React.lazy(() =>
  import("./views/Generallogin/Generallogin")
);
const Universityabout = React.lazy(() =>
  import("./views/Universityabout/Universityabout")
);
const Career = React.lazy(() => import("./views/career"));
const Legal = React.lazy(() => import("./views/legal/index"));
const Newsdetail = React.lazy(() => import("./views/Cmsdetail/Newsdetail"));
const Terms = React.lazy(() => import("./views/termofuse"));
const Privacy = React.lazy(() => import("./views/privacypolicy"));
const Mainservices = React.lazy(() => import("./views/services"));
const Student = React.lazy(() => import("./views/Ourservice/Student_Overview"));
const University = React.lazy(() => import("./views/Ourservice/University_Overview"));
const Partner = React.lazy(() => import("./views/Ourservice/Partners_Overview"));

//const Courses = React.lazy(() => import('./views/Pages/Courses/Courses'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/aboutus", name: "Aboutus", component: Aboutus },
  { path: "/faq", name: "faq", component: faq },
  { path: "/career", name: "career", component: Career },
  { path: "/legal", name: "legal", component: Legal },
  { path: "/news-detail/:id", name: "newsdetail", component: Newsdetail },
  { path: "/terms", name: "terms", component: Terms },
  { path: "/privacy", name: "privacy", component: Privacy },
  { path: "/services", name: "services", component: Mainservices },
  { path: "/students", name: "students", component: Student },
  { path: "/university", name: "university", component: University },
  { path: "/partners-overview", name: "partners", component: Partner },

  { path: "/educationproviders", name: "Educationproviders", component: educationproviders },
  { path: "/preferredpartner", name: "preferredpartner", component: preferredpartner },
  { path: "/setupaccount", name: "account", component: setupaccount },
  { path: "/getstarted", name: "Getstarted", component: Getstarted },
  {
    path: "/profileaboutus",
    name: "Profileaboutus",
    component: Profileaboutus,
  },
  // { path: '/universitycontact', name: 'Universitycontact', component: Universitycontact },
  { path: '/contactus', name: 'Contactus', component: Contactus },
  { path: '/cmsdetail', name: 'Cmsdetail', component: Cmsdetail },
  { path: "/ourservice", name: "Ourservice", component: Ourservice },
  { path: "/theme", exact: true, name: "Theme", component: Colors },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", exact: true, name: "Base", component: Cards },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/forms", name: "Forms", component: Forms },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/dropdowns", name: "Dropdowns", component: Dropdowns },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", exact: true, name: "Buttons", component: Buttons },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Button Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/font-awesome", name: "Font Awesome", component: FontAwesome },
  {
    path: "/icons/simple-line-icons",
    name: "Simple Line Icons",
    component: SimpleLineIcons,
  },
  {
    path: "/notifications",
    exact: true,
    name: "Notifications",
    component: Alerts,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  { path: "/category", name: "category", component: category },
  { path: "/faculty", name: "faculty", component: faculty },
  { path: "/department", name: "department", component: department },
  {
    path: "/campuses",
    exact: true,
    name: "Campuses Details",
    component: Campuses,
  },
  {
    path: "/campuses/addsubsection",
    exact: true,
    name: "Campus Subsection Details",
    component: Addsubsection,
  },
  {
    path: "/entryrequirement",
    exact: true,
    name: "Entry Requirement Details",
    component: Entryrequirement,
  },
  {
    path: "/institutelist",
    exact: true,
    name: "Institutelist",
    component: Institutelist,
  },
  {
    path: "/generallogin",
    exact: true,
    name: "Generallogin",
    component: Generallogin,
  },
  {
    path: "/universityabout",
    exact: true,
    name: "Universityabout",
    component: Universityabout,
  },
  // { path: '/courses', exact: true, name: 'Create Courses', component: Courses },
];

export default routes;
