import { Fragment, useContext } from "react";
import MainNavigation from "./main-navigation";
import Notification from "../ui/notification";
import NotificationContext from "../../context/notification-context";

function Layout(props) {
    const notifiationCtx = useContext(NotificationContext);
    const activeNotification = notifiationCtx.notification;
    return <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
        {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />}
    </Fragment>;
}

export default Layout;