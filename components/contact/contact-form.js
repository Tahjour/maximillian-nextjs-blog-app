import { useContext, useEffect, useRef, useState } from "react";
// import NotificationContext from "../../context/notification-context";
import Notification from "../ui/notification";
import styles from "./contact-form.module.css";
function ContactForm() {
    // const notificationCtx = useContext(NotificationContext);
    const [requestStatus, setRequestStatus] = useState("");
    const [requestError, setRequestError] = useState();
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    useEffect(() => {
        if (requestStatus === "success" || requestStatus === "error") {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);
            return () => {
                clearTimeout(timer);
            };
        }
    }, [requestStatus]);

    async function sendMessageHandler(event) {
        event.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredName = nameRef.current.value;
        const enteredMessage = messageRef.current.value;

        setRequestStatus("pending");
        const newMessage = {
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        };
        try {
            await sendContactData(newMessage);
            setRequestStatus("success");
            emailRef.current.value = "";
            nameRef.current.value = "";
            messageRef.current.value = "";
        } catch (e) {
            setRequestError(e.message);
            setRequestStatus("error");
            return;
        }
    }

    async function sendContactData(contactData) {
        const response = await fetch("/api/contact", {
            method: 'POST',
            body: JSON.stringify(contactData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong");
        }
        const data = await response.json();
        console.log(data);
    }

    let notification;
    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending...",
            message: "Your message is being sent.",
        };
    }
    if (requestStatus === "success") {
        notification = {
            status: "success",
            title: "Success!",
            message: "Your message has been sent.",
        };
    }
    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Error!",
            message: requestError,
        };
    }


    return <section className={styles.contact}>
        <h1>How can I help you?</h1>
        <form className={styles.form} onSubmit={sendMessageHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" ref={emailRef} required></input>
                </div>
                <div className={styles.control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" ref={nameRef} required></input>
                </div>
            </div>
            <div className={styles.control}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={"5"} ref={messageRef}></textarea>
            </div>
            <div className={styles.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    </section>;
}

export default ContactForm;