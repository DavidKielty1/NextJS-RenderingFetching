**intro**
What is NextJS? Why use it?
. Why using NextJS standalone may not be enough -- may not give you everything you want.

_Features_
. File based routing
. Page pre-rendering

Fullstack NextJS - API, data fetching -> pre-render pages with data.

Why use it? -> Fullstack framework for ReactJS

**3 Key Features:**

_1: Built-in Server-side Rendering (improved SEO!)_ \_
Automatic page pre-rendering - good for SEO and initial load.
Blending client-side and server-side: fetch data on the server and render finished pages.

_2: File-based Routing_ \_
Define pages and routes with files and folders instead of code.
Less code, less work, highly understandable.

_3: Fullstack Capabilities_ \_
Easily add backend (server-side) code to Next/React apps
Storing data, gatting data, authentication etc. can be added to React Projects

**Routing**
Folder based-routing. Routes automatically match pages directory.

_Dynamic Routing_
. import { useRouter } from 'next/router'
. const router = useRouter();
. router.query used for dynamic parameters, URL, SPA.

_SPA Linking without sending another request for HTML_
. import Link from 'next/link'
. Link prevents browserDefault of sending a request for HTML
. Instead loads tobeloaded component 'href' component for us, changes URL. Similar to react-router Link

_Wrapping Layout_
. Wrap layout around Component within pages/app.js to lay layout and navigation around each page component.
. may be relevant for ctx too?

_Adding link to a button to redirect to another page_
. import { useRouter } from 'next/router'
. . react routes do not go inside functions, only at root level of a component (not in showDetailsHandler(), or any handler for example).
. const router = useRouter();
. router.push() -> equivalent of useHistory.push/Link. Pushes page to be top of history/stack of pages. Allows backward navigation with back function.
