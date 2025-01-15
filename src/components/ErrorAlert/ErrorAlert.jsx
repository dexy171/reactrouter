import styles from "./ErrorAlert.module.css";

export const ErrorAlert = () => {
  return (
    <section className={styles.errorContainer}>
      <h1>This is an error page</h1>
      <p>Something went wrong...</p>
      <a href="/" className={styles.backToHomepageLink}>
        Go back to homepage
      </a>
    </section>
  );
};
