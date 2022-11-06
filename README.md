NextJS.

_intro_
What is NextJS? Why use it?
. Why using NextJS standalone may not be enough -- may not give you everything you want.

Features
. File based routing
. Page pre-rendering

Fullstack NextJS - API, data fetching -> pre-render pages with data.

Why use it? -> Fullstack framework for ReactJS

_3 Key Features:_

1: Built-in Server-side Rendering (improved SEO!)
Automatic page pre-rendering - good for SEO and initial load.
Blending client-side and server-side: fetch data on the server and render finished pages.

2: File-based Routing
Define pages and routes with files and folders instead of code.
Less code, less work, highly understandable.

3: Fullstack Capabilities
Easily add backend (server-side) code to Next/React apps
Storing data, gatting data, authentication etc. can be added to React Projects

_Routing_
Folder based-routing. Routes automatically match pages directory.

Dynamic Routing -
. import { useRouter } from 'next/router'
. const router = useRouter();
. router.query used for dynamic parameters, URL, SPA.

SPA Linking without sending another request for HTML  
. import Link from 'next/link'
. Link prevents browserDefault of sending a request for HTML
. Instead loads tobeloaded component 'href' component for us, changes URL. Similar to react-router Link

Wrapping Layout
. Wrap layout around Component within pages/app.js to lay layout and navigation around each page component.
. may be relevant for ctx too?

Adding link to a button to redirect to another page
. import { useRouter } from 'next/router'
. . react routes do not go inside functions, only at root level of a component (not in showDetailsHandler(), or any handler for example).
. const router = useRouter();
. router.push() -> equivalent of useHistory.push/Link. Pushes page to be top of history/stack of pages. Allows backward navigation with back function.

