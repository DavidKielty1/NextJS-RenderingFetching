import NewMeetUpForm from "../../components/meetups/NewMeetupForm.js";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
