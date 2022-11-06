import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "mu1",
    image:
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    title: "First Meetup",
    address: "address1, 12354, Peterborough",
    description: "This is a first meetup!",
  },
  {
    id: "mu2",
    image:
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    title: "Second Meetup",
    address: "address1, 12354, Scandiland",
    description: "This is a second meetup!",
  },
  {
    id: "mu3",
    image:
      "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
    title: "Third Meetup",
    address: "address1, 12354, Phillofulough",
    description: "This is a third meetup!",
  },
];

function HomePage() {
  return (
      <MeetUpList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;
