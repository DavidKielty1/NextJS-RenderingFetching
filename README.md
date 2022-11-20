**intro**
What is NextJS? Why use it?\
. Why using NextJS standalone may not be enough -- may not give you everything you want.

_Features_\
. File based routing\
. Page pre-rendering

Fullstack NextJS - API, data fetching -> pre-render pages with data.

Why use it? -> Fullstack framework for ReactJS

**3 Key Features:**

_1: Built-in Server-side Rendering (improved SEO!)_\
Automatic page pre-rendering - good for SEO and initial load.
Blending client-side and server-side: fetch data on the server and render finished pages.

_2: File-based Routing_\
Define pages and routes with files and folders instead of code.\
Less code, less work, highly understandable.

_3: Fullstack Capabilities_\
Easily add backend (server-side) code to Next/React apps\
Storing data, gatting data, authentication etc. can be added to React Projects

**1. Routing**
Folder based-routing. Routes automatically match pages directory. Must be in pages folder.

_Dynamic Routing_
. import { useRouter } from 'next/router'\
. const router = useRouter();\
. router.query used for dynamic parameters, URL, SPA.

_SPA Linking without sending another request for HTML_
. import Link from 'next/link'\
. Link prevents browserDefault of sending a request for HTML\
. Instead loads tobeloaded component 'href' component for us, changes URL. Similar to react-router Link

_Wrapping Layout_
. Wrap layout around Component within pages/app.js to lay layout and navigation around each page component.\
. may be relevant for ctx too?

_Adding link to a button to redirect to another page_
. import { useRouter } from 'next/router'\
. . react routes do not go inside functions, only at root level of a component (not in showDetailsHandler(), or any handler for example).\
. const router = useRouter();\
. router.push() -> equivalent of useHistory.push/Link. Pushes page to be top of history/stack of pages. Allows backward navigation with back function.

**2. Fetching data for pre-rendering**
Server side operations. Can involve operations and credentials, will not be exposed to end-users/client.

_Two forms of pre-rendering_

- 1: Static Generation -\
  export async function getStaticProps() {}\
  Special export function in page component file.\

Executes this function during the pre-render process. NextJS will call getStaticProps before it calls the component on the page.\
Async, can fetch data props to be put in to component.

getStatisProps () {
. returns props: the data which will populate the page\
. and revalidate: the frequency in seconds at which the server should look for new information, and update the props/date on page.
}

Take advantage of cacheing, no unnecessary reevaluations.

- 2: Server-side Rendering -\
  Regenerating page on every incoming request - not just every second or so.\
  export async function getServerSideProps() {}\
  Runs not just at build, will run continuously on server after deployment.

Gives you access to context.req and context.res\
Use if you have data which changes multiple times every second

_SSG & paths_
For dynamic pages (e.g. all under [meetupId])
getStaticProps(context)

. const meetupId = context.params.meetupId;
. export async function getStaticPaths() {
fallback: boolean
{ params: {meetupId: id from database}}

We need to tell NextJS which dynamic parameters should be used in order to pre-generate the pages. meetupIds.

getStaticProps allow us to generate props/data from the meetupId page.

**3. Fullstack Capabilities**
API routes - API endpoints
Fetching - post put update delete
Store data in a database - return JSON data

Add api folder - .js files within api folder will be turned in to api endpoints which can be targetted by requests to receive json and return json.
Within api .js files - no react component data. No rendering, returning, defining.
Server-side code - only runs on server. Never exposed to client. Can use credentials. Function is triggered whenever a request is sent to this route
. e.g. /api/new-meetup

Check /api/new-meetup.js

_Post Request to API new-meetup_
Posting information from NewMeetupForm component to Api/new-meetup.
Props are handed upward from meetupform via addMeetupHandler to newmeetup-index.js
Within component where information is handed to, we perform a normal API request.
async function - await response = fetch('/api/new-meetup) no .js extension.
