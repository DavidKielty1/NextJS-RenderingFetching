import { Fragment } from "react";
import Head from "next/head.js";

import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </Fragment>
  );
}

export default MeetupDetail;
