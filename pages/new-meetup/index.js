// our-domain.com/new-meetup
import Head from "next/head.js";
import { useRouter } from "next/router";
import { Fragment } from "react";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm.js";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("./api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="Create a new meetup for others to join!"
        />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
