import RecRouter from "@/views/rec/index";
import RecMainPage from "@/views/rec/RecMainPage";

export default {
  path: "/train",
  name: "RecRouter",
  component: RecRouter,
  meta: {
    name: "模型训练",
    icon: "el-icon-s-data"
  },
  children: [
    {
      path: "index",
      name: "RecMainPage",
      component: RecMainPage,
      meta: {
        name: "模型训练",
        parent: "RecRouter"
      }
    }
  ]
};
