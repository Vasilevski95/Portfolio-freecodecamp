import classes from "./Layout.module.css";
import MainNavigaion from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigaion />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
